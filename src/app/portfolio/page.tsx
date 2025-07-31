
// /app/portfolio/page.tsx
export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A performant admin dashboard with real-time analytics and interactive data visualizations.",
      badge: "Featured",
      tech: ["React", "Next.js", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
      category: "react",
      demo: "#",
      code: "#",
    },
    {
      title: "3D Portfolio Concept",
      description: "Immersive 3D portfolio with smooth animations and interactive elements.",
      tech: ["GSAP", "Three.js", "CSS3"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1000&q=80",
      category: "animation",
      demo: "#",
      code: "#",
    },
    {
      title: "Banking App UI",
      description: "Modern banking interface with sleek animations and micro-interactions.",
      badge: "New",
      tech: ["Figma", "Tailwind CSS", "React"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
      category: "ui",
      demo: "#",
      code: "#",
    },
    {
      title: "Task Management App",
      description: "Full-featured productivity app with real-time collaboration.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80",
      category: "fullstack",
      demo: "#",
      code: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Cross-platform mobile app with health data integration.",
      tech: ["React Native", "Expo", "Firebase"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
      category: "mobile",
      demo: "#",
      code: "#",
    },
    {
      title: "Creative Web Experience",
      description: "Experimental website with particle animations and physics.",
      badge: "Interactive",
      tech: ["Canvas API", "WebGL", "JavaScript"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1000&q=80",
      category: "animation",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section className="min-h-screen py-2 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-teal-400">My Creative</span> Works
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.badge && (
                    <span className="inline-block bg-teal-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {project.badge}
                    </span>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs border border-white/20 bg-white/10 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    className="bg-teal-400 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="border border-teal-400 text-teal-400 text-sm font-semibold px-4 py-2 rounded-full hover:bg-teal-400 hover:text-gray-900"
                  >
                    View Code
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
