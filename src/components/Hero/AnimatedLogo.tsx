import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const AnimatedLogo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Resize on window change
    window.addEventListener('resize', resizeCanvas);

    // Animation parameters
    const particles: Particle[] = [];
    const particleCount = 100;
    const maxDistance = 150;
    const mouseRadius = 150;

    // Mouse position
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Handle touch for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        
        // Color palette based on our theme
        const darkColors = [
          'rgba(0, 154, 95, 0.7)', // primary-500
          'rgba(0, 123, 76, 0.7)', // primary-600
          'rgba(160, 160, 160, 0.5)', // secondary-500
          'rgba(224, 0, 0, 0.4)', // accent-500 (used sparingly)
        ];
        
        const lightColors = [
          'rgba(0, 154, 95, 0.4)', // primary-500
          'rgba(0, 123, 76, 0.4)', // primary-600
          'rgba(120, 120, 120, 0.3)', // darker gray for light mode
          'rgba(224, 0, 0, 0.2)', // accent-500 (used sparingly)
        ];
        
        const colors = theme === 'dark' ? darkColors : lightColors;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        
        // Mouse interaction - particles are attracted to mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRadius - distance) / mouseRadius;
          
          this.speedX += forceDirectionX * force * 0.2;
          this.speedY += forceDirectionY * force * 0.2;
        }
        
        // Add some friction to prevent infinite acceleration
        this.speedX *= 0.98;
        this.speedY *= 0.98;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Draw RKZ text path
    const drawRKZPath = () => {
      ctx.save();
      
      // Center the text
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      // Scale based on canvas size
      const scale = Math.min(canvas.width, canvas.height) * 0.002;
      ctx.scale(scale, scale);
      
      ctx.font = "bold 300px 'Arial'";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Create gradient based on theme
      let gradient;
      if (theme === 'dark') {
        gradient = ctx.createLinearGradient(-200, -100, 200, 100);
        gradient.addColorStop(0, 'rgba(51, 191, 135, 0.2)'); // primary-400
        gradient.addColorStop(1, 'rgba(0, 154, 95, 0.2)'); // primary-500
      } else {
        gradient = ctx.createLinearGradient(-200, -100, 200, 100);
        gradient.addColorStop(0, 'rgba(0, 123, 76, 0.15)'); // primary-600
        gradient.addColorStop(1, 'rgba(0, 154, 95, 0.15)'); // primary-500
      }
      
      ctx.fillStyle = gradient;
      ctx.fillText('RKZ', 0, 0);
      
      ctx.restore();
    };
    
    // Connect particles with lines
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(0, 154, 95, ${opacity * 0.5})` 
              : `rgba(100, 100, 100, ${opacity * 0.3})`; // Darker lines for light mode
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw RKZ text in background
      drawRKZPath();
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      // Connect particles with lines
      connectParticles();
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};