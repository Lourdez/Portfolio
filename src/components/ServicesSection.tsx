"use client";

import {
  Monitor,
  Camera,
  Code,
  Smartphone,
  Database,
  BarChart3,
  Cloud,
  Infinity
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-bright-blue mb-4" />,
      title: "Web Design",
      description:
        "I create fast, responsive websites with clean code and modern design to help you stand out online.",
    },
    {
      icon: <Code className="w-12 h-12 text-bright-blue mb-4" />,
      title: "Backend Developer",
      description:
        "I build robust and scalable server-side applications using Java, focusing on performance, security, and clean architecture.",
    },
    {
      icon: <Cloud className="w-12 h-12 text-bright-blue mb-4" />,
      title: "Cloud Engineer",
      description:
        "I design scalable, secure, and cost-efficient AWS architectures tailored to meet business needs and drive cloud success.",
    },
    {
      icon: <Infinity className="w-12 h-12 text-bright-blue mb-4" />,
      title: "DevOps Engineer",
      description:
        "I streamline development and deployment with CI/CD pipelines, infrastructure automation, and cloud-native solutions for faster, reliable releases.",
    },
    {
      icon: <Database className="w-12 h-12 text-bright-blue mb-4" />,
      title: "Database Administrator",
      description:
        "I manage, optimize, and secure databases to ensure high performance, data integrity, and seamless scalability.",
    },
  ];

  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mx-auto">
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-navy-blue">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
