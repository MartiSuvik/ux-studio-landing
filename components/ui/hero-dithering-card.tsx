import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

interface PortfolioHeroProps {
  badge?: string;
  heading: string;
  description: string;
  showButton?: boolean;
}

export function PortfolioHero({ 
  badge = "Portfolio", 
  heading, 
  description,
  showButton = false 
}: PortfolioHeroProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div 
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#3B82F6"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              {badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              {heading}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>

            {showButton && (
              <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-12 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20 mt-8">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
