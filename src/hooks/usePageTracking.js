import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function usePageTracking() {
  const location = useLocation();
  const prevPath = useRef("");

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Evita duplicados
    if (prevPath.current !== currentPath) {
      ReactGA.send({
        hitType: "pageview",
        page: currentPath,
      });

      prevPath.current = currentPath;
    }
  }, [location]);
}

export default usePageTracking;
