import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const StatsSection = () => {
  const options = {
    responsive: true,
    animations: {
      tension: {
        duration: 2000,
        easing: 'linear',
        from: 0.5,
        to: 0.3,
        loop: true
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#F3E8FF' // purple-100
        }
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(243, 232, 255, 0.1)' // purple-100 with opacity
        },
        ticks: {
          color: '#F3E8FF' // purple-100
        }
      },
      x: {
        grid: {
          color: 'rgba(243, 232, 255, 0.1)' // purple-100 with opacity
        },
        ticks: {
          color: '#F3E8FF' // purple-100
        }
      }
    }
  };

  const mentalHealthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        fill: true,
        label: 'Trader Mental Wellness Index',
        data: [65, 78, 72, 85, 82, 90],
        borderColor: '#F0ABFC', // pink-300
        backgroundColor: 'rgba(240, 171, 252, 0.1)', // pink-300 with opacity
        tension: 0.3
      },
      {
        fill: true,
        label: 'Community Support Engagement',
        data: [45, 55, 65, 75, 85, 92],
        borderColor: '#C084FC', // purple-400
        backgroundColor: 'rgba(192, 132, 252, 0.1)', // purple-400 with opacity
        tension: 0.3
      }
    ]
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">
          Mental Health Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-800/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 text-purple-100">Community Growth</h3>
            <div className="aspect-[16/9]">
              <Line options={options} data={mentalHealthData} />
            </div>
          </div>
          <div className="bg-purple-800/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 text-purple-100">Key Statistics</h3>
            <div className="space-y-6">
              {[
                { label: 'Active Support Members', value: '5,000+', change: '+25%' },
                { label: 'Mental Health Resources', value: '200+', change: '+15%' },
                { label: 'Weekly Support Sessions', value: '50+', change: '+40%' },
                { label: 'User Satisfaction', value: '95%', change: '+10%' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-purple-200">{stat.label}</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-100">{stat.value}</span>
                    <span className="ml-2 text-green-400">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;