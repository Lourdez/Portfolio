"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home-section" },
    { name: "About", href: "#about-section" },
    { name: "Services", href: "#services-section" },
    { name: "Projects", href: "#projects-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  const services = [
    { name: "Web Design", href: "#" },
    { name: "Backend Developer", href: "#" },
    { name: "Cloud Engineer", href: "#" },
    { name: "DevOps Engineer", href: "#" },
    { name: "Database Adminstrator", href: "#" },
  ];

  return (
    <footer className="bg-navy-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/people/Rubun-Parker/pfbid027ag964sjB3aUfnjxacm3K4QFtTPcmyZhMs7y4Dqj2HKfozHJhCPqLnCZ4SxTadBrl/"
                className="w-10 h-10 rounded-full bg-bright-blue flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://x.com/parkerrubun"
                className="w-10 h-10 rounded-full bg-bright-blue flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/irubunparky/"
                className="w-10 h-10 rounded-full bg-bright-blue flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Questions */}
          <div>
            <h3 className="text-xl font-bold mb-6">Have a Questions?</h3>
            <div className="space-y-4">
              <div className="flex">
                <MapPin className="w-5 h-5 text-bright-blue mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Kodaikanal, Tamil Nadu, India
                </span>
              </div>
              <div className="flex">
                <Phone className="w-5 h-5 text-bright-blue mr-3 flex-shrink-0" />
                <Link
                  href="tel:+23929293210"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 6379202679
                </Link>
              </div>
              <div className="flex">
                <Mail className="w-5 h-5 text-bright-blue mr-3 flex-shrink-0" />
                <Link
                  href="mailto:info@yourdomain.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  lourdezparker@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-16 pt-8 border-t border-gray-700">
          Copyright {currentYear} All rights reserved | This is Developed and Deployed by Lourdez Parker
        </div>
      </div>
    </footer>
  );
};

export default Footer;
