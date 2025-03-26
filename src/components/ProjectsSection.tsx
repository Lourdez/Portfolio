"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";




const ProjectsSection = () => {
  const projects = [
    {
      title: "Flappy Bird Game",
      category: "In Java",
      image:"/images/Capture.png",
    },
    {
      title: "Gemini Clone",
      category: "in React ",
      image: "/images/gemini.png",
    },
    {
      title: "CI/CD Pipeline of a Spring Application",
      category: "Using DevOps methodology",
      image: "/images/cicd.png",
    },
    {
      title: "S3 Event Trigger",
      category: "Web Design",
      image: "/images/s3.jpg",
    },
  ];

  const stats = [
    { value: "12", label: "Complete Projects" },
    { value: "5", label: "Happy Customers" },
    { value: "50", label: "Cups of coffee" },
  ];

  return (
    <section id="projects-section" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">My Few Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <AspectRatio ratio={3/4}>
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl md:text-4xl font-bold text-navy-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
