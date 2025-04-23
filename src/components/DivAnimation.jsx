import React, { useRef, useEffect, useState } from "react";
import "../style.css";

const DivAnimation = ({ animation = "fade-in", children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? `animate-${animation}` : "hidden"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


{/* 
Ação (animation) | Descrição
fade-in          | Aparece suavemente
slide-up         | Sobe do fundo com fade
slide-left       | Vem da esquerda com fade
slide-right      | Vem da direita com fade
zoom-in          | Cresce de pequeno para o tamanho normal
flip             | Dá uma giradinha (eixo Y) 
*/}


export default DivAnimation;
