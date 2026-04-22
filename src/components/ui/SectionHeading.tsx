import { type FC } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  align = "center",
}) => {
  const alignmentClass =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  return (
    <div className={cn("mb-12", alignmentClass, className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight whitespace-pre-line"
        style={{ fontFamily: "'Burgundia', 'Playfair Display', serif" }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className={cn(
            "text-base md:text-lg text-neutral-600 max-w-2xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto mr-0",
            align === "left" && "mr-auto ml-0"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
