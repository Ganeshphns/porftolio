// // import React from "react";

// // function About() {
// //   return (
// //     <section className="min-h-[92vh] flex items-center justify-center bg-[#181c23] text-white px-4">
// //       <div className="max-w-2xl w-full">
// //         <h1 className="text-4xl font-bold mb-4 text-[#ff5e5e]">About Me</h1>
// //         <p className="mb-4 text-lg">
// //           Hi, I'm Ganesh, a passionate MERN Stack Web Developer with a strong focus on building responsive and dynamic web applications. I specialize in MongoDB, Express.js, React.js, and Node.js, and I love creating clean, functional, and visually appealing user experiences.
// //         </p>
// //         <p className="mb-4 text-lg">
// //           With a keen eye for design and a dedication to best coding practices, I strive to deliver high-quality solutions that meet client needs and exceed expectations. Whether working independently or as part of a team, I am always eager to learn new technologies and take on exciting challenges.
// //         </p>
// //         <p className="text-lg">
// //           Let's connect and create something amazing together!
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;
// import React from "react";

// export default function About() {
//   return (
//     <section className="min-h-screen px-4 py-12 bg-[#181c23] text-white">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold mb-4 text-[#ff5e5e]">About Me</h1>

//         {/* Intro */}
//         <p className="text-lg text-gray-300 mb-6">
//           Hello! I'm a passionate and dedicated MERN stack developer with a strong foundation in full-stack web development. I enjoy building modern, responsive, and user-friendly web applications. Currently focused on expanding my skills in TypeScript and DevOps tools.
//         </p>

//         {/* Who I Am */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-3 text-[#ff5e5e]">Who I Am</h2>
//           <p className="text-gray-300">
//             I'm a fresher from a Tier-3 college who loves turning ideas into digital solutions. Whether it’s the frontend aesthetics or backend logic, I enjoy crafting seamless experiences that solve real-world problems. I believe in writing clean, maintainable code and continuously improving as a developer.
//           </p>
//         </div>

//         {/* Education */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-3 text-[#ff5e5e]">Education</h2>
//           <div className="space-y-4 text-gray-300">
//             <div>
//               <p className="font-bold text-white">Bachelor of Technology in Computer Science</p>
//               <p>BVCITS College, Batlapalem </p>
//               <p>2022 - 2026</p>
//             </div>
//             <div>
//               <p className="font-bold text-white">12th Standard</p>
//               <p>Sri ravi Teja Junior College</p>
//               <p>2020 - 2022</p>
//             </div>
//             <div>
//               <p className="font-bold text-white">Secondary Education</p>
//               <p>Z.P.P. High School </p>
//               <p>2020</p>
//             </div>
//           </div>
//         </div>

//         {/* Interests */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-3 text-[#ff5e5e]">Interests</h2>
//           <p className="text-gray-300">
//             I love exploring new technologies, contributing to open source, and building side projects. When I'm not coding, I enjoy reading tech blogs, participating in hackathons, and watching tutorials to upskill myself.
//           </p>
//         </div>

//         {/* Contact CTA */}
//         <div className="mt-10">
//           <h2 className="text-xl font-semibold mb-2 text-[#ff5e5e]">Let’s Connect</h2>
//           <p className="text-gray-300">
//             Want to collaborate or have any questions? Feel free to reach out via the contact page.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";

export default function About() {
  return (
    <section className="min-h-screen px-4 py-12 bg-white text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-[#ff5e5e]">About Me</h1>

        {/* Intro */}
        <p className="text-lg mb-6">
          Hello! I'm a passionate and dedicated MERN stack developer with a strong foundation in full-stack web development. I enjoy building modern, responsive, and user-friendly web applications. Currently focused on expanding my skills in TypeScript and DevOps tools.
        </p>

        {/* Who I Am */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff5e5e]">Who I Am</h2>
          <p>
            I'm a fresher from a Tier-3 college who loves turning ideas into digital solutions. Whether it’s the frontend aesthetics or backend logic, I enjoy crafting seamless experiences that solve real-world problems. I believe in writing clean, maintainable code and continuously improving as a developer.
          </p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff5e5e]">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900">Bachelor of Technology in Computer Science</p>
              <p>BVCITS College, Batlapalem</p>
              <p>2022 - 2026</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">12th Standard</p>
              <p>Sri Ravi Teja Junior College</p>
              <p>2020 - 2022</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Secondary Education</p>
              <p>Z.P.P. High School</p>
              <p>2020</p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-[#ff5e5e]">Interests</h2>
          <p>
            I love exploring new technologies, contributing to open source, and building side projects. When I'm not coding, I enjoy reading tech blogs, participating in hackathons, and watching tutorials to upskill myself.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2 text-[#ff5e5e]">Let’s Connect</h2>
          <p>
            Want to collaborate or have any questions? Feel free to reach out via the contact page.
          </p>
        </div>
      </div>
    </section>
  );
}

