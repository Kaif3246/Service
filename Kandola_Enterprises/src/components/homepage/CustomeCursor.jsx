// src/components/CustomCursor.jsx
import React, { useEffect, useState, useRef } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  const requestRef = useRef();

  useEffect(() => {
    const moveCursor = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const follow = () => {
      setCirclePos(prev => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;

        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(follow);
    };
    requestRef.current = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  const dotStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: 8,
    height: 8,
    marginLeft: -4,
    marginTop: -4,
    backgroundColor: "#F8F8F8",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
  };

  const circleStyle = {
    position: "fixed",
    top: circlePos.y,
    left: circlePos.x,
    width: 40,
    height: 40,
    marginLeft: -20,
    marginTop: -20,
    border: "2px solid #F8F8F8",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9998,
    transition: "border-color 0.3s ease",
  };

  return (
    <>
      <div style={circleStyle}></div>
      <div style={dotStyle}></div>
    </>
  );
}

export default CustomCursor;
