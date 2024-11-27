import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const RoadmapSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-purple-400 text-transparent bg-clip-text">
          Development Roadmap
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Current Phase</h3>
            {[
              "Platform API Development",
              "Healthcare System Integration",
              "Enhanced Matching Algorithms",
              "Academic Research Partnerships"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                <p className="text-purple-200">{item}</p>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Next Phase</h3>
            {[
              "Global Counselor Network Expansion",
              "Advanced Privacy Framework Implementation",
              "Machine Learning Integration",
              "Cross-chain Interoperability"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Circle className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <p className="text-purple-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;