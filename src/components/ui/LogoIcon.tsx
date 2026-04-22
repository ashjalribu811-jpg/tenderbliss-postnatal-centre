import type { SVGProps } from "react";

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    {/* Teal Dot (Head) */}
    <circle 
      cx="62" 
      cy="22" 
      r="10" 
      fill="currentColor" 
      className="text-secondary-300" 
    />
    
    {/* Purple Swirl (Body) */}
    <path 
      d="M 25 45 C 35 20, 65 20, 75 40 C 85 60, 75 85, 55 90 C 35 95, 20 80, 25 65 C 30 50, 50 55, 65 50" 
      stroke="currentColor" 
      strokeWidth="7" 
      strokeLinecap="round" 
      className="text-primary-300" 
      fill="none" 
    />
  </svg>
);
