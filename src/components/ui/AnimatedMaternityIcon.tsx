import { motion } from "framer-motion";

export const AnimatedMaternityIcon = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative w-24 h-24 flex items-center justify-center cursor-pointer ${className}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Outer Glow / Soft Halo */}
      <motion.div
        className="absolute inset-0 bg-secondary-200/50 rounded-full blur-md"
        variants={{
          animate: {
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      />

      {/* Main Base Blob */}
      <motion.div
        className="absolute w-16 h-16 bg-primary-100/80 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] backdrop-blur-sm"
        variants={{
          animate: {
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
        }}
      />

      {/* Animated Abstract Heart / Mother-Baby Symbol */}
      <motion.svg
        viewBox="0 0 100 100"
        className="relative z-10 w-14 h-14"
        variants={{
          animate: {
            y: [0, -8, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.1 }
          },
          hover: {
            scale: 1.08,
            rotate: -5,
            transition: { duration: 0.3 }
          }
        }}
      >
        {/* Mother Silhouette (Left sheltering curve) */}
        <motion.path
          d="M 45 20 C 20 25 15 50 30 75 C 40 85 60 85 70 75 C 75 65 65 60 55 65 C 45 70 35 60 35 45 C 35 30 45 25 45 20 Z"
          fill="var(--color-primary-300)"
          variants={{
            animate: {
              d: [
                "M 45 20 C 20 25 15 50 30 75 C 40 85 60 85 70 75 C 75 65 65 60 55 65 C 45 70 35 60 35 45 C 35 30 45 25 45 20 Z",
                "M 47 18 C 22 23 17 48 32 73 C 42 83 62 83 72 73 C 77 63 67 58 57 63 C 47 68 37 58 37 43 C 37 28 47 23 47 18 Z",
                "M 45 20 C 20 25 15 50 30 75 C 40 85 60 85 70 75 C 75 65 65 60 55 65 C 45 70 35 60 35 45 C 35 30 45 25 45 20 Z"
              ],
              transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            }
          }}
        />
        
        {/* Baby Silhouette Embedded (Small inner shape nurtured by the mother) */}
        <motion.circle
          cx="60"
          cy="48"
          r="11"
          fill="var(--color-secondary-300)"
          variants={{
            animate: {
              y: [0, -3, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
            }
          }}
        />
        <motion.circle
          cx="60"
          cy="48"
          r="5"
          fill="var(--color-background-100)"
          variants={{
            animate: {
              y: [0, -3, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
            }
          }}
        />

        {/* Small Floating Heart (Medical Care / Love symbol) */}
        <motion.path
          d="M 80 28 C 80 25 75 22 70 28 C 65 22 60 25 60 28 C 60 34 70 40 70 40 C 70 40 80 34 80 28 Z"
          fill="var(--color-accent-200)"
          variants={{
            animate: {
              y: [0, -6, 0],
              scale: [1, 1.15, 1],
              rotate: [0, 10, -5, 0],
              opacity: [0.8, 1, 0.8],
              transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
            }
          }}
        />
      </motion.svg>
    </motion.div>
  );
};
