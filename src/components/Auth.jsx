import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setMobileNumber('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        setMessage(`Welcome ${storedUser.firstName}!`);
        setTimeout(() => {
          navigate('/'); 
        }, 100); 
      } else {
        setMessage('Invalid credentials');
      }
    } else {
      localStorage.setItem('user', JSON.stringify({ email, password, firstName, lastName, mobileNumber }));
      setMessage('User registered successfully!');
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-cover bg-center bg-[url('../assets/aboutUs.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-400 opacity-50"></div>
      <div className="absolute top-1 text-center w-full p-5 py-10 mt-11 text-white">
        <h1 className="text-5xl font-bold mb-3">Welcome to Our Service</h1>
        <p className="text-xl mt-5">Please login or sign up to continue</p>
      </div>

      <div className="relative w-full max-w-xs mt-20">
        <form onSubmit={handleSubmit} className="bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="mobileNumber">
                  Mobile Number
                </label>
                <input
                  id="mobileNumber"
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-orange-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <a
              href="#"
              onClick={handleToggle}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-green-400"
            >
              {isLogin ? 'Sign Up' : 'Login'} 
            </a>
          </div>
          {message && (
            <p className={`text-center mt-4 text-xs italic ${message === 'Invalid credentials' ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
