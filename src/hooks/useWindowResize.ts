import { useEffect, useState } from 'react';

function useWindowResize() {
  const [size, setSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  function handleResize() {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { ...size, handleResize };
}

export default useWindowResize;
