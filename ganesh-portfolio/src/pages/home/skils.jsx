// // import React from "react";
// // import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt } from "react-icons/fa";

// // function Skills() {
// //   return (
// //     <section className="min-h-[80vh] flex items-center justify-center bg-[#181c23] text-white px-4">
// //       <div className="max-w-2xl w-full">
// //         <h1 className="text-4xl font-bold mb-6 text-[#ff5e5e]">My Skills</h1>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
// //           <div className="flex flex-col items-center">
// //             <FaReact className="text-5xl text-cyan-400 mb-2" />
// //             <span className="font-semibold">React.js</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <FaNodeJs className="text-5xl text-green-500 mb-2" />
// //             <span className="font-semibold">Node.js</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <FaJs className="text-5xl text-yellow-400 mb-2" />
// //             <span className="font-semibold">JavaScript</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <FaHtml5 className="text-5xl text-orange-500 mb-2" />
// //             <span className="font-semibold">HTML5</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <FaCss3Alt className="text-5xl text-blue-400 mb-2" />
// //             <span className="font-semibold">CSS3</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <FaDatabase className="text-5xl text-purple-400 mb-2" />
// //             <span className="font-semibold">MongoDB</span>
// //           </div>
// //           <div className="flex flex-col items-center">
// //             <FaGitAlt className="text-5xl text-orange-400 mb-2" />
// //             <span className="font-semibold">Git</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Skills;
// import React from "react";
// import {
//   FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt,
//   FaBootstrap, FaGithub, FaRegCheckCircle
// } from "react-icons/fa";
// import {
//   SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiNetlify,
//   SiRender, SiFirebase, SiNextdotjs, SiTypescript, SiDocker
// } from "react-icons/si";
// // Removed VscVisualStudioCode import due to missing export

// const SkillBadge = ({ icon, name }) => (
//   <div className="flex items-center gap-2 bg-[#23272f] px-3 py-2 rounded-lg shadow text-base font-medium">
//     <span className="text-2xl">{icon}</span>
//     <span>{name}</span>
//   </div>
// );

// export default function Skills() {
//   return (
//     <section className="min-h-screen px-4 py-12 bg-[#181c23] text-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Headline */}
//         <h1 className="text-4xl font-bold mb-2 text-[#ff5e5e]">
//           Skills & Technologies I Work With
//         </h1>
//         <p className="mb-8 text-gray-300">
//           Here are the tools and technologies I use to build modern, performant web applications.
//         </p>

//         {/* Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Frontend */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Frontend</h2>
//             <div className="flex flex-wrap gap-4">
//               <SkillBadge icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
//               <SkillBadge icon={<FaCss3Alt className="text-blue-400" />} name="CSS3" />
//               <SkillBadge icon={<FaJs className="text-yellow-400" />} name="JavaScript (ES6+)" />
//               <SkillBadge icon={<FaReact className="text-cyan-400" />} name="React.js" />
//               <SkillBadge icon={<SiRedux className="text-purple-400" />} name="Redux Toolkit" />
//               <SkillBadge icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
//               <SkillBadge icon={<FaBootstrap className="text-violet-400" />} name="Bootstrap" />
       
             
//               <SkillBadge icon={<span className="text-green-400 font-bold">API</span>} name="REST API Integration" />
//             </div>
//           </div>

//           {/* Backend */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Backend</h2>
//             <div className="flex flex-wrap gap-4">
//               <SkillBadge icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
//               <SkillBadge icon={<SiExpress className="text-gray-300" />} name="Express.js" />
//               <SkillBadge icon={<SiMongodb className="text-green-400" />} name="MongoDB" />
//               <SkillBadge icon={<FaDatabase className="text-purple-400" />} name="Mongoose" />
//               <SkillBadge icon={<span className="text-red-400 font-bold">JWT</span>} name="JWT Auth" />
//               <SkillBadge icon={<span className="text-blue-400 font-bold">OAuth</span>} name="OAuth" />
//             </div>
//           </div>

//           {/* Tools & Platforms */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Tools & Platforms</h2>
//             <div className="flex flex-wrap gap-4">
//               <SkillBadge icon={<FaGitAlt className="text-orange-400" />} name="Git" />
//               <SkillBadge icon={<FaGithub className="text-white" />} name="GitHub" />
//               {/* Replaced unavailable icon with fallback text */}
//               <SkillBadge icon={<span className="text-blue-400 font-bold">VS</span>} name="VS Code" />
//               <SkillBadge icon={<SiPostman className="text-orange-500" />} name="Postman" />
//               <SkillBadge icon={<span className="text-white font-bold">▲</span>} name="Vercel" />
//               <SkillBadge icon={<SiNetlify className="text-green-400" />} name="Netlify" />
//               <SkillBadge icon={<SiRender className="text-blue-400" />} name="Render" />
//               <SkillBadge icon={<FaDatabase className="text-green-400" />} name="MongoDB Atlas" />
//             </div>
//           </div>

//           {/* Soft Skills */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Soft Skills</h2>
//             <div className="flex flex-wrap gap-4">
//               <SkillBadge icon={<FaRegCheckCircle className="text-green-400" />} name="Problem Solving" />
//               <SkillBadge icon={<FaRegCheckCircle className="text-green-400" />} name="Collaboration & Teamwork" />
//               <SkillBadge icon={<FaRegCheckCircle className="text-green-400" />} name="Communication" />
//               <SkillBadge icon={<FaRegCheckCircle className="text-green-400" />} name="Time Management" />
//             </div>
//           </div>
//         </div>

//         {/* Currently Learning */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Currently Learning</h2>
//           <div className="flex flex-wrap gap-4">
//             <SkillBadge icon={<SiTypescript className="text-blue-400" />} name="TypeScript" />
//             <SkillBadge icon={<SiDocker className="text-blue-300" />} name="Docker" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt,
  FaBootstrap, FaGithub, FaRegCheckCircle
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiNetlify,
  SiRender, SiFirebase, SiNextdotjs, SiTypescript, SiDocker
} from "react-icons/si";

const SkillBadge = ({ icon, name }) => (
  <div className="flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg shadow-sm font-medium">
    <span className="text-2xl">{icon}</span>
    <span>{name}</span>
  </div>
);

export default function Skills() {
  return (
    <section className="min-h-screen px-4 py-12 bg-white text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-2 text-[#ff5e5e]">
          Skills & Technologies I Work With
        </h1>
        <p className="mb-8 text-gray-600">
          Here are the tools and technologies I use to build modern, performant web applications.
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Frontend</h2>
            <div className="flex flex-wrap gap-4">
              <SkillBadge icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
              <SkillBadge icon={<FaCss3Alt className="text-blue-600" />} name="CSS3" />
              <SkillBadge icon={<FaJs className="text-yellow-500" />} name="JavaScript (ES6+)" />
              <SkillBadge icon={<FaReact className="text-cyan-500" />} name="React.js" />
              <SkillBadge icon={<SiRedux className="text-purple-500" />} name="Redux Toolkit" />
              <SkillBadge icon={<SiTailwindcss className="text-sky-500" />} name="Tailwind CSS" />
              <SkillBadge icon={<FaBootstrap className="text-violet-500" />} name="Bootstrap" />
              <SkillBadge icon={<span className="text-green-600 font-bold">API</span>} name="REST API Integration" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Backend</h2>
            <div className="flex flex-wrap gap-4">
              <SkillBadge icon={<FaNodeJs className="text-green-600" />} name="Node.js" />
              <SkillBadge icon={<SiExpress className="text-gray-700" />} name="Express.js" />
              <SkillBadge icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
              <SkillBadge icon={<FaDatabase className="text-purple-500" />} name="Mongoose" />
              <SkillBadge icon={<span className="text-red-500 font-bold">JWT</span>} name="JWT Auth" />
              <SkillBadge icon={<span className="text-blue-500 font-bold">OAuth</span>} name="OAuth" />
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Tools & Platforms</h2>
            <div className="flex flex-wrap gap-4">
              <SkillBadge icon={<FaGitAlt className="text-orange-500" />} name="Git" />
              <SkillBadge icon={<FaGithub className="text-black" />} name="GitHub" />
              <SkillBadge icon={<span className="text-blue-600 font-bold">VS</span>} name="VS Code" />
              <SkillBadge icon={<SiPostman className="text-orange-500" />} name="Postman" />
              <SkillBadge icon={<span className="text-black font-bold">▲</span>} name="Vercel" />
              <SkillBadge icon={<SiNetlify className="text-green-500" />} name="Netlify" />
              <SkillBadge icon={<SiRender className="text-blue-500" />} name="Render" />
              <SkillBadge icon={<FaDatabase className="text-green-500" />} name="MongoDB Atlas" />
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Soft Skills</h2>
            <div className="flex flex-wrap gap-4">
              <SkillBadge icon={<FaRegCheckCircle className="text-green-600" />} name="Problem Solving" />
              <SkillBadge icon={<FaRegCheckCircle className="text-green-600" />} name="Collaboration & Teamwork" />
              <SkillBadge icon={<FaRegCheckCircle className="text-green-600" />} name="Communication" />
              <SkillBadge icon={<FaRegCheckCircle className="text-green-600" />} name="Time Management" />
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#ff5e5e]">Currently Learning</h2>
          <div className="flex flex-wrap gap-4">
            <SkillBadge icon={<SiTypescript className="text-blue-600" />} name="TypeScript" />
            <SkillBadge icon={<SiDocker className="text-blue-400" />} name="Docker" />
          </div>
        </div>
      </div>
    </section>
  );
}
