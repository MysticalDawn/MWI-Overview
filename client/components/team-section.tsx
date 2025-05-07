"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import hassan from "../public/hassan.jpeg";
import tarek from "../public/tarek.jpeg";
import abdu from "../public/abdu.jpeg";
import khaled from "../public/khaled.jpeg";

const teamMembers = [
  {
    name: "Mohammed Alquraini",
    role: "Computer Science",
    focus: "",
    avatar: "/placeholder.svg?height=200&width=200",
    initial: "MA",
  },
  {
    name: "Tarek Alhouri",
    role: "Electrical Engineering",
    focus: "",
    avatar: khaled.src,
    initial: "TA",
  },
  {
    name: "Hassan Hizeh",
    role: "Electrical Engineering",
    focus: "",
    avatar: hassan.src,
    initial: "HH",
  },
  {
    name: "Khalid Alfuwail",
    role: "Control & Instrumentation Engineering",
    focus: "",
    avatar: khaled.src,
    initial: "KA",
  },
  {
    name: "Abdullah Alfayez",
    role: "Mechanical Engineering",
    focus: "",
    avatar: abdu.src,
    initial: "AA",
  },
  {
    // row 2, col 3
    name: "Abdulwahab Alabdulwahab",
    role: "Computer Science",
    focus: "",
    avatar: "/placeholder.svg?height=200&width=200",
    initial: "AB",
  },
];

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet our interdisciplinary team of engineers and computer
              scientists who collaborated to bring this project to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <Card
                className={`border-slate-200 shadow-sm transition-all duration-300 ${
                  hoveredMember === index
                    ? "shadow-lg scale-105"
                    : "hover:shadow-md hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <CardHeader className="text-center pb-2">
                  <Avatar
                    className={`h-24 w-24 mx-auto mb-4 transition-transform duration-500 ${
                      hoveredMember === index ? "scale-110" : ""
                    }`}
                  >
                    <AvatarImage
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <AvatarFallback className="bg-blue-100 text-blue-800 text-xl">
                      {member.initial}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-[#210F38]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-700">{member.focus}</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 transition-transform duration-300 hover:scale-125"
                  >
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 transition-transform duration-300 hover:scale-125"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 transition-transform duration-300 hover:scale-125"
                  >
                    <Mail className="h-4 w-4 text-slate-600" />
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
