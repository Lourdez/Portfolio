"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarIcon, User, MessageCircle } from "lucide-react";
import Image from "next/image";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Why Lead Generation is Key for Business Growth",
      date: "Sept. 12, 2019",
      author: "Admin",
      comments: 3,
      image: "https://ext.same-assets.com/2568284105/3518633355.jpeg",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      link: "#",
    },
    {
      title: "Why Lead Generation is Key for Business Growth",
      date: "Sept. 12, 2019",
      author: "Admin",
      comments: 3,
      image: "https://ext.same-assets.com/2568284105/3709874997.jpeg",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      link: "#",
    },
    {
      title: "Why Lead Generation is Key for Business Growth",
      date: "Sept. 12, 2019",
      author: "Admin",
      comments: 3,
      image: "https://ext.same-assets.com/2568284105/581702683.jpeg",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      link: "#",
    },
  ];

  return (
    <section id="blog-section" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Blog</h2>
          <p className="section-subtitle mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <Link
                  href={post.link}
                  className="text-lg font-bold text-navy-blue hover:text-bright-blue transition-colors mb-2 block"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Freelance Banner */}
        <div className="mt-24 bg-light-blue p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
            I'm Available for freelancing
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <Button className="bg-bright-blue hover:bg-blue-600 text-white px-8 py-2 rounded-md">
            Hire me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
