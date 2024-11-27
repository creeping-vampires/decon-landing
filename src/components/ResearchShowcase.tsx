import React from 'react';
import { Brain, ChevronLeft, ChevronRight } from 'lucide-react';

const ResearchShowcase = () => {
  const researchData = [
    {
      title: "Mental Health Impact Study",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      description: "Analyzing the correlation between trading patterns and mental wellness indicators"
    },
    {
      title: "Community Support Networks",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
      description: "Mapping the effectiveness of decentralized mental health support systems"
    },
    {
      title: "Therapeutic Outcomes Research",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&auto=format&fit=crop",
      description: "Measuring the impact of blockchain-verified counseling sessions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-pixel mb-4 text-primary">
            Research & Development 🧪
          </h2>
          <p className="text-xl font-comic text-primary/80">
            Backed by Science, Powered by Memes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchData.map((item, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-pixel mb-3 text-secondary">{item.title}</h3>
                <p className="text-cream/90 font-comic">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-pixel mb-4 text-secondary">Latest Research Findings</h3>
              <ul className="space-y-4 font-comic text-cream/90">
                <li className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-secondary" />
                  70% reduction in trading-related anxiety
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-secondary" />
                  85% improvement in community support engagement
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-secondary" />
                  90% user satisfaction with verified counselors
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block wiggle">
                <span className="text-8xl">🧬</span>
              </div>
              <p className="mt-4 font-pixel text-accent">
                Peer-Reviewed & Based
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-comic text-cream/70">
            All research conducted in partnership with leading institutions 🎓✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchShowcase;