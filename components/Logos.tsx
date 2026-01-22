"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

interface Logo {
  id: string;
  description: string;
  imagePath: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos = ({
  heading = "Partners we work with",
  logos = [
    {
      id: "logo-2",
      description: "Make",
      imagePath: "/brands/Make.svg",
    },
    {
      id: "logo-3",
      description: "Mixpanel",
      imagePath: "/brands/Mixpanel.svg",
    },
    {
      id: "logo-4",
      description: "Netlify",
      imagePath: "/brands/Netlify.svg",
    },
    {
      id: "logo-5",
      description: "SendGrid",
      imagePath: "/brands/SendGrid.svg",
    },
    {
      id: "logo-6",
      description: "Stripe",
      imagePath: "/brands/Stripe.svg",
    },
    {
      id: "logo-7",
      description: "Supabase",
      imagePath: "/brands/Supabase.svg",
    },
    {
      id: "logo-8",
      description: "Vercel",
      imagePath: "/brands/Vercel.svg",
    },
    {
      id: "logo-9",
      description: "Zoom",
      imagePath: "/brands/Zoom.svg",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-20 bg-surface-light border-t border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          {heading}
        </h2>
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
                  <div className="mx-4 flex shrink-0 items-center justify-center gap-3 group cursor-default">
                    <img 
                      src={logo.imagePath} 
                      alt={logo.description}
                      className="h-8 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
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