

export default function Projects() {
  const projects = [
    {
      title: "AI Image generator",
      desc: "Image generator built using comfyUI",
      tags: ["AI", "GenAI", "ComfyUI"],
    },
    {
      title: "Gym Membership Manager",
      desc: "A web app that keeps a record of the members and keeps track of all their payments.",
      tags: ["Web App", "Management", "Tracker"],
    },
    {
      title: "Gamified To-Do",
      desc: "Store tasks on the basis of urgency, get points if you collect them. Includes a timetable of the current day.",
      tags: ["Productivity", "Gamification", "App"],
    },
    {
      title: "Hospital Management AI",
      desc: "Civilians can type in their symptoms and AI will analyse and prefer doctors from the hospital.",
      tags: ["AI", "Healthcare", "NLP"],
    },
    {
      title: "Custom Chatbots",
      desc: "Many chatbots crafted perfectly according to precise personal needs and unique workflows.",
      tags: ["LLM", "Chatbot", "AI"],
    },
    {
      title: "Sandbox AI Learning",
      desc: "Not the old education style. An education program where AI is integrated and taught to make learning faster.",
      tags: ["EdTech", "AI", "Platform"],
    }
  ];

  return (
    <section id="projects" className="min-h-screen relative z-20 bg-[#121212] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Selected Work</h2>
            <p className="text-xl text-white/50 max-w-xl">A collection of my recent projects focusing on AI, management systems, and gamified experiences.</p>
          </div>
          <div className="flex gap-6 items-center">
             <a href="mailto:ishan200716@gmail.com" className="text-white hover:text-amber-400 transition-colors tracking-wide">ishan200716@gmail.com</a>
             <a href="https://www.linkedin.com/in/ishan-singh-b84b1a346/" target="_blank" className="font-semibold text-black bg-white px-5 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-colors shadow-lg">LinkedIn</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/10 hover:scale-[1.02] transition-all duration-500 min-h-[320px]">
              <div>
                <div className="flex gap-2 flex-wrap mb-6">
                   {proj.tags.map(t => (
                     <span key={t} className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-white/10 rounded-full text-white">{t}</span>
                   ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors drop-shadow-md">{proj.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{proj.desc}</p>
              </div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
