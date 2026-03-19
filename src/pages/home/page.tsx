import { useEffect } from "react";

const WHATSAPP_NUMBER = "5575988180557";
const WHATSAPP_MESSAGE = "Olá! Vim pelo anúncio e quero impulsionar meu perfil. Pode me explicar como funciona?";
const WHATSAPP_REDIRECT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_REDIRECT_URL;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .wpp-page {
          font-family: 'Inter', sans-serif;
          background-color: #eef3f0;
          min-height: 100dvh;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 20px;
          overflow: hidden;
        }

        .wpp-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 400px;
        }

        /* --- Ripple layers --- */
        .ripple-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 152px;
          height: 152px;
          margin-bottom: 28px;
          flex-shrink: 0;
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.12);
          animation: ripplePulse 2.4s ease-in-out infinite;
        }

        .ripple-1 {
          width: 152px;
          height: 152px;
          animation-delay: 0s;
        }
        .ripple-2 {
          width: 120px;
          height: 120px;
          background: rgba(37, 211, 102, 0.18);
          animation-delay: 0.2s;
        }
        .ripple-3 {
          width: 94px;
          height: 94px;
          background: rgba(37, 211, 102, 0.22);
          animation-delay: 0.4s;
        }

        @keyframes ripplePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.07); opacity: 0.7; }
        }

        /* --- WhatsApp icon circle --- */
        .wpp-icon-circle {
          position: relative;
          z-index: 2;
          width: 72px;
          height: 72px;
          background: linear-gradient(145deg, #25d366, #1ebe5d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 8px 24px rgba(37, 211, 102, 0.38),
            0 2px 8px rgba(37, 211, 102, 0.22);
        }

        .wpp-icon-circle i {
          font-size: 38px;
          color: #ffffff;
          line-height: 1;
        }

        /* --- Card --- */
        .wpp-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 32px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
          padding: 36px 28px 32px;
          width: 100%;
          text-align: center;
          margin-bottom: 22px;
        }

        .wpp-card h1 {
          font-size: clamp(22px, 6vw, 28px);
          font-weight: 700;
          color: #1a3329;
          margin: 0 0 8px;
          letter-spacing: -0.3px;
        }

        .wpp-card p {
          font-size: clamp(13px, 3.8vw, 15px);
          font-weight: 400;
          color: #5a7a6a;
          margin: 0 0 30px;
          line-height: 1.55;
        }

        /* --- Dots --- */
        .dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background-color: #25d366;
          border-radius: 50%;
          animation: dotBounce 1.4s ease-in-out infinite;
        }

        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.18s; }
        .dot:nth-child(3) { animation-delay: 0.36s; }

        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          40% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        /* --- Security row --- */
        .security-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #7a9e8e;
          font-size: 13px;
          font-weight: 500;
        }

        .security-row i {
          font-size: 14px;
          color: #7a9e8e;
        }

        /* --- Footer text --- */
        .wpp-footer {
          margin-top: 20px;
          text-align: center;
          font-size: 11px;
          color: #9ab8a8;
          font-weight: 400;
          letter-spacing: 0.2px;
        }
      `}</style>

      <main className="wpp-page">
        <div className="wpp-inner">

          {/* WhatsApp icon com ripples */}
          <div className="ripple-container" aria-hidden="true">
            <span className="ripple ripple-1" />
            <span className="ripple ripple-2" />
            <span className="ripple ripple-3" />
            <div className="wpp-icon-circle">
              <i className="ri-whatsapp-line" />
            </div>
          </div>

          {/* Card principal */}
          <div className="wpp-card" role="status" aria-live="polite">
            <h1>Aguarde</h1>
            <p>Redirecionando para o WhatsApp...</p>
            <div className="dots" aria-label="Carregando">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>

          {/* Linha de segurança */}
          <div className="security-row">
            <i className="ri-lock-line" aria-hidden="true" />
            <span>Conexão segura</span>
          </div>

          {/* Rodapé */}
          <p className="wpp-footer">
            Superdigitalgram Engajamento © 2026 Todos os direitos reservados.
          </p>

        </div>
      </main>
    </>
  );
}
