import React from "react";
const team = [
  {
    name: "Pankaj",
    role: "Video Editing & CGI Ads",
    icon: "🎬",
    tools: "Adobe After Effects, Premiere Pro, Blender",
    bio: "The storyteller of our team—Pankaj crafts cinematic edits and hyper-realistic CGI ads that bring imagination to life.",
  },
  {
    name: "Manish",
    role: "Graphic Designer",
    icon: "🎨",
    tools: "Adobe Photoshop, Illustrator",
    bio: "With a sharp eye for aesthetics, Manish creates bold, professional, and striking visuals that make brands stand out.",
  },
  {
    name: "Arman , Bhanu",
    role: "Web, UI/UX & Backend Developer",
    icon: "💻",
    tools: "Figma, Adobe XD, React.js, HTML/CSS/JS, Node.js, Express, MongoDB",
    bio: "Arman builds websites and interfaces that are both functional and user-friendly, delivering smooth digital experiences from Frontend to Backend.",
  },
];
const About = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-6">ABOUT US</h2>
      <p className="text-center max-w-3xl mx-auto text-lg mb-12">
        At <span className="text-green-400 font-semibold">GraphicXflow</span>, we blend creativity with technology to deliver impactful visuals, sleek designs, and smooth digital experiences. Our team uses industry-leading software to ensure professional quality and innovative results in every project.
      </p>

      <h3 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-3xl mb-2">{member.icon}</div>
            <h4 className="text-xl font-bold mb-1">{member.name}</h4>
            <p className="text-green-400 font-medium mb-2">{member.role}</p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Software:</span> {member.tools}
            </p>
            <p className="text-sm text-gray-300">{member.bio}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg mb-2">✨ Together, we combine <span className="text-green-400 font-semibold">creativity, design, and technology</span> to bring your vision to life.</p>
      </div>
    </section>
  );
};
export default About;
