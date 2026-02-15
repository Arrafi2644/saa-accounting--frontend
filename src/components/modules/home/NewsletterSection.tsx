
"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { toast } from 'sonner';
import config from '@/config';
import GradientButton from '../shared/button/GradiantButton';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Updated with Financial Insights",
  description = "Subscribe to our newsletter for tax tips, compliance updates, and business advice.",
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setStatus('idle');
    setMessage('');


    try {
      const response = await fetch(`${config.baseUrl}/newsletters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        toast.success('Thank you for subscribing!')
        setEmail('');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Unable to connect. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleSubscribe();
    }
  };

  return (
    <section className="w-full bg-[#0a2540] -mt-0.5 ">
      <div className="container mx-auto overflow-hidden py-12 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.1 }}
          >
            <div className="flex-1 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
                {title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{duration:1.3, delay: 0.3 }}
          >
            <div className="shrink-0 w-full lg:w-auto lg:min-w-[500px]">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyPress} // Changed from onKeyPress (deprecated)
                  placeholder="Enter your email"
                  disabled={loading}
                  className="flex-1 px-5 py-3 sm:py-3.5 bg-[#0f3556] border border-[#1a4d6f] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64D3F8] focus:border-transparent transition-all disabled:opacity-70"
                />
                <GradientButton onClick={handleSubscribe}
                disabled={loading}
                > {loading ? 'Subscribing...' : 'Subscribe'}
                </GradientButton>
              </div>

              {/* Status message */}
              {status !== 'idle' && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};