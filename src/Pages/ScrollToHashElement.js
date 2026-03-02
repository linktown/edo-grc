import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: isMobileDevice() ? "auto" : "smooth", // Use 'auto' for mobile and 'smooth' for desktop
          block: "start",
          inline: "start",
        });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
