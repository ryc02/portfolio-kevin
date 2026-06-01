import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on devices with a mouse (ignore touchscreens)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Hide custom cursor on touch devices completely
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <style>
        {`
          /* Ensure all clickable elements also hide the default cursor */
          a, button, [style*="cursor: pointer"] {
            cursor: none !important;
          }
        `}
      </style>
      
      {/* The elegant, single dot that transforms smoothly */}
      <motion.div
        animate={{
          x: mousePosition.x - (isHovering ? 16 : 4),
          y: mousePosition.y - (isHovering ? 16 : 4),
          width: isHovering ? 32 : 8,
          height: isHovering ? 32 : 8,
          backgroundColor: isHovering ? 'transparent' : 'var(--accent-color)',
          border: isHovering ? '1px solid var(--accent-color)' : '0px solid transparent'
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.15 // Very fast, no lag/spring effect
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          // Removed mixBlendMode to keep it subtle and clean over photos
        }}
      />
    </>
  );
};

export default CustomCursor;
