import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CinematicLayerProps {
  className?: string;
}

export const CinematicLayer: React.FC<CinematicLayerProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 7;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Generate Particle Texture (radial glow)
    const createParticleTexture = (): THREE.Texture => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Radial gradient for soft glowing bokeh circle
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 138, 0, 0.85)'); // Warm orange light
        gradient.addColorStop(0.5, 'rgba(255, 90, 0, 0.25)'); // Darker warm orange halo
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleTexture = createParticleTexture();

    // 5. Particles Geometry & Material
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Track original coordinates and phase offsets for physics/animations
    const basePositions = new Float32Array(particleCount * 3);
    const angles = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const driftSpeeds = new Float32Array(particleCount);
    const scales = new Float32Array(particleCount);

    const warmOrange = new THREE.Color('#ff8a00');
    const amberYellow = new THREE.Color('#eab308');
    const cleanWhite = new THREE.Color('#ffffff');

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a 3D box bounding area
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      // Color distribution: 50% warm orange, 25% amber/gold, 25% white
      const colorRand = Math.random();
      let selectedColor = cleanWhite;
      if (colorRand < 0.5) {
        selectedColor = warmOrange;
      } else if (colorRand < 0.75) {
        selectedColor = amberYellow;
      }

      colors[i * 3] = selectedColor.r;
      colors[i * 3 + 1] = selectedColor.g;
      colors[i * 3 + 2] = selectedColor.b;

      // Random speed and angle values for floating sine-wave oscillations
      angles[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.003 + Math.random() * 0.005;
      driftSpeeds[i] = 0.002 + Math.random() * 0.003;
      scales[i] = 0.4 + Math.random() * 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.28,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 6. Mouse event listener for Parallax
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates: -0.5 to 0.5
      targetMouse.current.x = (event.clientX / window.innerWidth) - 0.5;
      targetMouse.current.y = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle touch move for mobile parallax
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        targetMouse.current.x = (event.touches[0].clientX / window.innerWidth) - 0.5;
        targetMouse.current.y = (event.touches[0].clientY / window.innerHeight) - 0.5;
      }
    };
    window.addEventListener('touchmove', handleTouchMove);

    // 7. Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Adjust particle base size depending on screen size
      material.size = w < 768 ? 0.2 : 0.28;
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // trigger initially

    // 8. Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array as Float32Array;

      // Update positions with drift and sine oscillations
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Slow vertical drift upwards
        basePositions[i3 + 1] += driftSpeeds[i] * 0.5;
        
        // Wrap around bounds (if drifts out of upper viewport boundary)
        if (basePositions[i3 + 1] > 6) {
          basePositions[i3 + 1] = -6;
        }

        // Apply slow horizontal and depth sine-wave oscillations
        angles[i] += speeds[i];
        
        // X = base X + oscilation
        posArray[i3] = basePositions[i3] + Math.sin(angles[i] * 0.8) * 0.15;
        // Y = base Y + oscillation
        posArray[i3 + 1] = basePositions[i3 + 1] + Math.cos(angles[i] * 0.5) * 0.1;
        // Z = base Z + oscillation
        posArray[i3 + 2] = basePositions[i3 + 2] + Math.sin(angles[i] * 0.3) * 0.1;
      }

      posAttr.needsUpdate = true;

      // Smooth mouse parallax lerp (Linear Interpolation)
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.04;
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.04;

      // Subtly rotate and shift camera based on mouse movement
      camera.position.x = mouse.current.x * 2.2;
      camera.position.y = -mouse.current.y * 2.2;
      camera.lookAt(0, 0, 0);

      // Add a tiny constant rotation to the particle cloud itself
      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = elapsedTime * 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose of Three.js objects to avoid WebGL memory leaks
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
};
