import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            On-chain therapy so effective, you'll wish it were tax-deductible
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Buy Now <ArrowRight className="ml-2 inline" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary hover:text-white transition-all"
          >
            Join Community
          </motion.button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-500">© 2024 Dr. ILL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;