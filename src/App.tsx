import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Coins, ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import TokenomicsSection from "./components/TokenomicsSection";
import ExchangeSection from "./components/ExchangeSection";
import ProtocolSection from "./components/ProtocolSection";
import RoadmapSection from "./components/RoadmapSection";
import ResearchShowcase from "./components/ResearchShowcase";

function App() {
  return (
    <div className="relative min-h-screen bg-primary text-cream font-fredoka">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden doge-pattern">
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-block mb-4"
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <span className="text-8xl">🧠</span>
              </motion.div>
              <h1 className="font-bungee text-4xl md:text-6xl mb-6 text-secondary glow-text">
                DECON: First Ever Mental Health
                <br />
                Meme Token
              </h1>
              <p className="text-xl text-cream/90 mb-8 max-w-3xl mx-auto font-fredoka">
                Join the revolution where memes meet mental health. $DECON
                combines the power of community with mental wellness. To the
                moon, but mentally stable! 🚀
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-primary px-8 py-4 rounded-xl text-lg font-bungee retro-border"
                >
                  Buy Now <ArrowRight className="ml-2 inline" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card border border-secondary/30 text-secondary px-8 py-4 rounded-xl text-lg font-bungee"
                >
                  Join Community
                </motion.button>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              {[
                {
                  label: "Market Cap",
                  value: "$2.5M",
                  change: "+15%",
                  icon: <Coins />,
                },
                {
                  label: "Total Holders",
                  value: "2,500+",
                  change: "+25%",
                  icon: <Heart />,
                },
                {
                  label: "Mental Health Fund",
                  value: "$150K+",
                  change: "+10%",
                  icon: <Brain />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-8 rounded-2xl retro-border"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <div className="text-secondary w-6 h-6">{stat.icon}</div>
                    </div>
                    <span className="text-accent text-sm font-vt">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bungee text-secondary mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-cream/90 font-fredoka">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TokenomicsSection />
        <ProtocolSection />
        <ResearchShowcase />
        <RoadmapSection />
        {/* <ExchangeSection /> */}

        {/* Community Section */}
        <section className="py-20 px-4 bg-primary/5" id="community">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bungee mb-8 text-secondary glow-text">
              Join Our Community
            </h2>
            <p className="text-xl text-cream/90 mb-12 max-w-2xl mx-auto font-fredoka">
              Be part of a community that cares about mental health while riding
              the wave to the moon! 🌙
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { name: "Twitter 🐦", color: "bg-secondary hover:bg-accent" },
                { name: "Discord 💬", color: "bg-secondary hover:bg-accent" },
                { name: "Telegram 📱", color: "bg-secondary hover:bg-accent" },
              ].map((platform, index) => (
                <motion.a
                  key={platform.name}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`${platform.color} px-8 py-4 rounded-xl font-bungee text-primary retro-border`}
                >
                  {platform.name}
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
