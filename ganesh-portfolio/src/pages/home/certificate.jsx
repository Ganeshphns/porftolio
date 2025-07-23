// import React from "react";

// const certificates = [
//   {
//     title: "Full-Stack Web Development",
//     platform: "Udemy",
//     link: "https://www.udemy.com/certificate/XYZ123",
//   },
//   {
//     title: "JavaScript Algorithms & Data Structures",
//     platform: "freeCodeCamp",
//     link: "https://freecodecamp.org/certification/ganesh/javascript",
//   },
// ];

// export default function Certificates() {
//   return (
//     <section className="min-h-screen bg-white text-black px-6 py-10">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-[#ff5e5e] mb-8">
//           Certifications & Achievements
//         </h1>

//         <div className="space-y-6">
//           {certificates.map((cert, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 p-4 rounded-md shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {cert.title}
//               </h2>
//               <p className="text-sm text-gray-600 mb-2">
//                 Issued by: <span className="font-medium">{cert.platform}</span>
//               </p>
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-2 text-sm text-white bg-[#ff5e5e] hover:bg-[#ff4343] px-4 py-1 rounded-full"
//               >
//                 View Certificate
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














import React from "react";

const certificates = [
  {
    title: "Java Full Stack Development",
    platform: "Eduskills",
    href: "/certificates/eduskills-java.pdf",
  },
  {
    title: "Front-End Development",
    platform: "Talent Shine",
    href: "/certificates/front-end-dev.pdf",
  },
  {
    title: "HTML5",
    platform: "Infosys Springboard",
    href: "/certificates/html-5.pdf",
  },
  {
    title: "JavaScript",
    platform: "Infosys Springboard",
    href: "/certificates/js.pdf",
  },
  { 
    title: "Virtual Internship Certificate",
    platform: "EduSkills",
    href: "/certificates/pitchuka-ganesh.pdf",
  },
  {
    title: "TypeScript",
    platform: "Infosys Springboard",
    href: "/certificates/typescript1.pdf",
  },
]


export default function Certificates() {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#ff5e5e] mb-8">
          Certifications & Achievements
        </h1>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-md shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Issued by: <span className="font-medium">{cert.platform}</span>
              </p>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-white bg-[#ff5e5e] hover:bg-[#ff4343] px-4 py-1 rounded-full"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
