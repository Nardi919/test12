import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Button } from './ui/button';

const clubs = [
  {
    id: 'art',
    name: 'Klubi i Artit dhe Zejeve',
    color: 'bg-purple-600',
    hoverColor: 'hover:bg-purple-700',
    path: '/clubs/art',
    icon: '🎨'
  },
  {
    id: 'debate',
    name: 'Klubi i Debatit',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    path: '/clubs/debate',
    icon: '🗣️'
  },
  {
    id: 'science',
    name: 'Klubi i Shkencës',
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    path: '/clubs/science',
    icon: '🔬'
  },
  {
    id: 'literature',
    name: 'Klubi Letrar',
    color: 'bg-amber-600',
    hoverColor: 'hover:bg-amber-700',
    path: '/clubs/literature',
    icon: '📚'
  },
  {
    id: 'sports',
    name: 'Klubi Sportiv',
    color: 'bg-red-600',
    hoverColor: 'hover:bg-red-700',
    path: '/clubs/sports',
    icon: '⚽'
  }
];

export function ClubNavigation() {
  const [location] = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  
  const activeClubId = clubs.find(club => location === club.path)?.id || null;

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Zgjidhni një Klub</h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {clubs.map((club) => {
          const isActive = club.id === activeClubId;
          const isHovered = club.id === hovered;
          
          return (
            <div
              key={club.id}
              onMouseEnter={() => setHovered(club.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              <a href={club.path} className="no-underline">
                <motion.div
                  animate={{
                    scale: isActive || isHovered ? 1.05 : 1,
                    y: isActive || isHovered ? -5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <Button 
                    variant={isActive ? "default" : "outline"}
                    className={`
                      ${isActive ? club.color + ' text-white' : 'border-2 border-gray-300 hover:border-gray-400'} 
                      ${!isActive ? club.hoverColor + ' hover:text-white' : ''}
                      px-6 py-2 h-auto transition-all duration-300 relative group
                    `}
                  >
                    <span className="mr-2 text-xl">{club.icon}</span>
                    <span>{club.name}</span>
                    
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-1 bg-white rounded-t-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Button>
                </motion.div>
              </a>
              
              {(isActive || isHovered) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  className={`absolute -inset-1 rounded-lg ${club.color} blur-sm z-0`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}