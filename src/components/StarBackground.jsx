import { useEffect, useState, useCallback } from "react"
import { Send, Cloud } from "lucide-react"

function StarBackground() {
  const [stars, setStars] = useState(() => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
    const initialStars = []
    for (let i = 0; i < numberOfStars; i++) {
      initialStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    return initialStars
  })

  // State for paper planes (reusing meteor logic structure)
  const [planes, setPlanes] = useState(() => {
    const numberOfPlanes = 4
    const initialPlanes = []
    for (let i = 0; i < numberOfPlanes; i++) {
        initialPlanes.push({
        id: i,
        size: Math.random() * 0.5 + 0.5, // Scaling for icon size
        x: Math.random() * 100, // Not used much if animation overrides
        y: Math.random() * 80 + 10, // Random vertical position (10% to 90%)
        delay: Math.random() * 15,
        animationDuration: Math.random() * 5 + 8, // Slower than meteors
      })
    }
    return initialPlanes
  })

  const [meteors, setMeteors] = useState(() => {
    const numberOfMeteors = 5
    const initialMeteors = []
    for (let i = 0; i < numberOfMeteors; i++) {
      initialMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    }
    return initialMeteors
  })

  const generateElements = useCallback(() => {
    const w = window.innerWidth
    const h = window.innerHeight
    
    // Generate Stars / Particles
    const numberOfStars = Math.floor((w * h) / 10000)
    const newStars = []
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars)

    // Generate Meteors
    const newMeteors = []
    for (let i = 0; i < 3; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 20 - 10, 
        animationDuration: Math.random() * 3 + 3,
      })
    }
    setMeteors(newMeteors)

    // Generate Planes
    const newPlanes = []
    for (let i = 0; i < 4; i++) {
        newPlanes.push({
        id: i,
        size: Math.random() * 0.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 80 + 10,
        delay: Math.random() * 20 - 10,
        animationDuration: Math.random() * 5 + 8,
      })
    }
    setPlanes(newPlanes)

  }, [])

  useEffect(() => {
    window.addEventListener("resize", generateElements)
    return () => window.removeEventListener("resize", generateElements)
  }, [generateElements])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* =======================
          DARK MODE: STARS & METEORS
      ======================= */}
      <div className="dark-mode-only absolute inset-0">
        {stars.map((star) => (
          <div key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: (star.size + 1) + "px",
            height: (star.size + 1) + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            backgroundColor: "white",
            animationDuration: star.animationDuration + "s"
          }} />
        ))}
        {meteors.map((meteor) => (
          <div key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 70 + "px",
            height: "2px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            background: "linear-gradient(to right, white, transparent)",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s"
          }} />
        ))}
      </div>

      {/* =======================
          LIGHT MODE: CLOUDS & PLANES
      ======================= */}
      <div className="light-mode-only absolute inset-0">
        {/* Paper Planes */}
        {planes.map((plane) => (
            <div key={`plane-${plane.id}`}
            className="animate-fly text-primary/40"
            style={{
                left: "0%", // Starting near left (animation handles X translation)
                top: plane.y + "%",
                fontSize: plane.size + "rem",
                animationDelay: plane.delay + "s",
                animationDuration: plane.animationDuration + "s"
            }} 
            >
                <div className="transform -rotate-12">
                    <Send size={24 * plane.size} />
                </div>
            </div>
        ))}
        
        {/* Floating Clouds (More prominent in Day Mode) */}
        {stars.slice(0, 12).map((cloud, i) => (
            <div key={`cloud-${i}`}
            className="absolute text-primary/10 animate-float"
            style={{
                left: cloud.x + "%",
                top: (cloud.y % 50) + 5 + "%", // Distribute in upper half
                animationDuration: (cloud.animationDuration * 6) + "s",
                animationDelay: (cloud.id * 0.5) + "s",
                transform: `scale(${cloud.size * 0.8 + 1})`
            }}
            >
                <Cloud size={80 + (cloud.size * 15)} fill="currentColor" strokeWidth={0} />
            </div>
        ))}

      </div>
    </div>
  )
}

export default StarBackground