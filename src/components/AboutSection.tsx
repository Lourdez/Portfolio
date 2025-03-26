"use client";

import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const personalInfo = [
    { label: "Name", value: "Lourdez Parker" },
    { label: "Date of birth", value: "August 31 ,2000" },
    { label: "Address", value: "Kodaikanal" },
    { label: "Zip code", value: "624101" },
    { label: "Email", value: "lourdezparker@gmail.com" },
    { label: "Phone", value: "+91 6379202679" },
  ];

  return (
    <section id="about-section" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Image Column */}
          <div className="w-full md:w-5/12">
            <img
              // src="https://ext.same-assets.com/2568284105/3931261241.jpeg"
              src = "/images/about.png"
              alt="lourdez parker"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Info Column */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl font-bold mb-6 text-navy-blue">
              About Me
            </h2>
            <p className="mb-6 text-gray-600">
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center border-b pb-2">
                  <span className="text-gray-700 font-medium min-w-28">
                    {info.label}:
                  </span>
                  <span className="text-gray-600">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Project Counter */}
            <div className="mb-8">
              <div className="text-3xl font-bold text-navy-blue">8</div>
              <div className="text-gray-600">Project complete</div>
            </div>

            <Button
              className="bg-bright-blue hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
              Download CV
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
