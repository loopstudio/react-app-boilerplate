import { useEffect, useRef } from 'react';

import { objType } from '../components/ComponentsTypes';

const defaultEvents = ['mousedown', 'touchstart'];

const on = (obj: objType, ...args: any) =>
  obj.addEventListener.apply(null, args);

const off = (obj: objType, ...args: any) =>
  obj.removeEventListener.apply(null, args);

export const useClickAway = (
  ref: React.RefObject<HTMLDivElement>,
  onClickAway: (arg: object) => void,
  events = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: { target: Node }) => {
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
