// import React from "react";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Restaurant Web App",
//     description:
//       "A full-featured restaurant app built with MERN stack, allowing users to browse menus, order food, and admins to manage inventory.",
//     tech: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
//     liveLink: "https://your-restaurant-app.vercel.app",
//     codeLink: "https://github.com/yourname/restaurant-app",
//     image: "https://via.placeholder.com/600x350?text=Restaurant+App",
//   },
//   {
//     title: "E-Commerce Site",
//     description:
//       "An online store with user auth, product filters, cart and checkout. Built using the MERN stack.",
//     tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
//     liveLink: "https://your-ecommerce-app.netlify.app",
//     codeLink: "https://github.com/yourname/ecommerce-app",
//     image: "https://via.placeholder.com/600x350?text=E-Commerce+Site",
//   },
//   {
//     title: "Task Manager",
//     description:
//       "A simple task manager app with CRUD functionality and user login.",
//     tech: ["React", "Firebase", "Tailwind CSS"],
//     liveLink: "https://your-taskmanager-app.vercel.app",
//     codeLink: "https://github.com/yourname/task-manager",
//     image: "https://via.placeholder.com/600x350?text=Task+Manager",
//   },
// ];

// export default function Portfolio() {
//   return (
//     <section className="bg-[#181c23] text-white py-12 px-4 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-[#ff5e5e] mb-8 text-center">
//           Projects I've Built
//         </h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#23272f] rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs bg-[#2e323c] px-2 py-1 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-blue-400 hover:underline"
//                   >
//                     Live <FaExternalLinkAlt className="text-sm" />
//                   </a>
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-gray-400 hover:underline"
//                   >
//                     Code <FaGithub className="text-lg" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Restaurant Web App",
    description:
      "A full-featured restaurant app built with MERN stack, allowing users to browse menus, order food, and admins to manage inventory.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://your-restaurant-app.vercel.app",
    codeLink: "https://github.com/yourname/restaurant-app",
    image: "https://via.placeholder.com/600x350?text=Restaurant+App",
  },
  {
    title: "E-Commerce Site",
    description:
      "An online store with user auth, product filters, cart and checkout. Built using the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "https://your-ecommerce-app.netlify.app",
    codeLink: "https://github.com/yourname/ecommerce-app",
    image: "https://via.placeholder.com/600x350?text=E-Commerce+Site",
  },
  {
    title: "Task Manager",
    description:
      "A simple task manager app with CRUD functionality and user login.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://your-taskmanager-app.vercel.app",
    codeLink: "https://github.com/yourname/task-manager",
    image: "https://via.placeholder.com/600x350?text=Task+Manager",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ff5e5e] mb-10 text-center">
          Projects I've Built
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    Live <FaExternalLinkAlt className="text-sm" />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:underline"
                  >
                    Code <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
