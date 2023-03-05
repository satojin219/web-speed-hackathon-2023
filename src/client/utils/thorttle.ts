export const throttle = (delay: number,fn: () => void) => {
  let timerId: NodeJS.Timeout | null;
  return (...args: any) => {
    if (!timerId) {
      timerId = setTimeout(() => {
        fn.apply(this, args);
        timerId = null;
      }, delay);
    }
  };
};
