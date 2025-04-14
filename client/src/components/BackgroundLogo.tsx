import { useEffect, useState } from 'react';
import SchoolLogo from './SchoolLogo';

interface BackgroundLogoProps {
  count?: number;
  opacity?: number;
}

export default function BackgroundLogo({ count = 5, opacity = 0.1 }: BackgroundLogoProps) {
  const [logos, setLogos] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generatedLogos = [];
    
    for (let i = 0; i < count; i++) {
      // Generate random positions
      const topPosition = Math.floor(Math.random() * 90);
      const leftPosition = Math.floor(Math.random() * 90);
      
      // Randomly decide which animation to use
      const animationType = Math.floor(Math.random() * 3); // 0, 1, or 2
      
      generatedLogos.push(
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${topPosition}%`,
            left: `${leftPosition}%`,
            opacity: opacity,
            zIndex: 0
          }}
        >
          <SchoolLogo 
            size="large"
            animated={false}
            floating={animationType === 0}
            pulse={animationType === 1}
            colorEffect={animationType === 2}
            withShadow={true}
          />
        </div>
      );
    }
    
    setLogos(generatedLogos);
  }, [count, opacity]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ zIndex: -1 }}>
      {logos}
    </div>
  );
}