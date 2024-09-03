import React, { useState } from 'react'
import {allTeam} from "../constants/index"

const TrainerSection = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShow = () => {
        setShowAll((prevShowAll) => !prevShowAll);
      };
    const displayedTeam = showAll ? allTeam : allTeam.slice(0, 3);

  return (
    <div>
        <div id='training' className="border-b border-neutral-500  p-4 max-w-7xl mx-auto">
        <div className='text-white text-center text-4xl font-semibold p-6 lg:text-6xl'>
           <p>Our Trainers</p> 
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedTeam.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={member.image} alt={member.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{member.title}</h2>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleShow}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
        >
          {showAll ? 'View Less' : 'Show All'}
        </button>
      </div>
    </div>
        
    </div>
  )
}

export default TrainerSection