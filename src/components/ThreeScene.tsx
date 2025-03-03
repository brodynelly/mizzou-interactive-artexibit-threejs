import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 2, 3);
    scene.add(directionalLight);

    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);

    // Create geometries
    const geometries = [
      new THREE.TorusGeometry(1, 0.3, 16, 100),
      new THREE.ConeGeometry(1, 2, 32),
      new THREE.TorusKnotGeometry(0.8, 0.2, 100, 16),
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.SphereGeometry(1, 32, 32),
    ];

    // Materials with different colors
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x4ecdc4, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xffe66d, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x6a0572, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x00a8cc, roughness: 0.5 }),
    ];

    // Create multiple objects and position them in a circle
    const objects: THREE.Mesh[] = [];
    const radius = 3;
    const count = geometries.length;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      const mesh = new THREE.Mesh(geometries[i], materials[i]);
      mesh.position.set(x, 0, z);
      mesh.rotation.y = -angle; // Make objects face the center
      group.add(mesh);
      objects.push(mesh);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire group
      group.rotation.y += 0.002;

      // Rotate each object
      objects.forEach((obj, i) => {
        obj.rotation.x += 0.01 * (i % 2 ? 1 : -1);
        obj.rotation.z += 0.01 * (i % 3 ? 1 : -1);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
};

export default ThreeScene;