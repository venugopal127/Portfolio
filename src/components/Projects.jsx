import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Computer Vision Inventory Management",
    description:
      "Designed a vision-based system for real-time inventory tracking and restocking alerts for small shops.",
    image: "data:image/jpeg;base64,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",
    tags: ["Computer Vision", "React.js", "Node.js", "Python"],
    url: "#",
    git: "#",
  },
  {
    id: 2,
    title: "Metro Ticketing System",
    description:
      "Java-based metro ticketing system using graphs and Dijkstra's algorithm for optimal route finding.",
    image: "data:image/jpeg;base64,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",
    tags: ["Java", "Graph Algorithms", "Dijkstra's Algorithm", "Data Structures"],
    url: "#",
    git: "#",
  },
  {
    id: 3,
    title: "ShopKart Management System",
    description:
      "Product management with JDBC/SQL for database management, handling purchase history and product attributes.",
    image: "",
    tags: ["Java", "JDBC", "SQL", "Database Design"],
    url: "#",
    git: "#",
  },
  {
    id: 4,
    title: "GSI Land Parcel Management",
    description:
      "Built a GSI-based land parcel management system using blockchain for secure ownership verification.",
    image: "public/Images/gsi.png",
    tags: ["Blockchain", "Leaflet.js", "Supabase", "JavaScript"],
    url: "#",
    git: "#",
  },
  {
    id: 5,
    title: "AI Crop Disease Detection Portal",
    description:
      "End-to-end platform empowering farmers to submit crop disease tickets for instant AI-driven diagnosis and status tracking. Utilizes deep learning with class-specific data augmentation powered by genetic algorithms, cross-validation, and a research-published framework. Significantly improves classification accuracy, especially for confounding stresses, and integrates insights from our published work on tailored augmentation for plant stress detection.",
    image: "https://acsess.onlinelibrary.wiley.com/cms/asset/14f9a6e9-72bb-4734-b13a-6217694c4454/ppj220112-fig-0002-m.png", // Add your image for this project
    tags: ["AI", "Deep Learning", "Genetic Algorithms", "Computer Vision", "Agritech"],
    url: "#", // Add live project/demo link if you have one
    git: "#", // Add GitHub repo if available
    research: "https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/ppj2.20112"
  }
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my approach to writing clean, maintainable code and building user-friendly interfaces. I focus on practical solutions that balance performance, usability, and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl text-left font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-left text-xs mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    Link <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.git}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </div>
                {/* Optionally display the research link if available */}
                {project.research && (
                  <div className="mt-2">
                    <a
                      href={project.research}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary underline"
                    >
                      
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/venugopal127"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
