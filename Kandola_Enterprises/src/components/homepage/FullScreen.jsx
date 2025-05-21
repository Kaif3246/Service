import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/images/first.jpg";
import secondImage from "../../assets/images/second.jpg"; // import second image
import thirdImage from "../../assets/images/third.jpg";   // import third image
import { useNavigate } from "react-router-dom";

const FullScreenConvexSection = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Images array for slideshow
  const images = [heroImage, secondImage, thirdImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particlesArray = [];

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < 80; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Slide index update every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <>
      <style>{`
        @keyframes dotFadeMove {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-6px);
          }
        }
        .animate-dotFadeMove {
          animation: dotFadeMove 2s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative bg-white min-h-screen w-full overflow-hidden mb-10"
        style={{ fontFamily: '"Cabin", sans-serif' }}
      >
        {/* Background canvas & overlay */}
        <div
          className="absolute inset-0 bg-[#e91617]"
          style={{ clipPath: "inset(0 0 120px 0)" }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

        {/* Main grid container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-screen grid grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-20 bg-[#FF0000]" style={{ fontFamily: '"Cabin", sans-serif' }}>
            <h1 className="text-white text-5xl md:text-6xl font-bold ">
              Take your business
            </h1>
            <h1 className="text-white text-5xl md:text-6xl font-bold ">
              to next level of
            </h1>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 ">
              greatness
            </h1>
            <p className="text-[#A9ABAA]  font-normal text-lg max-w-lg mb-8">
              Discover all the funding you are eligible for and explore your lending
              options with expert guidance.
            </p>
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white font-normal px-4 py-2 shadow-lg transition duration-300 w-36 justify-center"
            >
              <FiArrowRight className="text-xl" />
              Get Started
            </button>
          </div>

          {/* Right Image - slideshow */}
          <div className="h-full w-full relative overflow-hidden">
            {images.map((img, index) => (
              <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ userSelect: "none" }}
              draggable={false}
            />
            ))}
          </div>
        </div>

        {/* Your SVG blobs, side dots, etc. remain as before */}
      </section>
    </>
  );
};

export default FullScreenConvexSection;
