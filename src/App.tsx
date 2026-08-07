import CircularGallery from './components/CircularGallery';
import { useEffect, useState } from 'react';

const customImages = [
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/41.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/42.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/44.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/43.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/46.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/45.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/48.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/img%20to%20dlt/47.jpg', text: 'Image 1' }  
];

export default function App() {
  const [orientation, setOrientation] = useState<string>('landscape');
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const checkOrientation = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      if (window.innerHeight > window.innerWidth) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };

    checkOrientation();
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
      }
    }
  };

  const baseHeight = screenSize.height;
  const baseWidth = screenSize.width;

  const imageHeight = baseHeight * 0.7;
  const imageWidth = imageHeight * (3 / 4);

let zoomLevel;

if (baseWidth <= 768) {
  // Mobile — make it bigger
  zoomLevel = 1.1;
} else if (baseWidth <= 1200) {
  // Tablet / small laptop
  zoomLevel = 1;
} else {
  // Desktop large screens
  zoomLevel = 0.9;
}
  if (orientation === 'portrait' && screenSize.width <= 768) {
    return (
      <div
        onClick={enterFullscreen}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          flexDirection: 'column',
          gap: '20px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            color: '#fff',
            fontSize: '24px',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          Please rotate your device
        </div>
        <div
          style={{
            color: '#888',
            fontSize: '16px',
            textAlign: 'center'
          }}
        >
          🔄
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={enterFullscreen}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: '#000'
        }}
        className="gallery-container"
      >
        <CircularGallery
          items={customImages}
          bend={3}
          borderRadius={0.05}
          textColor="#ffffff"
          font="bold clamp(18px, 6vw, 36px) Inter"
          fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          scrollSpeed={2}
          scrollEase={0.03}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          imagePadding={4}
          zoom={zoomLevel}
          cameraZ={40}
          cameraFOV={35}
        />
      </div>
    </div>
  );
}
