import React from 'react';

const LoadingDots = ({ color = 'black', style = 'small' }) => {
  return (
    <span className={`loading-dots ${color} ${style}`}>
      <span className="dot one" />
      <span className="dot two" />
      <span className="dot three" />
      <style jsx>{`
        .loading-dots {
          display: inline-block;
        }
        .loading-dots.small .dot {
          width: 4px;
          height: 4px;
          margin: 0 1px;
        }
        .loading-dots.large .dot {
          width: 8px;
          height: 8px;
          margin: 0 2px;
        }
        .dot {
          background-color: ${color};
          border-radius: 50%;
          display: inline-block;
          animation: loading-dots 1s infinite both;
        }
        .dot.one {
          animation-delay: 0s;
        }
        .dot.two {
          animation-delay: 0.2s;
        }
        .dot.three {
          animation-delay: 0.4s;
        }
        @keyframes loading-dots {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </span>
  );
};

export default LoadingDots;
