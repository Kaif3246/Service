import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/images/heros-bg.jpg";
import blackBg from "../../assets/images/black-bg.jpg";

const HeroSection = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ".hero-text",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, stagger: 0.2 }
        );
        gsap.fromTo(
            ".cta-button",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        );
        gsap.fromTo(
            ".hero-image",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, delay: 1.2 }
        );

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
                className="relative w-full min-h-screen text-white overflow-hidden pb-8"
                style={{
                    backgroundImage: `url(${blackBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Canvas Particles Layer */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-0"
                ></canvas>

                {/* SVG Morphing Blob */}
                <svg
                    className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                >
                    <g transform="translate(400 400)">
                        <path fill="#EF4444">
                            <animate
                                attributeName="d"
                                dur="12s"
                                repeatCount="indefinite"
                                values="
                  M157,-163C210,-111,256,-56,259,3C263,61,224,122,170,166C115,210,57,238,-7,243C-72,248,-144,229,-182,178C-220,126,-223,42,-200,-33C-178,-109,-130,-175,-68,-217C-6,-259,68,-277,139,-244C210,-210,277,-163,157,-163Z;
                  M126,-148C166,-109,200,-68,204,-24C208,20,181,67,142,102C104,138,52,161,-5,165C-61,168,-121,152,-163,113C-205,75,-229,13,-219,-45C-209,-104,-164,-158,-111,-191C-58,-225,2,-237,62,-225C123,-213,183,-187,126,-148Z;
                  M157,-163C210,-111,256,-56,259,3C263,61,224,122,170,166C115,210,57,238,-7,243C-72,248,-144,229,-182,178C-220,126,-223,42,-200,-33C-178,-109,-130,-175,-68,-217C-6,-259,68,-277,139,-244C210,-210,277,-163,157,-163Z
                "
                            />
                        </path>
                    </g>
                </svg>

                {/* Side Dots Left */}
                <div className="hidden md:block absolute top-20 left-4 z-10 space-y-6">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-red-400 opacity-50 animate-dotFadeMove"
                            style={{ animationDelay: `${i * 300}ms` }}
                        ></div>
                    ))}
                </div>

                {/* Side Dots Right */}
                <div className="hidden md:block absolute top-20 right-4 z-10 space-y-6">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-red-400 opacity-50 animate-dotFadeMove"
                            style={{ animationDelay: `${i * 300}ms` }}
                        ></div>
                    ))}
                </div>

                {/* Actual Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 items-center min-h-screen relative z-10">
                    {/* Text Side */}
                    <div className="z-10 space-y-4">
                        <h1 className="hero-text text-4xl md:text-5xl font-bold leading-tight m-0">
                        We Build
                        </h1>
                        <h1 className="hero-text text-4xl md:text-5xl font-bold leading-tight m-0">
                            The Backend Of
                        </h1>
                        <h1 className="hero-text text-4xl md:text-5xl font-bold leading-tight text-red-500 m-0">
                            Million-Dollar Moves
                        </h1>
                        <p className="hero-text text-lg text-gray-300 max-w-lg pt-4">
                        At Kandola Enterprises, we don’t just repair credit — we rebuild confidence, restore opportunities, and reshape financial futures. 
                        </p>
                        <button className="cta-button mt-6 inline-flex items-center gap-2 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                            <FiArrowRight className="text-xl" />
                            Free consultation
                        </button>
                    </div>

                    {/* Right Side with Curved Top Image */}
                    <div className="hero-image relative w-full h-[450px] md:h-[550px] flex justify-center items-start">
                        <div
                            className="w-[90%] h-full bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${heroImage})`,
                                clipPath: "path('M0,0 Q250,80 500,0 L500,500 L0,500 Z')",
                            }}
                        ></div>

                    </div>

                </div>
            </section>
            <section className="relative bg-white min-h-[20vh] flex items-center justify-center overflow-hidden">



                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                    <svg
                        viewBox="0 0 1440 160"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block w-full h-[160px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#000000"
                            d="M0,0 L0,160 C480,10 960,10 1440,160 L1440,0 Z"
                        />
                    </svg>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
