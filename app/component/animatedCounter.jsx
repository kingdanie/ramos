// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// import {  useInView } from "framer-motion";

// const AnimatedCounter = () => {
//   const [count, setCount] = useState(20); // Starting count
//   const endCount = 42; // Ending count
//   const { ref, inView } = useInView({ threshold: 0.5 }); // Configure threshold for visibility

//   const animateCount = () => {
//     if (inView) {
//       motion.animate(count, {
//         duration: 5, // Animation duration in seconds
//         ease: "linear", // Linear easing for a smooth count animation
//         onUpdate: (updatedCount) => setCount(updatedCount),
//       });
//     }
//   };

//   useEffect(() => {
//     animateCount();
//   }, [inView]); // Only trigger animation on inView change

//   return (
//     <div ref={ref} className="text-5xl">
//       <motion.span>{count}</motion.span>
//     </div>
//   );
// };

// export default AnimatedCounter;

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";


const AnimatedCounter = () => {
  const countRef = useRef();
  const [count, setCount] = useState(20000); // Starting count
  const endCount = 42000; // Ending count
  const inView = useInView(countRef, { threshold: 0.5 }); // Configure threshold for visibility

  const variants = {
    visible: { count: endCount, duration: 5, ease: "linear" },
    hidden: { count },
  };

  useEffect(() => {
    if (inView && countRef.current) { // Check if ref has a value before animating
      animate(countRef.current, "visible");
    } else {
      animate(countRef.current, "hidden"); // Animate to hidden state even if not in view
    }
  }, [inView, countRef]);

  const icount = useMotionValue(20);
  const analyticsCountRef = useRef();
  const analyticsCountInveiw = useInView(analyticsCountRef, {once: true});
  const rounded = useTransform(icount, Math.round);

  useEffect(() => {
    const animation = animate(count, 42, { duration: 5 });

    return animation.stop;
  }, []);

  return (
    <div className="text-5xl">
      <motion.span >{rounded}</motion.span>
    </div>
  );
};

export default AnimatedCounter;