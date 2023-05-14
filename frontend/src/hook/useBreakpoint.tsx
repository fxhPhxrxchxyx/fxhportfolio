import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 600) {
      setBreakPoint(0);
    }
    if (600 < windowSize.width && windowSize.width < 720) {
      setBreakPoint(600);
    }
    if (720 < windowSize.width && windowSize.width < 960) {
      setBreakPoint(720);
    }
    if (960 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(960);
    }
    if (1280 < windowSize.width && windowSize.width < 1920) {
      setBreakPoint(1280);
    }
    if (windowSize.width >= 1920) {
      setBreakPoint(1920);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
