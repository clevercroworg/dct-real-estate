'use client';
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animationClass: string; // e.g., 'animate-slide-left'
    threshold?: number; // 0 to 1, how much of the element must be visible
}

export default function ScrollReveal({ children, animationClass, threshold = 0.2 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger only once when the element enters the viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after first trigger
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' // Adjust trigger point slightly
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div ref={ref} className={`${isVisible ? animationClass : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
            {children}
        </div>
    );
}
