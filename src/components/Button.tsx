
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'black' | 'white';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ 
  children, 
  variant = 'black', 
  className, 
  onClick, 
  type = 'button',
  disabled = false,
  ...props 
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        variant === 'black' ? 'btn-black' : 'btn-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
