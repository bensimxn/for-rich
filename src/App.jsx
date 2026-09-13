import { useState, useEffect, useRef } from 'react'
import './App.css'

import OpeningScreen from './Components/OpeningScreen'
import ActOne from './Components/ActOne'
import ValentineSection from './Components/valentineSection'

import Lenis from 'lenis'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


function App() {
  const [entered, setEntered] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const lenisRef = useRef(null)


  // =========================
  // SMOOTH SCROLLING
  // =========================

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    // Tell ScrollTrigger whenever Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update)

    // Let GSAP control Lenis
    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)

    // Prevent GSAP from trying to compensate for lag
    gsap.ticker.lagSmoothing(0)


    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }

  }, [])


  // =========================
  // ENTER WEBSITE
  // =========================

  const handleEnter = () => {

    const audio = new Audio('/music/background.mp3')

    audio.play()

    setTransitioning(true)

    setTimeout(() => {
      setEntered(true)

      // Make absolutely sure Lenis knows
      // that scrolling is allowed
      if (lenisRef.current) {
        lenisRef.current.start()
      }

      ScrollTrigger.refresh()

    }, 1000)
  }


  return (
    <>
      {!entered && (
        <OpeningScreen
          handleEnter={handleEnter}
          transitioning={transitioning}
        />
      )}

      {entered && (
        <main>

          <ActOne />

          <ValentineSection />

        </main>
      )}
    </>
  )
}


export default App