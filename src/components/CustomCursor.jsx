import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile/touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addHoverListeners();

    // Re-bind listeners on DOM mutations
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        opacity: hidden ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      {/* Outer Glow Ring */}
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${hovered ? 1.5 : 1})`,
          transition: 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, background-color 0.3s',
        }}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none ${
          hovered 
            ? 'border-[#06B6D4] bg-[#06B6D4]/10' 
            : 'border-[#8B5CF6] bg-transparent'
        }`}
      />
      {/* Inner Dot */}
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          transition: 'transform 0.02s linear, background-color 0.3s',
        }}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none ${
          hovered ? 'bg-[#06B6D4]' : 'bg-[#3B82F6]'
        }`}
      />
    </div>
  );
}
