import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import './links-section.css'
function Links() {

  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])




  return (
    <div className="links-container section-margin-bottom " >
      <div className="content">
        <div className="left-content">
          <img src="/src/assets/links-img.png" alt="links-img" />
        </div>
        <div className="right-content" style={{ overflow: "hidden" }}>
          <motion.div
            className="link"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .7, delay: 0.25 }}
          >
            <img src="/src/assets/link-1.png" alt="link-img-1" />
            <p>Explore the experiences of other individuals facing similar journeys.</p>
          </motion.div>
          <motion.div 
            className="link"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .7, delay: 0.4 }}
            >
            <img src="/src/assets/link-2.png" alt="link-img-2" />
            <p>Let&apos;s check the rumors and check whether she has breast cancer or not.</p>
          </motion.div>
          <motion.div 
            className="link"
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .7, delay: 0.55 }}
            >
            <img src="/src/assets/link-3.png" alt="link-img-3" />
            <p>Let&apos;s learn about breast cancer and gain some experience.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Links;
