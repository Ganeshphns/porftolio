// // import React from "react";

// // function Contact() {
// //   return (
// //     <section className="min-h-[80vh] flex items-center justify-center bg-[#181c23] text-white px-4">
// //       <div className="max-w-lg w-full bg-[#23272f] rounded-lg shadow-lg p-8">
// //         <h1 className="text-3xl font-bold mb-6 text-[#ff5e5e]">Contact Me</h1>
// //         <form className="space-y-5">
// //           <div>
// //             <label className="block mb-1 text-sm font-semibold" htmlFor="name">
// //               Name
// //             </label>
// //             <input
// //               className="w-full px-4 py-2 rounded bg-[#181c23] border border-gray-600 text-white focus:outline-none focus:border-[#ff5e5e]"
// //               type="text"
// //               id="name"
// //               placeholder="Your Name"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1 text-sm font-semibold" htmlFor="email">
// //               Email
// //             </label>
// //             <input
// //               className="w-full px-4 py-2 rounded bg-[#181c23] border border-gray-600 text-white focus:outline-none focus:border-[#ff5e5e]"
// //               type="email"
// //               id="email"
// //               placeholder="you@example.com"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block mb-1 text-sm font-semibold" htmlFor="message">
// //               Message
// //             </label>
// //             <textarea
// //               className="w-full px-4 py-2 rounded bg-[#181c23] border border-gray-600 text-white focus:outline-none focus:border-[#ff5e5e]"
// //               id="message"
// //               rows="4"
// //               placeholder="Your message..."
// //               required
// //             ></textarea>
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Contact;
// import React from "react";
// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// function Contact() {
//   return (
//     <section className="min-h-[80vh] flex items-center justify-center bg-[#181c23] text-white px-4">
//       <div className="max-w-lg w-full bg-[#23272f] rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold mb-6 text-[#ff5e5e]">Contact Me</h1>
//         <div className="mb-6 space-y-2">
//           <p>
//             <span className="font-semibold">Email:</span>{" "}
//             <a
//               href="mailto:satyaganesh6969@gmail.com"
//               className="text-[#ff5e5e] hover:underline"
//             >
//               satyaganesh6969@gmail.com
//             </a>
//           </p>
//           <p>
//             <span className="font-semibold">Mobile:</span>{" "}
//             <a
//               href="tel:+91 7659053431"
//               className="text-[#ff5e5e] hover:underline"
//             >
//               7659053431
//             </a>
//           </p>
//           <div className="flex gap-4 mt-2">
//             <a
//               href="https://linkedin.com/in/phns-ganesh"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5e5e] hover:text-white text-2xl"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/Ganeshphns"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5e5e] hover:text-white text-2xl"
//               aria-label="GitHub"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://twitter.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5e5e] hover:text-white text-2xl"
//               aria-label="Twitter"
//             >
//               <FaTwitter />
//             </a>
//           </div>
//         </div>
//         <form className="space-y-5">
//           <div>
//             <label className="block mb-1 text-sm font-semibold" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="w-full px-4 py-2 rounded bg-[#181c23] border border-gray-600 text-white focus:outline-none focus:border-[#ff5e5e]"
//               type="text"
//               id="name"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-semibold" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 rounded bg-[#181c23] border border-gray-600 text-white focus:outline-none focus:border-[#ff5e5e]"
//               type="email"
//               id="email"
//               placeholder="you@example.com"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-semibold" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               className="w-full px-4 py-2 rounded bg-[#181c23] border border-gray-600 text-white focus:outline-none focus:border-[#ff5e5e]"
//               id="message"
//               rows="4"
//               placeholder="Your message..."
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#ff5e5e] hover:bg-[#ff4343] text-white font-semibold py-2 px-6 rounded-full transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#ff5e5e] mb-6">Get in Touch</h1>

        <p className="text-center text-gray-700 mb-8">
          Have a question, opportunity, or just want to connect? Send me a message or reach out via the links below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5e5e]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5e5e]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5e5e]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#ff5e5e] hover:bg-[#ff4343] text-white px-6 py-2 rounded-full font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Direct Info with Icons */}
        <div className="mt-12 text-center space-y-4 text-gray-700">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-[#ff5e5e]" />
            <a href="mailto:satyaganesh6969@gmail.com" className="text-[#ff5e5e]">satyaganesh6969@gmail.com</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-[#ff5e5e]" />
            <a href="tel:7659053431" className="text-[#ff5e5e]">+91 76590 53431</a>
          </p>

          <div className="flex justify-center gap-6 mt-4 text-2xl text-[#ff5e5e]">
            <a href="https://linkedin.com/in/phns-ganesh" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ganeshphns" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/ganesh_phns?utm_source=qr&igsh=MTNkeGJ6ZzcyajU1cQ== " target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/phnsganesh?t=000Eg693WQ4J-O-gTX38UA&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

