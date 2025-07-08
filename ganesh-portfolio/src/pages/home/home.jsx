// import React from "react";
// import heroImg from "../../assets/1000204134.jpg"; // Place your image in src/assets and update the path
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";

// function Home() {
//   return (
//     <section className="relative min-h-[92vh] flex items-center bg-[#181c23] overflow-hidden">
//       {/* Decorative background (optional, can use a canvas or SVG for lines/dots) */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* You can use a particles.js or SVG background here */}
//       </div>
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-4 py-16">
//         {/* Left Content */}
//         <div className="flex-1 text-white max-w-xl">
//           <h2 className="text-3xl font-bold text-[#ff5e5e] mb-2">HELLO!</h2>
//           {/* <p className="text-lg font-semibold text-[#ff5e5e] mb-2">HELLO!</p> */}
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//             I Am <span className="text-white">Ganesh</span>
//           </h1>
//           <p className="mb-8 text-gray-300">
//             I'm a MERN Stack Web Developer passionate about building responsive
//             and dynamic web applications. I specialize in MongoDB, Express.js,
//             React.js, and Node.js, with a focus on clean design and
//             functionality..
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition">
//               View Work
//             </button>
//             <button className="bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition">
//               Hire Me
//             </button>
//           </div>
//         </div>
//         {/* Right Image */}
//         <div className="flex-1 flex justify-center mt-10 md:mt-0">
//           <img
//             src={heroImg}
//             alt="Profile"
//             className="w-80 h-80 object-cover rounded-full shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from "react";
import heroImg from "../../assets/1000204134.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Home() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Optional background particles */}
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-4 py-16">
        {/* Left Content */}
        <div className="flex-1 text-slate-800 max-w-xl">
          <h2 className="text-3xl font-bold text-[#ff5e5e] mb-2">HELLO!</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            I Am <span className="text-slate-800">Ganesh</span>
          </h1>
          <p className="mb-8 text-slate-600">
            I'm a MERN Stack Web Developer passionate about building responsive
            and dynamic web applications. I specialize in MongoDB, Express.js,
            React.js, and Node.js, with a focus on clean design and
            functionality.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition">
              View Work
            </button>
            <button className="bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition">
              Hire Me
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={heroImg}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;



