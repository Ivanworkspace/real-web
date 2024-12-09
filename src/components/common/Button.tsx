import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon, 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2';
  const variants = {
    primary: 'bg-white text-indigo-600 hover:bg-yellow-400',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}