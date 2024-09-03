import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    title: 'Day Pass',
    price: '$20',
    description: '. 1 Day Pass\n. Free Gym Access\n. 24 Hour Access',
    info: 'This pass provides one day of access to the gym facilities, including all equipment and classes. Enjoy the flexibility of a single-day visit with no long-term commitment.',
  },
  {
    id: 2,
    title: 'Month to Month',
    price: '$90',
    description: '$99 Joining Fee\nNo Contract\nFree Gym Access\n1 Group Class Included\n24 Hour Access',
    info: 'This membership offers month-to-month access with no long-term contract. Includes one group class per month and unlimited access to the gym facilities. Perfect for those who want flexibility and convenience.',
  },
];

const Membership = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleButtonClick = () => {
    navigate(`/auth`);
  };

  return (
    <section id='membership' className='scroll-smooth'>
      <div className='text-white text-center text-4xl font-semibold p-6 lg:text-6xl'>
        <p>Membership</p>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`border p-4 rounded-lg w-60  bg-neutral-600 text-white cursor-pointer transition-transform duration-300 relative ${
                selectedCard === card.id ? 'transform scale-105' : ''
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-2xl text-green-400 font-bold mb-2">{card.price}</p>
              <p className="text-sm whitespace-pre-line mb-20">{card.description}</p>
              <button
                className="bg-orange-500 text-white px-4 py-2  rounded-lg hover:bg-orange-600 transition absolute bottom-4 left-1/2 transform -translate-x-1/2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  handleButtonClick();
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {selectedCard && (
          <div className="w-full max-w-2xl p-4 bg-neutral-800 text-orange-500 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              {cardData.find((card) => card.id === selectedCard)?.title} Details
            </h2>
            <p>{cardData.find((card) => card.id === selectedCard)?.info}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Membership;
