"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[var(--color-navy)]">
      {/* Background with abstract enterprise graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-playfair text-white leading-[1.1] tracking-tight mb-6"
          >
            Future-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Enterprise Infrastructure
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-[var(--color-warm-white)]/80 max-w-2xl mb-10 leading-relaxed font-light"
          >
            MegaTech is the premier Smart Technology Systems Integrator. We build the physical and digital foundations that power modern enterprises, campuses, and cities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-medium transition-all hover:gap-3"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors"
            >
              Our Legacy
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-white/10"
          >
            <p className="text-sm text-white/50 mb-6 font-medium tracking-wide uppercase">Trusted by industry leaders</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-bold font-playfair">CISCO</div>
              <div className="text-xl font-bold font-playfair">DELL</div>
              <div className="text-xl font-bold font-playfair">HPE</div>
              <div className="text-xl font-bold font-playfair">FORTINET</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
