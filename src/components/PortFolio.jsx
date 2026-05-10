import React from "react";
const PortFolio = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-1">
            <h2 className="text-4xl font-bold">Graphi</h2>
            <span className="text-pink-500 transform  text-2xl sm:text-5xl">
              X
            </span>
            <h2 className="text-4xl font-bold">Flow</h2>
          </div>
          <p className="text-green-400 text-lg">Creative Agency Portfolio</p>
        </div>

        <div className="text-center space-y-1">
          <a
            href="mailto:graphixflow0134@gmail.com"
            className="text-gray-300 hover:underline"
          >
            graphixflow0134@gmail.com
          </a>
          <p>
            <a
              href="tel:+919034950134"
              className="text-gray-300 hover:underline"
            >
              +91 9034950134
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">🎯 About Us</h3>
          <p className="text-gray-300">
            At <span className="text-green-400 font-semibold">GraphiXFlow</span>
            , we combine creativity and technology to craft impactful digital
            experiences. We specialize in Video Editing, VFX/CGI Ads, Web
            Development, Graphic Design, and Photography. Our mission is to help
            brands stand out, engage, and grow through visually stunning and
            performance-driven content.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">💼 Our Services</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              🎬 Video Editing & Post Production – Cinematic cuts, transitions,
              storytelling.
            </li>
            <li>
              ✨ VFX & CGI Ads – Eye-catching product ads with 3D & motion
              graphics.
            </li>
            <li>
              🌐 Web Development – Modern, responsive, and user-friendly
              websites.
            </li>
            <li>
              🎨 Graphic Design – Logos, posters, branding, and ad creatives.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            🌟 Experience & Clients
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Delivered projects for brands like Coca-Cola India and Oreo.
            </li>
            <li>
              Designed branding & websites for small businesses and startups.
            </li>
            <li>
              Created CGI/VFX advertisements including King Legend Energy Drink.
            </li>
            <li>
              Produced promotional reels & content for clothing shops, cafes,
              and influencers.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">🛠 Core Skills</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              <strong>Video Editing:</strong> Premiere Pro, After Effects,
              DaVinci Resolve
            </li>
            <li>
              <strong>VFX & CGI:</strong> Blender, Unreal Engine
            </li>
            <li>
              <strong>Web Development:</strong> HTML, CSS, JavaScript, React,
              Tailwind, WordPress
            </li>
            <li>
              <strong>Graphic Design:</strong> Photoshop, Illustrator
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            🎬 Portfolio Highlights
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Coca-Cola CGI Ad – Produced a high-quality 3D advertisement.
            </li>
            <li>
              Oreo Brand Edit – Engaging ad edit for social media campaigns.
            </li>
            <li>
              King Legend Energy Drink (CGI Ad) – Full 3D animated ad created in
              Blender & After Effects.
            </li>
            <li>
              News Website – Built a responsive, content-rich news platform.
            </li>
            <li>
              Cafe Website – Developed a stylish website for a cafe,
              highlighting menu, offers, and customer experience.
            </li>
          </ul>
        </div>
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-lg"> Let's work together</p>
          <p>
            Email: 
            <a
              href="mailto:graphixflow0134@gmail.com"
              className="text-gray-300 hover:underline"
            >
              graphixflow0134@gmail.com
            </a>
          </p>
          <p>
            Phone/WhatsApp: 
            <a
              href="tel:+919034950134"
              className="text-gray-300 hover:underline"
            >
              +91 9034950134
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default PortFolio;

