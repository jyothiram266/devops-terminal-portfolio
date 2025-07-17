import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (sections: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0] || '');
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${offset}px 0px -${offset}px 0px`,
      threshold: 0.1
    });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, offset]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return {
    activeSection,
    scrollToSection
  };
};