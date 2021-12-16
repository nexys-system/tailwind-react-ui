import { useEffect, useState } from "react";

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
const getWindowDimensions = () => {
  const mobileDisplayThreshold = 768;
  const { innerWidth: width, innerHeight: height } = window;
  const mobile = width < mobileDisplayThreshold;
  return {
    width,
    height,
    mobile,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");

export const saveByteArray = (
  fileName: string,
  byte: Buffer | string,
  type: string = "application/text"
) => {
  const blob = new Blob([byte], { type });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  //link.download = fileName;
  link.setAttribute("download", fileName);
  link.click();
};
