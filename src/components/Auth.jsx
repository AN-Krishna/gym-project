import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaTwitter, FaFacebookF, FaArrowLeft } from 'react-icons/fa';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
  });
  const [message, setMessage] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
    });
    setMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        setMessage(`Welcome back, ${storedUser.firstName}!`);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setMessage('Invalid credentials');
      }
    } else {
      if (
        formData.email &&
        formData.password &&
        formData.firstName &&
        formData.lastName &&
        formData.mobileNumber
      ) {
        localStorage.setItem('user', JSON.stringify(formData));
        setMessage('User registered successfully!');
        setTimeout(() => {
          setIsLogin(true);
          setMessage('');
        }, 2000);
      } else {
        setMessage('Please fill in all fields');
      }
    }
  };

  const handleSocialLogin = (provider) => {
    // Placeholder for social login functionality
    setMessage(`Logging in with ${provider} is not implemented yet.`);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Arrow to go back to the Home page */}
      <div
        className="absolute top-4 left-4 cursor-pointer text-white"
        onClick={() => navigate('/')}
      >
        <FaArrowLeft className="text-3xl" />
      </div>

      {/* Left Side - Heading */}
      <div className="md:w-1/2 bg-gradient-to-br from-orange-500 to-zinc-800 flex items-center justify-center p-10">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Our Service
          </h1>
          <p className="text-lg text-white text-center">
            {isLogin
              ? 'Please login to continue'
              : 'Create an account to get started'}
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            {isLogin ? 'Login to Your Account' : 'Create a New Account'}
          </h2>

          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded mb-3 hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="mr-2" />
            {isLogin ? 'Login' : 'Sign Up'} with Google
          </button>
          <button
            onClick={() => handleSocialLogin('Twitter')}
            className="w-full flex items-center justify-center bg-blue-400 text-white py-2 px-4 rounded mb-3 hover:bg-blue-500 transition duration-300"
          >
            <FaTwitter className="mr-2" />
            {isLogin ? 'Login' : 'Sign Up'} with Twitter
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded mb-6 hover:bg-blue-700 transition duration-300"
          >
            <FaFacebookF className="mr-2" />
            {isLogin ? 'Login' : 'Sign Up'} with Facebook
          </button>

          <div className="flex items-center justify-center mb-6">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-gray-700 mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={handleToggle}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>

          {message && (
            <div
              className={`mt-4 text-center py-2 px-4 rounded ${
                message.includes('success')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
