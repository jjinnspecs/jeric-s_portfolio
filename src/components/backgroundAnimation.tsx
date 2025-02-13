import { useState, useEffect, useRef, useCallback } from "react";
import "../App.css";

interface ASCIISymbol {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  fading?: boolean;
}

const SYMBOLS = ["█", "▓", "░", "@", "#"];

const CursorASCII = () => {
  const [symbols, setSymbols] = useState<ASCIISymbol[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const terminalRef = useRef<HTMLElement | null>(null);

  // Generate initial random symbols
  useEffect(() => {
    setSymbols(generateRandomSymbols(40));
    terminalRef.current = document.getElementById("terminal");
  }, []);

  // Function to generate random symbols
  const generateRandomSymbols = (count: number): ASCIISymbol[] =>
    Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    }));

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cursorSize = 10;
    setCursorPos({
      x: Math.min(Math.max(e.clientX, 0), window.innerWidth - cursorSize),
      y: Math.min(Math.max(e.clientY, 0), window.innerHeight - cursorSize),
    });

    // Check if cursor is inside the terminal
    if (terminalRef.current?.contains(e.target as Node)) {
      setShowCursor(false);
      document.body.style.cursor = "default";
    } else {
      setShowCursor(true);
      document.body.style.cursor = "none";
    }
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    if (!showCursor) return;
    setSymbols((prev) => [
      ...prev,
      {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      },
    ]);
  }, [showCursor]);

  // Add and remove event listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.body.style.cursor = "default";
    };
  }, [handleMouseMove, handleClick]);

  // Move ASCII symbols
  useEffect(() => {
    const interval = setInterval(() => {
      setSymbols((prevSymbols) =>
        prevSymbols.map((symbol) => {
          let newX = symbol.x + symbol.vx * 1.2;
          let newY = symbol.y + symbol.vy * 1.2;

          // Wrap around screen edges
          newX = newX < 0 ? window.innerWidth : newX > window.innerWidth ? 0 : newX;
          newY = newY < 0 ? window.innerHeight : newY > window.innerHeight ? 0 : newY;

          // Check if inside terminal
          const insideTerminal = terminalRef.current?.getBoundingClientRect();
          if (insideTerminal) {
            const { left, right, top, bottom } = insideTerminal;
            if (newX >= left && newX <= right && newY >= top && newY <= bottom) {
              return { ...symbol, fading: true };
            }
          }

          return { ...symbol, x: newX, y: newY };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Remove faded symbols after a delay
  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setSymbols((prev) => prev.filter((symbol) => !symbol.fading));
    }, 1000);
    return () => clearTimeout(fadeTimeout);
  }, [symbols]);

  return (
    <>
      {/* Custom Circle Cursor */}
      {showCursor && (
        <div
          className="fixed cursor-container pointer-events-none"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="cursor-circle"></div>
          <div className="cursor-wave"></div>
        </div>
      )}

      {/* Render moving ASCII symbols */}
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          className={`fixed text-gray-400 text-lg pointer-events-none transition-opacity duration-500 ${
            symbol.fading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            left: `${symbol.x}px`,
            top: `${symbol.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </>
  );
};

export default CursorASCII;
