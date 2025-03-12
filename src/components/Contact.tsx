import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import { Button } from './common/Button';

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Ready to start your project? Contact us today for a free consultation"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">contact@webagency.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Web Street, Digital City, 12345</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
            />
            <Button variant="primary" className="w-full md:w-auto bg-primary-600 text-white hover:bg-primary-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}