// import React from "react";

// export default function Resume() {
//   return (
//     <section className="min-h-screen bg-white text-black px-6 py-10">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold">Ganesh Phns</h1>
//           <p className="text-lg text-gray-700">MERN Stack Developer</p>
//           <div className="mt-2 text-sm text-gray-600">
//             <p>Email: ganesh@example.com | Phone: +91 9876543210</p>
//             <p>GitHub: github.com/ganesh | LinkedIn: linkedin.com/in/ganesh</p>
//           </div>
//         </div>

//         {/* Summary */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">Professional Summary</h2>
//           <p>
//             Passionate and detail-oriented MERN Stack Developer with strong knowledge in building responsive and dynamic web applications. Adept in React.js, Node.js, Express.js, and MongoDB. Eager to contribute to impactful projects and grow in a collaborative environment.
//           </p>
//         </div>

//         {/* Education */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">Education</h2>
//           <p className="font-medium">B.Tech in Computer Science</p>
//           <p>Tier-3 Engineering College, India</p>
//           <p>2021 – 2025</p>
//         </div>

//         {/* Skills */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">Technical Skills</h2>
//           <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Redux, Tailwind CSS</p>
//           <p><strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose</p>
//           <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code</p>
//           <p><strong>Deployments:</strong> Vercel, Netlify, Render</p>
//         </div>

//         {/* Projects */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">Projects</h2>
//           <div className="mb-4">
//             <p className="font-medium">1. Restaurant Web App (MERN Stack)</p>
//             <p>Built a full-stack restaurant application with menu, cart, user authentication, and admin dashboard.</p>
//             <p className="text-sm text-blue-600">GitHub: github.com/ganesh/restaurant-app</p>
//           </div>
//           <div>
//             <p className="font-medium">2. Portfolio Website</p>
//             <p>Responsive personal portfolio built using React and Tailwind CSS.</p>
//             <p className="text-sm text-blue-600">Live: ganesh-portfolio.vercel.app</p>
//           </div>
//         </div>

//         {/* Certifications */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">Certifications</h2>
//           <p>Full-Stack Web Development – Udemy</p>
//           <p>JavaScript Algorithms & Data Structures – freeCodeCamp</p>
//         </div>

//         {/* Soft Skills */}
//         <div>
//           <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">Soft Skills</h2>
//           <p>Problem Solving, Communication, Teamwork, Time Management</p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Resume() {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Ganesh Phns</h1>
          <p className="text-lg text-gray-700">MERN Stack Developer</p>
          <div className="mt-2 text-sm text-gray-600">
            <p>Email: satyaganesh6969@gmail.com | Phone: +91 9876543210</p>
            <p>
              GitHub: github.com/Ganeshphns | LinkedIn:
              linkedin.com/in/phns-ganesh
            </p>
          </div>

          {/* View/Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="/resume/ganesh_Mern_stack_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
            >
              View Resume
            </a>
            <a
              href="/resume/ganesh_Mern_stack_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-[#ff5e5e] hover:bg-[#ff4343] text-[#ff5e5e] hover:text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">
            Professional Summary
          </h2>
          <p>
            Passionate and detail-oriented MERN Stack Developer with strong
            knowledge in building responsive and dynamic web applications. Adept
            in React.js, Node.js, Express.js, and MongoDB. Eager to contribute
            to impactful projects and grow in a collaborative environment.
          </p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">
            Education
          </h2>
          <p className="font-medium">B.Tech in Computer Science</p>
          <p>Tier-3 Engineering College, India</p>
          <p>2021 – 2025</p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">
            Technical Skills
          </h2>
          <p>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Redux,
            Tailwind CSS
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose
          </p>
          <p>
            <strong>Tools:</strong> Git, GitHub, Postman, VS Code
          </p>
          <p>
            <strong>Deployments:</strong> Vercel, Netlify, Render
          </p>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">
            Projects
          </h2>
          <div className="mb-4">
            <p className="font-medium">1. Restaurant Web App (MERN Stack)</p>
            <p>
              Built a full-stack restaurant application with menu, cart, user
              authentication, and admin dashboard.
            </p>
            <p className="text-sm text-blue-600">
              GitHub: github.com/Ganeshphns/restaurant-app
            </p>
          </div>
          <div>
            <p className="font-medium">2. Portfolio Website</p>
            <p>
              Responsive personal portfolio built using React and Tailwind CSS.
            </p>
            <p className="text-sm text-blue-600">
              Live: ganesh-portfolio.vercel.app
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">
            Certifications
          </h2>
          <p>Full-Stack Web Development – Udemy</p>
          <p>JavaScript Algorithms & Data Structures – freeCodeCamp</p>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ff5e5e] mb-2">
            Soft Skills
          </h2>
          <p>Problem Solving, Communication, Teamwork, Time Management</p>
        </div>
      </div>
    </section>
  );
}
