import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function ImageS() {
  const app = useRef(null);
  const circle = useRef(null);

  useLayoutEffect(() => {
    let rtx = gsap.context(() => {
      gsap.to(circle.current, {
        rotation: "360", scale: "0.8"
      });
    }, app)
  
    return () => rtx.revert();
  }, [])

  return (
    <div ref={app} className="contein">
      <h1>Image</h1>
      <div className="circle" ref={circle}>Ref</div>
      <Image width={1440} alt="preloader" src="/load.jpg" height={500} priority />
    </div>
  )
}
