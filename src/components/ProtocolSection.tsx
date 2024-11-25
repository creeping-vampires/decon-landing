import React from 'react';
import { Shield, Users, Brain, Lock } from 'lucide-react';

const ProtocolSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-purple-400 text-transparent bg-clip-text">
          Protocol Components
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-purple-900/40 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
            <Shield className="h-12 w-12 text-yellow-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-yellow-400">VerifiedCounselor Module</h3>
            <ul className="space-y-3 text-purple-200">
              <li>• Multi-layered verification process</li>
              <li>• Academic qualification validation</li>
              <li>• Professional license verification</li>
              <li>• Continuous education tracking</li>
            </ul>
          </div>
          
          <div className="bg-purple-900/40 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
            <Brain className="h-12 w-12 text-yellow-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-yellow-400">PreCounseling Assessment</h3>
            <ul className="space-y-3 text-purple-200">
              <li>• Advanced matching algorithms</li>
              <li>• Specialization analysis</li>
              <li>• Treatment modality matching</li>
              <li>• Scheduling optimization</li>
            </ul>
          </div>
          
          <div className="bg-purple-900/40 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300">
            <Lock className="h-12 w-12 text-yellow-400 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Progress Tracking</h3>
            <ul className="space-y-3 text-purple-200">
              <li>• Confidential milestone tracking</li>
              <li>• Smart contract verification</li>
              <li>• Outcome monitoring</li>
              <li>• Privacy preservation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSection;