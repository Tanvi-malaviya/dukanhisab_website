"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ShopUniverseCanvas({ className = "" }) {
  const containerRef = useRef(null);
  const [is3DActive, setIs3DActive] = useState(true);
  const [interactionMode, setInteractionMode] = useState("cosmic"); // 'cosmic' | 'orbit'

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let renderer, scene, camera;
    let particlesMesh, ringMesh, coinGroup, nodesGroup;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // --- Scene Setup ---
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 28;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      // Fallback if WebGL fails
      setIs3DActive(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Ambient & Directional Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10b981, 2.5, 60);
    pointLight.position.set(10, 15, 15);
    scene.add(pointLight);

    const tealLight = new THREE.PointLight(0x0d9488, 2, 50);
    tealLight.position.set(-15, -10, 10);
    scene.add(tealLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 1.8, 40);
    goldLight.position.set(0, -15, 10);
    scene.add(goldLight);

    // --- 1. Shimmering Particle Constellation (Ledger Nodes) ---
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const tealBrandColor = new THREE.Color(0x0d9488);
    const tealColor = new THREE.Color(0x14b8a6);
    const goldColor = new THREE.Color(0xfbbf24);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      // Spread across a wide 3D space
      particlePositions[idx] = (Math.random() - 0.5) * 55;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 35;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 30;

      // Color palette mix
      const rand = Math.random();
      const c = rand < 0.6 ? tealBrandColor : rand < 0.85 ? tealColor : goldColor;
      particleColors[idx] = c.r;
      particleColors[idx + 1] = c.g;
      particleColors[idx + 2] = c.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Create soft circular particle texture via canvas
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(16, 185, 129, 0.8)");
    gradient.addColorStop(0.7, "rgba(16, 185, 129, 0.2)");
    gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // --- 2. Floating 3D Smart Ledger Rings ---
    const ringGroup = new THREE.Group();

    // Primary Torus Ring (Digital Khata Cycle)
    const torusGeo = new THREE.TorusGeometry(8.5, 0.08, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x059669,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.7,
    });
    ringMesh = new THREE.Mesh(torusGeo, torusMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    ringGroup.add(ringMesh);

    // Secondary Outer Ring
    const outerTorusGeo = new THREE.TorusGeometry(12, 0.04, 16, 120);
    const outerTorusMat = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      roughness: 0.3,
      metalness: 0.7,
      transparent: true,
      opacity: 0.4,
    });
    const outerRingMesh = new THREE.Mesh(outerTorusGeo, outerTorusMat);
    outerRingMesh.rotation.x = -Math.PI / 4;
    outerRingMesh.rotation.y = Math.PI / 5;
    ringGroup.add(outerRingMesh);

    ringGroup.position.set(10, 0, -2);
    scene.add(ringGroup);

    // --- 3. 3D Golden / Jade Rupee Coin Mesh (Symbol of Shop Prosperity) ---
    coinGroup = new THREE.Group();

    // Outer Coin Cylinder
    const coinGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.35, 48);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Warm gold
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0xd97706,
      emissiveIntensity: 0.15,
    });
    const coinMesh = new THREE.Mesh(coinGeo, coinMat);
    coinMesh.rotation.x = Math.PI / 2;
    coinGroup.add(coinMesh);

    // Coin Inner Bevel Ring
    const innerRimGeo = new THREE.TorusGeometry(2.1, 0.09, 16, 48);
    const innerRimMat = new THREE.MeshStandardMaterial({
      color: 0xfde68a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const innerRim = new THREE.Mesh(innerRimGeo, innerRimMat);
    coinGroup.add(innerRim);

    // Dynamic Rupee Symbol on Coin Face using Canvas Texture
    const coinFaceCanvas = document.createElement("canvas");
    coinFaceCanvas.width = 256;
    coinFaceCanvas.height = 256;
    const cctx = coinFaceCanvas.getContext("2d");
    cctx.fillStyle = "#f59e0b";
    cctx.fillRect(0, 0, 256, 256);
    cctx.fillStyle = "#78350f";
    cctx.font = "bold 130px -apple-system, sans-serif";
    cctx.textAlign = "center";
    cctx.textBaseline = "middle";
    cctx.fillText("₹", 128, 128);

    const coinFaceTex = new THREE.CanvasTexture(coinFaceCanvas);
    const faceDiscGeo = new THREE.CircleGeometry(2.0, 32);
    const faceDiscMat = new THREE.MeshBasicMaterial({
      map: coinFaceTex,
      transparent: true,
      opacity: 0.95,
    });
    const faceDiscFront = new THREE.Mesh(faceDiscGeo, faceDiscMat);
    faceDiscFront.position.z = 0.18;
    coinGroup.add(faceDiscFront);

    const faceDiscBack = new THREE.Mesh(faceDiscGeo, faceDiscMat);
    faceDiscBack.position.z = -0.18;
    faceDiscBack.rotation.y = Math.PI;
    coinGroup.add(faceDiscBack);

    coinGroup.position.set(10, 0, -2);
    scene.add(coinGroup);

    // --- 4. Orbiting Transaction Node Spheres ---
    nodesGroup = new THREE.Group();
    const nodeSpheres = [];
    const nodeColors = [0x10b981, 0x06b6d4, 0xf59e0b, 0x8b5cf6];

    for (let i = 0; i < 4; i++) {
      const sphereGeo = new THREE.SphereGeometry(0.38, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.8,
        metalness: 0.5,
        roughness: 0.2,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeSpheres.push({
        mesh: sphere,
        angle: (i * Math.PI) / 2,
        radius: 8.5,
        speed: 0.008 + i * 0.002,
      });
      nodesGroup.add(sphere);
    }
    nodesGroup.position.set(10, 0, -2);
    scene.add(nodesGroup);

    // --- Mouse Move Parallax Handler ---
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 4;
      targetY = -y * 4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;

      // Adjust camera for mobile screen widths
      if (newWidth < 768) {
        camera.position.z = 36;
        coinGroup.position.set(0, -6, -2);
        ringGroup.position.set(0, -6, -2);
        nodesGroup.position.set(0, -6, -2);
      } else {
        camera.position.z = 28;
        coinGroup.position.set(10, 0, -2);
        ringGroup.position.set(10, 0, -2);
        nodesGroup.position.set(10, 0, -2);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    // --- Animation Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation toward mouse target
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(0, 0, 0);

      // Rotate particle cloud gently
      if (particlesMesh) {
        particlesMesh.rotation.y = elapsedTime * 0.03;
        particlesMesh.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;
      }

      // Rotate 3D Rupee Coin
      if (coinGroup) {
        coinGroup.rotation.y = elapsedTime * 0.8;
        coinGroup.rotation.x = Math.sin(elapsedTime * 0.6) * 0.2;
        coinGroup.position.y = (window.innerWidth < 768 ? -6 : 0) + Math.sin(elapsedTime * 1.4) * 0.5;
      }

      // Rotate Rings
      if (ringMesh) {
        ringMesh.rotation.z = elapsedTime * 0.15;
      }
      if (outerRingMesh) {
        outerRingMesh.rotation.z = -elapsedTime * 0.1;
      }

      // Orbiting transaction nodes
      nodeSpheres.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(node.angle) * (node.radius * 0.5);
        node.mesh.position.z = Math.sin(node.angle * 1.5) * 2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Clean Up ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose Geometries and Materials
      particleGeometry.dispose();
      particleMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      outerTorusGeo.dispose();
      outerTorusMat.dispose();
      coinGeo.dispose();
      coinMat.dispose();
      innerRimGeo.dispose();
      innerRimMat.dispose();
      faceDiscGeo.dispose();
      faceDiscMat.dispose();

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactionMode]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Subtle overlay gradient to blend WebGL seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
