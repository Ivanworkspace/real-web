import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Web Agency. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Follow us on 
          <a href="https://it.linkedin.com/in/ivan-santantonio-aa7416233" className="text-primary-400 ml-1 hover:underline">Linkedin</a>, 
      
          <a href="https://wa.me/393791408773'" className="text-primary-400 ml-1 hover:underline">Whatsapp</a>.
        </p>
      </div>
    </footer>
  );
} 