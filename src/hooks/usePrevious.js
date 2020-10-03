import { useRef, useEffect } from "react";

export default (val) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = val;
  });

  return ref.current;
};
