import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything
};

export default GoToTop;
