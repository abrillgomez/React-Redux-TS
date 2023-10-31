import { useLayoutEffect, useRef, useState } from "react";

export const MeasureElement = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef();

  useLayoutEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.offsetWidth);
    }
  }, []);

  return (
    <div ref={elementRef}>
      <p>El ancho del elemento es de: {width}px</p>
    </div>
  );
};
