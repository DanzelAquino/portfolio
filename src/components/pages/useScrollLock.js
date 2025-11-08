// hooks/useScrollLock.js
import { useEffect } from 'react';
import { disableScroll, enableScroll, isScrollLocked } from '../scrollLock';

export const useScrollLock = (shouldLock) => {
  useEffect(() => {
    if (shouldLock) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Cleanup on unmount
    return () => {
      if (isScrollLocked()) {
        enableScroll();
      }
    };
  }, [shouldLock]);
};