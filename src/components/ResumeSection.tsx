"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      period: "2020-2023",
      title: "Bachelor of Science in Networking and Security",
      institution: "Kodaikanal Christian College",
      description:
        ".",
    },
    {
      period: "2024-2025",
      title: "Masters in Computer Applications",
      institution: "SRM University",
      description:
        ".",
    },
  ];

  const experience = [
    {
      period: "2023-2024",
      title: "Tech-Support DevOps",
      institution: "GUVI Geek Network Pvt Ltd",
      description:
        ".",
    },
    {
      period: "2025-present",
      title: "Full-Stack Developer",
      institution: "SJ Tech Academy",
      description:
        ".",
    },
  ];

  const skills = [
    { name: "Spring-Boot", percentage: 80 },
    { name: "React", percentage: 60 },
    { name: "AWS ", percentage: 75 },
    { name: "Java", percentage: 80 },
    { name: "Java Script", percentage: 60 },
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "Jenkins", percentage: 70 },
    { name: "Docker", percentage: 70 },
    { name: "Kubernetes", percentage: 70 },
    { name: "Sonar Qube", percentage: 70 },
    { name: "Terraform ", percentage: 70 },
    { name: "Ansible", percentage: 70 },
    { name: "Prometheus Grafana ", percentage: 70 }
  ];

  const awards = [
    {
      period: "2014-2015",
      title: "Top 10 Web Developer",
      institution: "Cambridge University",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      period: "2014-2015",
      title: "Top 5 LeaderShip Exellence Winner",
      institution: "Cambridge University",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      period: "2014-2015",
      title: "Top 4 Web Tester",
      institution: "Cambridge University",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      period: "2014-2015",
      title: "Art & Creative Director",
      institution: "Cambridge University",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];

  // Function to render circleProgress
  const CircleProgress = ({ percentage }: { percentage: number }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="skill-circle">
        <svg>
          <circle cx="55" cy="55" r={radius}></circle>
          <circle
            className="progress"
            cx="55"
            cy="55"
            r={radius}
            style={{ strokeDashoffset }}
          ></circle>
        </svg>
        <div className="skill-percent">{percentage}%</div>
      </div>
    );
  };

  return (
    <section id="resume-section" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center mb-1">
          <Tabs defaultValue="education" className="w-full max-w-4xl">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger
                value="education"
                className={`tab-custom ${
                  activeTab === "education" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className={`tab-custom ${
                  activeTab === "experience" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className={`tab-custom ${
                  activeTab === "skills" ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </TabsTrigger>
         
            </TabsList>

            <TabsContent value="education">
              <h2 className="text-2xl font-bold mb-8 text-navy-blue">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="text-gray-500 mb-2">{item.period}</div>
                      <h3 className="text-xl font-bold mb-1 text-navy-blue">
                        {item.title}
                      </h3>
                      <div className="text-gray-700 mb-4">{item.institution}</div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <h2 className="text-2xl font-bold mb-8 text-navy-blue">Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="text-gray-500 mb-2">{item.period}</div>
                      <h3 className="text-xl font-bold mb-1 text-navy-blue">
                        {item.title}
                      </h3>
                      <div className="text-gray-700 mb-4">{item.institution}</div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <h2 className="text-2xl font-bold mb-8 text-navy-blue">Skills</h2>

              {/* First 3 skills with detailed stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {skills.slice(0, 3).map((skill, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-navy-blue">
                      {skill.name}
                    </h3>
                    <CircleProgress percentage={skill.percentage} />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="text-center">
                      
                        
                      </div>
                      <div className="text-center">
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rest of the skills with simple bars */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {skills.slice(3).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="awards">
              <h2 className="text-2xl font-bold mb-8 text-navy-blue">Awards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="text-gray-500 mb-2">{item.period}</div>
                      <h3 className="text-xl font-bold mb-1 text-navy-blue">
                        {item.title}
                      </h3>
                      <div className="text-gray-700 mb-4">{item.institution}</div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
