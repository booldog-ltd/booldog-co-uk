import { useEffect, useState } from 'react';

export function useNativeInView(ref: HTMLElement | null, offset = 0) {
  if (!ref) return false;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const checkIfVisible = () => {
      const box = ref.getBoundingClientRect();
      setVisible(window.innerHeight - box.top > offset && box.bottom > offset);
    };

    checkIfVisible();

    addEventListener('scroll', checkIfVisible);

    return () => removeEventListener('scroll', checkIfVisible);
  }, []);

  return isVisible;
}
