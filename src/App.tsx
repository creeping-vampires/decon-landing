import React from 'react';
import { Brain, Heart, Coins, ArrowRight, Wallet, BarChart3, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import TokenStats from './components/TokenStats';
import StatsSection from './components/StatsSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[#1a103d] text-purple-50">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block animate-bounce mb-4">
              <span className="text-4xl">🧠</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-purple-400 text-transparent bg-clip-text">
              DECON: First Ever Mental Health<br />Meme Token
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join the revolution where memes meet mental health. $DECON combines the power of community with mental wellness. To the moon, but mentally stable! 🚀
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                Buy Now <ArrowRight className="ml-2" />
              </button>
              <button className="bg-purple-700/50 hover:bg-purple-700/70 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </section>

        {/* Token Stats */}
        <section className="py-20 px-4">
          <TokenStats />
        </section>

        {/* Mental Health Stats */}
        <StatsSection />

        {/* Why Choose DECON */}
        <section className="py-20 px-4 bg-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-purple-400 text-transparent bg-clip-text">
              Why Choose DECON
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-purple-900/40 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
                <div className="float-animation">
                  <BarChart3 className="h-12 w-12 text-yellow-400 mb-4" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Moon Mission with a Purpose</h3>
                <p className="text-purple-200">Not just another moon shot. Every transaction contributes to mental health initiatives.</p>
              </div>
              <div className="bg-purple-900/40 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
                <div className="float-animation">
                  <Users className="h-12 w-12 text-yellow-400 mb-4" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Community Driven</h3>
                <p className="text-purple-200">Strong community of diamond hands supporting mental health together.</p>
              </div>
              <div className="bg-purple-900/40 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
                <div className="float-animation">
                  <Coins className="h-12 w-12 text-yellow-400 mb-4" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Tokenomics</h3>
                <p className="text-purple-200">2% tax goes to mental health organizations. 1% to liquidity. 1% reflections.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-purple-400 text-transparent bg-clip-text">
              How to Buy $DECON
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Wallet className="h-8 w-8" />,
                  title: "Get Wallet",
                  desc: "Download MetaMask or Trust Wallet"
                },
                {
                  icon: <Coins className="h-8 w-8" />,
                  title: "Add ETH",
                  desc: "Purchase ETH from your preferred exchange"
                },
                {
                  icon: <ArrowRight className="h-8 w-8" />,
                  title: "Connect",
                  desc: "Connect your wallet to Uniswap"
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Swap",
                  desc: "Swap ETH for $DECON"
                }
              ].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="bg-purple-900/40 p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm group-hover:border-yellow-400/40 transition-all duration-300">
                    <div className="bg-yellow-400/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-yellow-400">
                      {step.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-yellow-400">{step.title}</h3>
                    <p className="text-purple-200">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-4 bg-purple-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-purple-400 text-transparent bg-clip-text">
              Join Our Community
            </h2>
            <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
              Be part of a community that cares about mental health while riding the wave to the moon! 🌙
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="bg-[#1DA1F2]/80 hover:bg-[#1DA1F2] px-8 py-4 rounded-xl font-bold transition-all duration-300">
                Twitter
              </a>
              <a href="#" className="bg-[#5865F2]/80 hover:bg-[#5865F2] px-8 py-4 rounded-xl font-bold transition-all duration-300">
                Discord
              </a>
              <a href="#" className="bg-[#229ED9]/80 hover:bg-[#229ED9] px-8 py-4 rounded-xl font-bold transition-all duration-300">
                Telegram
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;