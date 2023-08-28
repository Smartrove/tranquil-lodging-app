import { useEffect, useRef } from "react";

export const useHandleClick = (closeHandler, listenCapturing = true) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeHandler();
      }
    };

    //we put the third argument true to ensure the click event work in a capturing way
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [closeHandler, listenCapturing]);

  return ref;
};
