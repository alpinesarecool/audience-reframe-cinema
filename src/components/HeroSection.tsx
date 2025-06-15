import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToArticles = () => {
    const articlesSection = document.getElementById('articles');
    articlesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-dark via-secondary to-cinema-dark opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AudienceCut
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Redefining cinema criticism. We find the hidden gems in films the world overlooked.
        </p>
        <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto">
          Our mission: <span className="text-primary font-semibold">Make forgotten films unforgettable.</span> 
          Every misunderstood masterpiece deserves a standing ovation, and we're here to give it one.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToArticles}
          className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90"
        >
          Discover Hidden Gems
          <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};