
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function SchoolModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Setup renderer and scene only once
  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene & camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 5;

    // Create renderer with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump' // Good balance between quality and performance
    });
    rendererRef.current = renderer;
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    containerRef.current.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Handle window resize for responsive rendering
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
      rendererRef.current?.dispose();
      
      // Dispose of geometries and materials to prevent memory leaks
      if (sceneRef.current) {
        sceneRef.current.traverse(object => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            }
          }
        });
      }
    };
  }, []);

  // Load model separately to optimize initial render
  useEffect(() => {
    if (!sceneRef.current) return;
    
    const scene = sceneRef.current;
    
    const loader = new GLTFLoader();
    loader.load('/models/school.glb', 
      // On load success
      (gltf) => {
        scene.add(gltf.scene);
        setIsModelLoaded(true);
      },
      // On progress
      undefined,
      // On error
      (error) => {
        console.error('Error loading school model:', error);
      }
    );
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isModelLoaded || !sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;

    // Animation loop with throttled frame rate for better performance
    let lastTime = 0;
    const targetFPS = 30; // Lower FPS for better performance
    const interval = 1000 / targetFPS;
    
    const animate = (currentTime: number) => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      const delta = currentTime - lastTime;
      
      if (delta > interval) {
        lastTime = currentTime - (delta % interval);
        renderer.render(scene, camera);
      }
    };
    
    frameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [isModelLoaded]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[400px]"
      style={{ 
        willChange: "transform", 
        transform: "translateZ(0)",
        backfaceVisibility: "hidden"
      }}
    />
  );
}
