import { useEffect, useState } from 'react'

export default function ScrollBG() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none transition-transform duration-75"
      style={{
        backgroundImage: `url('/duck-duo.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetY * -0.2}px`,
      }}
    />
  )
}
