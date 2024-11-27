import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const exchanges = [
  { name: 'Uniswap', volume: '$2.5M', link: '#' },
  { name: 'PancakeSwap', volume: '$1.8M', link: '#' },
  { name: 'Gate.io', volume: '$950K', link: '#' },
  { name: 'MEXC', volume: '$750K', link: '#' }
];

const ExchangeSection = () => {
  return (
    <section className="py-20 px-4" id="exchanges">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Listed Exchanges
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {exchanges.map((exchange) => (
            <a
              key={exchange.name}
              href={exchange.link}
              className="glass-card p-6 rounded-2xl group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#FFD93D]">{exchange.name}</h3>
                <ArrowUpRight className="text-[#FF6B6B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <p className="text-2xl font-bold text-cream">{exchange.volume}</p>
              <p className="text-sm text-cream/70">24h Volume</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;