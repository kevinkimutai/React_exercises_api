import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "./LazySpinner.css";

interface Props {
  show: boolean;
  size: number;
  color: string;
  delay?: number;
}

const LazySpinner = (props: Props) => {
  const { show = false, delay = 0, size, color } = props;
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!show) {
      setShowSpinner(false);
      return;
    }
    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);

  return showSpinner ? (
    <ClipLoader loading={true} size={size} color={color} />
  ) : null;
};

export default LazySpinner;
