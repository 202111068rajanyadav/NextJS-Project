"use client"

import { useFirebase } from '../context/firebase';
import { useState } from 'react';
import Card from '../Card';
import { useRouter } from 'next/navigation'

const Landing = () => {

  const fire=useFirebase();
  const router = useRouter()

  const handleLogout = () => {
    fire.logout();
  };

  if(!fire.user)
  router.push('/');

  const topics = [

    {
      title: 'Introduction to Rocket Science',
      image: 'https://img.freepik.com/premium-psd/3d-illustration-space-shuttle-booster_930095-139.jpg?w=740',
      description: 'Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and '
    },
    {
      title: 'Astro Physics',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfbn5CVq6HL623MJRBC9t2SH9DXk9WSEMkQ9Ab1Kj4yfcLmrD3',
      description: 'Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and '
    },
    {
      title: 'Artificial Intelligence',
      image: 'https://media.istockphoto.com/id/1447446303/photo/cpu-ai-circuit-board-europe-flag-concept.jpg?s=612x612&w=0&k=20&c=igZMuZi4vyHqJDp2cLb_7u8DkSlQ6fzuGHxJ0oApaiA=',
      description: 'Covers fundamentals, design, construction, operation and programming of robots.'
    },
    // Add more topics as needed
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, topics.length - 1));
  };

  return (
    <div className="bg-[#212121] min-h-screen">
      <div className="flex justify-between items-center p-4 bg-[#212121] w-full fixed top-0 z-10">
      <div className="text-xl font-bold">
        <span className="text-white">Lo</span>
        <span className="text-white bg-cyan-400 rounded">GO</span>
      </div>

        <div>
          <button
            onClick={handleLogout}
            className="bg-[#212121] text-cyan-400 py-2 px-4 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="border-b border-gray-500"></div>
      <div className="pt-20 px-4 relative">
        <h2 className="text-white text-2xl font-bold mb-4">Popular Topics</h2>
        <div className="flex overflow-x-hidden py-2 w-full">
          <div
            className="flex transition-transform duration-300 
            w-full h-full  scroll  scroll-smooth"
            style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
          >
            {topics.map((topic, index) => (
              <Card
                key={index}
                title={topic.title}
                image={topic.image}
                description={topic.description}
              />
            ))}
          </div>
        </div>
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 z-10"
        >
          &#9664;
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 z-10"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Landing;


