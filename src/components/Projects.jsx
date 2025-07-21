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
    image: "data:image/jpeg;base64,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",
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
