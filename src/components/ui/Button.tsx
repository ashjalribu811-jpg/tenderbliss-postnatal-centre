import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "highlight";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-primary-300 text-neutral-900 hover:bg-primary-200 focus:ring-primary-300 shadow-soft",
      secondary:
        "bg-secondary-300 text-neutral-900 hover:bg-secondary-200 focus:ring-secondary-300 shadow-soft",
      outline:
        "border-2 border-primary-300 text-neutral-800 hover:bg-primary-100 focus:ring-primary-300",
      ghost: "hover:bg-primary-100 text-neutral-700 hover:text-neutral-900",
      highlight:
        "bg-highlight-200 text-neutral-900 hover:bg-highlight-100 focus:ring-highlight-200 shadow-soft",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
