import React from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

const CursorGlow = () => {
  const { x, y } = useMousePosition()

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <motion.div
      className="cursor-glow"
      animate={{
        x: x - 150,
        y: y - 150
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
      style={{
        position: 'fixed',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 124, 0, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9998,
        mixBlendMode: 'screen'
      }}
    />
  )
}

export default CursorGlow
