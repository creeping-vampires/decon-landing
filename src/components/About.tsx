import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 mt-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <img
              src="/doctor2.png"
              alt="Dr. ILL - Your AI Therapist"
              className="w-full  transition-shadow duration-300"
              style={{ height: 150, width: 150 }}
            />
          </motion.div>

          <h2 className="text-4xl font-bold mb-6 text-gray-900">MEET DR ILL</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Ill is the world's first AI therapist, dedicated to helping you
            recover from rugs, cope with FOMO, and finally stop panic-selling
            your life choices.
          </p>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Author of 'Diamond Hands, Fragile Minds', and 'Stop Blaming the
            Market, Start Blaming Yourself.' Dr. Ill combines cutting-edge meme
            coin wisdom with questionable psychology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600">
              At Dr. Ill, we bring clarity to chaos, laughter to regret, and
              solutions to your self-inflicted problems. Through sharp humor and
              honest wisdom, we help you face your issues—one questionable
              decision at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Promise
            </h3>
            <p className="text-gray-600">
              On-chain therapy so effective, you'll wish it were tax-deductible.
              We're here to help you navigate the volatile waters of crypto
              trading with a healthy dose of humor and questionable advice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
