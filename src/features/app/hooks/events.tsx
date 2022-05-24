import { useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

const on = (obj: any, ...args: any) => obj.addEventListener(...args);

const off = (obj: any, ...args: any) => obj.removeEventListener(...args);

export const useClickAway = (
  ref: any,
  onClickAway: any,
  events = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: { target: any }) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};
