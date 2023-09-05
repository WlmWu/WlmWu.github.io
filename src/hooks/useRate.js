import { useState, useEffect, useRef } from "react";

const useRate = (value) => {
  const [rate, setRate] = useState(0);
  const mounted = useRef();
  const timeout = 1;
  const tid = useRef();

  useEffect(() => {
    const increase = () => {
      return setTimeout(() => {
        setRate(rate + 1);
      }, timeout);
    };
    const decrease = () => {
      return setTimeout(() => {
        setRate(rate - 1);
      }, timeout);
    };
    if (!mounted.current) {
      // compomemtDidMount
      mounted.current = true;
      setRate(value);
    } else {
      // componentDidUpdate
      if (parseInt(rate) < parseInt(value)) {
        clearTimeout(tid.current);
        tid.current = increase();
      } else if (parseInt(rate) > parseInt(value)) {
        clearTimeout(tid.current);
        tid.current = decrease();
      }
    }
  }, [value, rate]);
  return rate;
};

export default useRate;
