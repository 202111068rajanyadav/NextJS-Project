
"use client"; // Ensure this file is treated as a client component

import { useFirebase } from '../context/firebase';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

export default function SignUp() {
  const fire = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  if(fire.user)
    router.push('/landing');

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Image */}
      {/* <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="https://img.freepik.com/free-photo/painting-person-standing-cliff-with-blue-lake-background_1340-42925.jpg?t=st=1723013593~exp=1723017193~hmac=93267504f0753dec616d4f09823f872bdc701c403b8aee774d5d830ebb27b230&w=996"
          alt="SignUp Image"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="relative"  style={{ height: '100vh' }}>
    <img
        src="https://img.freepik.com/free-photo/painting-person-standing-cliff-with-blue-lake-background_1340-42925.jpg?t=st=1723013593~exp=1723017193~hmac=93267504f0753dec616d4f09823f872bdc701c403b8aee774d5d830ebb27b230&w=996"
        alt="SignUp Image"
        fill
        style={{ objectFit: 'cover' , height: '100%'}} // Set object-fit to 'cover'
    />
</div>

      {/* Right side - SignUp Form */}
      <div className="w-full md:w-1/2 bg-[#212121] text-white flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-[#333332] border border-white rounded-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Sign Up</h1>
          <p className="text-xl mb-4 text-center">Choose a Sign-Up Method</p>
          <button
            onClick={fire.googleAuth}
            className="w-full py-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2"  />
            Sign Up with Google
          </button>
          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="w-full border-gray-600" />
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                console.log(email);
                console.log(password);
                fire.setUser(email,password);
              }}
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            >
               <FontAwesomeIcon icon={faEnvelope} className="mr-2"  />
              Sign Up with Email
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-center">
            Already a user? <Link href="/Login" className="text-blue-400">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

