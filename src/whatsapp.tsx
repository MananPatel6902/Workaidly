import React from 'react';
import whatsappIcon from './whatsapp.svg';

const FloatingWhatsAppButton: React.FC = () => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1000, display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          marginRight: 12,
          background: '#25d366',
          color: '#fff',
          borderRadius: 10,
          padding: '10px 18px',
          fontWeight: 700,
          fontSize: 16,
          boxShadow: '0 2px 8px rgba(34,197,94,0.3)',
          whiteSpace: 'nowrap',
          animation: 'blink-fade 2.5s infinite',
        }}
      >
        CHAT WITH US !
        <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5b6.mp3" preload="auto" />
      </div>
      <a
        href="https://wa.me/917307152989"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp us"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(34,197,94,0.25)',
          borderRadius: 9999,
          background: 'transparent',
          padding: 2,
          // No animation here, logo stays stable
          transition: 'transform 0.2s',
        }}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          style={{ height: 50, width: 50 }}
        />
      </a>

      <style>{`
        @keyframes blink-fade {
          0% { opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsAppButton;
