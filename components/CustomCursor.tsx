import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const trailerPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => document.body.classList.add('cursor-hovering');
    const handleMouseLeave = () => document.body.classList.remove('cursor-hovering');

    const setupInteractiveElements = () => {
      const interactives = document.querySelectorAll('button, a, input, select, textarea, [role="button"]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const animate = () => {
      // Lerp for smooth trailing effect
      // Dot follows mouse faster
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.25;

      // Trailer follows mouse slower
      trailerPos.current.x += (mousePos.current.x - trailerPos.current.x) * 0.1;
      trailerPos.current.y += (mousePos.current.y - trailerPos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (trailerRef.current) {
        trailerRef.current.style.transform = `translate3d(${trailerPos.current.x}px, ${trailerPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Observer for dynamically added content
    const observer = new MutationObserver(() => {
      setupInteractiveElements();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    setupInteractiveElements();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.classList.remove('has-custom-cursor');
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={trailerRef} className="custom-cursor-trailer" />
    </>
  );
};

export default CustomCursor;