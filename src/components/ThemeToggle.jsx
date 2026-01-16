import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Lazy initializer runs only once on mount
    const storedTheme = localStorage.getItem("theme")
    return storedTheme === "dark"
  })

  // Synchronize DOM with reactive state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
  <button 
    onClick={toggleTheme} 
    className={cn(
      "fixed z-[100] top-4 right-16 md:top-5 md:right-5 p-2 rounded-full transition-all duration-300 bg-secondary/20 backdrop-blur-md border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20", 
      "focus:outline-none"
    )}
  >
    {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300" />
    ) : (
    <Moon className="h-6 w-6 text-blue-900" />
    )}
  </button>
  )
}
