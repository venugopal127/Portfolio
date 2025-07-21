import { ArrowRight, ArrowUpRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "AI Crop Disease Detection Portal",
    description:
      "End-to-end platform empowering farmers to submit crop disease tickets for instant AI-driven diagnosis and status tracking. Utilizes deep learning with class-specific data augmentation powered by genetic algorithms, cross-validation, and research-backed frameworks. Significantly improves classification accuracy, especially for confounding stresses, and integrates insights from recent augmentation research.",
    image: "https://acsess.onlinelibrary.wiley.com/cms/asset/14f9a6e9-72bb-4734-b13a-6217694c4454/ppj220112-fig-0002-m.png",
    tags: ["AI", "Deep Learning", "Genetic Algorithms", "Computer Vision", "Agritech"],
    url: "https://github.com/venugopal127/Crop-Disease-prediction",
    research: "https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/ppj2.20112",
  },
  {
    id: 2,
    title: "GSI Land Parcel Management",
    description:
      "A blockchain-powered geo-management tool enabling secure registration, transfer, and transparent verification of land parcels. Combines Solidity smart contracts with geospatial mapping for tamper-proof digital land registration and ownership management.",
    image: "/Images/gsi.png",
    tags: ["Blockchain", "Leaflet.js", "Supabase", "JavaScript"],
    url: "https://github.com/venugopal127/GIS-Based-Land-Parcel-Management",
  },
  {
    id: 3,
    title: "Metro Ticketing System",
    description:
      "Java-based metro ticketing system using graphs and Dijkstra's algorithm for optimal route finding.",
    image: "",
    tags: ["Java", "Graph Algorithms", "Dijkstra's Algorithm", "Data Structures"],
    url: "https://github.com/venugopal127/Metro-Ticket-using-Graph-Data-Structure",
  },
  {
    id: 4,
    title: "ShopKart Management System",
    description:
      "Product management with JDBC/SQL for database management, handling purchase history and product attributes.",
    image: "",
    tags: ["Java", "JDBC", "SQL", "Database Design"],
    url: "https://github.com/venugopal127/Car-Game-Store-Data-Base-Mangement",
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
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-gray-400 italic text-sm">No image</span>
                )}
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
                    Repository <ArrowUpRight size={16} />
                  </a>
                </div>
                {/* Display research link if present */}
                {project.research && (
                  <div className="mt-2">
                    <a
                      href={project.research}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary underline"
                    >
                      Reference: Research Paper
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
