import { useState } from "react";

const useClickCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return { count, increment };
};

export default useClickCounter;
