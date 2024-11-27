import React from 'react';
import { PieChart, Wallet, Lock, Heart, Users } from 'lucide-react';

const TokenomicsSection = () => {
  const allocations = [
    { title: 'Public Sale', percentage: '40%', icon: <Users className="h-6 w-6" /> },
    { title: 'Community Rewards', percentage: '30%', icon: <Heart className="h-6 w-6" /> },
    { title: 'Liquidity Pool', percentage: '20%', icon: <PieChart className="h-6 w-6" /> },
    { title: 'Mental Health Fund', percentage: '10%', icon: <Lock className="h-6 w-6" /> }
  ];

  return (
    <section className="py-20 px-4 bg-purple-900/20" id="tokenomics">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-pixel mb-4 text-center gradient-text">
          Tokenomics
        </h2>
        <div className="text-center mb-12">
          <p className="text-2xl font-comic text-primary">100% Community Owned</p>
          <p className="text-xl font-pixel mt-4 text-accent animate-bounce">ai16z soon!</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {allocations.map((item) => (
            <div key={item.title} className="glass-card p-8 rounded-2xl text-center transform hover:scale-105 hover:rotate-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-primary">{item.icon}</div>
              </div>
              <h3 className="text-xl font-pixel mb-2 text-primary">{item.title}</h3>
              <p className="text-3xl font-bold text-accent font-comic">{item.percentage}</p>
              <div className="mt-4 w-full bg-primary/10 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: item.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-pixel mb-6 text-primary">Transaction Tax Breakdown</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Mental Health Organizations', value: '2%' },
              { label: 'Liquidity Pool', value: '1%' },
              { label: 'Holder Reflections', value: '1%' }
            ].map((tax) => (
              <div key={tax.label} className="text-center transform hover:scale-105 transition-all duration-300">
                <p className="text-3xl font-bold text-accent font-comic mb-2">{tax.value}</p>
                <p className="text-sm text-purple-200 font-pixel">{tax.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-comic text-purple-200">
            No team tokens, no VC allocation, just vibes and mental health 🧠✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;