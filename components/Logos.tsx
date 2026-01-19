"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Search, Router, Cloud, Zap, Truck, Smartphone, Box, Hexagon, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

interface Logo {
  id: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos = ({
  heading = "Maybe You've Seen us Before",
  logos = [
    {
      id: "logo-1",
      description: "Google",
      icon: Search,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-2",
      description: "Cisco",
      icon: Router,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-3",
      description: "CrowdStrike",
      icon: Cloud,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-4",
      description: "Endless",
      icon: Zap,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-5",
      description: "Brenntag",
      icon: Truck,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-6",
      description: "Lupl",
      icon: Smartphone,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-7",
      description: "Box",
      icon: Box,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
    {
      id: "logo-8",
      description: "Hexagon",
      icon: Hexagon,
      className: "h-8 w-8 text-gray-500 hover:text-primary transition-colors",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-20 bg-surface-light border-t border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {heading}
        </h2>
        <p className="max-w-2xl text-gray-600 mb-6">
          Since our concept is pretty innovative we've gotten some attention. We'd love to show you what we can do. Ready to see what we got?
        </p>
      </div>
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.5 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="mx-4 flex shrink-0 items-center justify-center gap-2 group cursor-default">
                    <logo.icon className={logo.className} />
                    <span className="font-bold text-xl text-gray-500 group-hover:text-primary transition-colors">{logo.description}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface-light to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface-light to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Logos;