import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function ImageS() {
  const app = useRef(null);
  const circle = useRef(null);

  useLayoutEffect(() => {
    let rtx = gsap.context(() => {
      gsap.from(circle.current, {
        rotation: "360",
        scale: "0.8",
        repeat: -1,
        duration: 3,
        ease: "none",
        x: -200,
        opacity: 0,
      });
      gsap.fromTo(".text", { opacity: 0, y: 200 }, { opacity: 1, duration: 3, repeat: -1, y: 0, yoyo: true });
    }, app);

    return () => rtx.revert();
  }, []);

  return (
    <div ref={app} className="contein">
      <h1 className="text">Image</h1>
      <div className="circle" ref={circle}>
        Ref
      </div>
      <Image width={1440} alt="preloader" src="/load.jpg" height={500} priority />
    </div>
  );
}
