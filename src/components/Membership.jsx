import React, { useState } from 'react';

const cardData = [
  {
    id: 1,
    title: 'Day Pass',
    price: '$20',
    description: '1 Day Pass\nFree Gym Access\n24 Hour Access',
    info: 'This is the information for the Day Pass.',
  },
  {
    id: 2,
    title: 'Month to Month',
    price: '$90',
    description: '$99 Joining Fee\nNo Contract\nFree Gym Access\n1 Group Class Included\n24 Hour Access',
    info: 'This is the information for Month to Month.',
  },
];

const Membership = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <section id='membership' className='scroll-smooth'>
        <div className='text-white text-center text-4xl font-semibold p-6 lg:6xl'>
           <p>Membership</p> 
        </div>
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`border p-4 rounded-lg w-64 bg-neutral-600 text-white cursor-pointer transition-transform duration-300 ${
              selectedCard === card.id ? 'transform scale-105' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-2xl text-green-400 font-bold mb-2">{card.price}</p>
            <p className="text-sm whitespace-pre-line">{card.description}</p>
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
