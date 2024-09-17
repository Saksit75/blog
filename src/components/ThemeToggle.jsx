import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the selected theme on initial render
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme in local storage
  };

  return (
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}  // Correct way to handle toggle change
        className="toggle theme-controller"
      />
  );
};

export default ThemeToggle;
