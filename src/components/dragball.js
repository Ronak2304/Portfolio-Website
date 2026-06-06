import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function DragBall() {
  const ref = useRef(null);

  const x = useSpring(0, {
    damping: 20,
    stiffness: 150,
  });

  const y = useSpring(0, {
    damping: 20,
    stiffness: 150,
  });

  useEffect(() => {
    const move = (e) => {
      const ball = ref.current;
      if (!ball) return;

      const { clientX, clientY } = e;

      const offsetX = clientX - ball.offsetWidth / 2;
      const offsetY = clientY - ball.offsetHeight / 2;

      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#c770f0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

export default DragBall;