import { useState, useEffect } from "react";

import DeviceType from "../constants/DeviceType";

const useRWD = () => {
  const [device, setDevice] = useState(DeviceType.Phone);
  const handleRWD = () => {
    if (window.innerWidth > 768) setDevice(DeviceType.PC);
    else if (window.innerWidth > 576) setDevice(DeviceType.Pad);
    else setDevice(DeviceType.Phone);
  };
  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    handleRWD();
    return (/* componentWillUnmount */) => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return device;
};

export { DeviceType };
export default useRWD;
