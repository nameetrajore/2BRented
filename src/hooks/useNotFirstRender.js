import { useEffect, useRef } from "react";

export function useNotFirstRender(callback, cleanup) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      callback();
    }
    isFirstRender.current = false;

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, [callback, cleanup]);
}
