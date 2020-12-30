import { useRef, useEffect, useState, RefObject } from "react";

interface Args<T> extends IntersectionObserverInit {
  elementRef: RefObject<T>;

  freezeOnceVisible?: boolean;
}

// type ReturnType = [boolean, IntersectionObserverEntry | undefined];

function useIntersectionObserver() {
  let observer: IntersectionObserver | null = null;

  const [isNext, setNext] = useState<boolean>(false);

//   const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
//     setNext(entry);
//   };
  const onSentinelIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setNext(true);
      } else {
        setNext(false);
      }
    });
  };

  useEffect(() => {
    const node = document.querySelector(".ais-InfiniteHits-sentinel");
    if(!node) {
        return
    }
    observer = new IntersectionObserver(onSentinelIntersection);


    observer.observe(node);
    return () => {
        if(!observer) {
            return
        }
      observer.disconnect();
    };
    // const node = elementRef?.current; // DOM Ref

    // if (!hasIOSupport || noUpdate || !node) {
    //   return;
    // }

    // // Delete the old observer before creating a new one

    // if (observer.current) observer.current.disconnect();

    // observer.current = new IntersectionObserver(updateEntry, IOOptions);

    // // Ensure the rest of useEffect use the same observer

    // const { current: currentObserver } = observer;

    // currentObserver.observe(node);

    // return () => {
    //   currentObserver.disconnect();
    // };
  }, []);

  return {
    isNext,
  };
}

export default useIntersectionObserver;
