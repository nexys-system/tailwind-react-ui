import {useEffect, useState} from "../../_snowpack/pkg/react.js";
const getWindowDimensions = () => {
  const mobileDisplayThreshold = 768;
  const {innerWidth: width, innerHeight: height} = window;
  const mobile = width < mobileDisplayThreshold;
  return {
    width,
    height,
    mobile
  };
};
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};
export const classNames = (...classes) => classes.filter(Boolean).join(" ");
export const saveByteArray = (fileName, byte, type = "application/text") => {
  const blob = new Blob([byte], {type});
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", fileName);
  link.click();
};
