import React from 'react';
import { DollarSign, Users, Coins } from 'lucide-react';

const TokenStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          icon: <DollarSign className="w-8 h-8" />,
          label: "Market Cap",
          value: "$2.5M",
          change: "+15%"
        },
        {
          icon: <Users className="w-8 h-8" />,
          label: "Holders",
          value: "2,500+",
          change: "+25%"
        },
        {
          icon: <Coins className="w-8 h-8" />,
          label: "Total Supply",
          value: "1B",
          change: "10% Burned"
        }
      ].map((stat, index) => (
        <div key={index} className="bg-purple-900/40 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
              {stat.icon}
            </div>
            <div>
              <p className="text-purple-200 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
              <span className="text-green-400 text-sm">{stat.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenStats;