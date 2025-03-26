"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your server
    alert("Message sent! (Demo only)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-bright-blue" />,
      title: "Address",
      details: "Kodaikanal, Tamil Nadu, India",
    },
    {
      icon: <Phone className="w-6 h-6 text-bright-blue" />,
      title: "Contact Number",
      details: "+91 6379202679",
    },
    {
      icon: <Mail className="w-6 h-6 text-bright-blue" />,
      title: "Email Address",
      details: "lourdezparker@gmail.com",
    },
  ];

  return (
    <section id="contact-section" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
  
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="mb-3">{info.icon}</div>
                <h3 className="text-lg font-bold text-navy-blue mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.details}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md min-h-32"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-bright-blue hover:bg-blue-600 text-white py-3 rounded-md"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
