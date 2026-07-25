import React, { Component, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Environment from './Environment';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePortfolioMotion from '../../hooks/usePortfolioMotion';

class WebGLBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

function StaticFallback() {
  return (
    <div className="lunar-canvas__static" role="img" aria-label="A coral lunar body surrounded by a precision orbital interface">
      <img src={`${process.env.PUBLIC_URL || ''}/assets/lunar/system-orbit.webp`} alt="" decoding="async" />
      <span>Static lunar scene / performance mode</span>
    </div>
  );
}

export default function Scene() {
  const shellRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);
  const reducedMotion = usePortfolioMotion();
  const mobile = useMediaQuery('(max-width: 767px)');
  const coarse = useMediaQuery('(pointer: coarse)');
  const saveData = Boolean(navigator.connection?.saveData);
  const handleReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: '120px' });
    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  if (saveData || mobile) return <StaticFallback />;

  return (
    <WebGLBoundary fallback={<StaticFallback />}>
      <div ref={shellRef} className="lunar-canvas">
        <div className="lunar-canvas__visual" aria-hidden="true">
          <Canvas
            camera={{ position: [0, 0, 7.2], fov: mobile ? 42 : 37, near: 0.1, far: 40 }}
            dpr={mobile || coarse ? [1, 1.1] : [1, 1.5]}
            frameloop={reducedMotion || !active ? 'demand' : 'always'}
            gl={{ powerPreference: 'high-performance', alpha: true, antialias: !mobile }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 0.94;
              gl.outputColorSpace = THREE.SRGBColorSpace;
            }}
          >
            <Suspense fallback={null}>
              <Environment reducedMotion={reducedMotion} mobile={mobile || coarse} onReady={handleReady} />
            </Suspense>
          </Canvas>
        </div>
        {!ready && (
          <div className="lunar-canvas__loading" role="status">
            <span>Loading lunar surface</span>
          </div>
        )}
      </div>
    </WebGLBoundary>
  );
}
