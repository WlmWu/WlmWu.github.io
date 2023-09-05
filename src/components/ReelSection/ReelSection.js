import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  createRef,
  useCallback,
} from "react";

import "./ReelSection.css";

const ReelSectionItem = forwardRef((props, ref) => {
  const { animateStartScrollY, animated, children } = props;
  const { domRef, tRef } = ref;
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!tRef.current) {
        return;
      }
      if (animateStartScrollY === -1) {
        return;
      }
      const animateDis = tRef.current.clientHeight;
      const scrollTop = domRef.current.scrollTop;
      const animateCenterScrollY = animateDis / 2 + animateStartScrollY;

      // const animation = (scrollY) => { return (  - (2 / animateDis) * Math.abs(scrollY - animateCenterScrollY) + 1)}
      // const animation = (scrollY) => { return (-(4 / animateDis ** 2) * (scrollY - animateCenterScrollY) ** 2 + 1)}
      const animation = (scrollY) => {
        return (
          -(16 / animateDis ** 4) * (scrollY - animateCenterScrollY) ** 4 + 1
        );
      };
      setOpacity(animation(scrollTop));
    };

    const { current } = domRef;
    current.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [domRef, tRef, animateStartScrollY, animated]);

  return (
    <>
      <div
        className={`d-flex justify-content-center py-5`}
        style={{ opacity: animated ? (opacity > 0 ? opacity : 0) : 1 }}
        ref={tRef}
      >
        {children}
      </div>
    </>
  );
});

const ReelSection = (props) => {
  const { children } = props;
  const domRef = useRef();

  const nChildren = children.length + 1;
  const sRefs = useRef([]);
  const [sHeights, setSHeights] = useState([]);

  const updateRefs = useCallback(
    (arrLength) => {
      if (sRefs.current.length !== arrLength) {
        sRefs.current = Array(arrLength)
          .fill()
          .map((_, i) => sRefs.current[i] || createRef());
      }
      if (sHeights.length !== arrLength) {
        setSHeights(
          Array(arrLength)
            .fill()
            .map((_, __) => -1)
        );
      }
    },
    [sHeights]
  );

  useEffect(() => {
    let current = null;
    updateRefs(nChildren);
    if (!domRef.current) {
      return;
    } else {
      current = domRef.current;
    }

    const toScrollTop = () => {
      const top = sRefs.current[0].current.clientHeight / 2;
      if (current.scrollTop < top) {
        current.scroll({
          top: top,
          left: 0,
          behavior: "instant",
        });
      }
    };

    const handleScroll = () => {
      if (sHeights.every((e) => e === -1)) {
        let newHeights = sHeights;
        for (let i = 0; i < sHeights.length; ++i) {
          newHeights[i] =
            i === 0
              ? 0
              : newHeights[i - 1] + sRefs.current[i - 1].current.clientHeight;
        }
        setSHeights([...newHeights]);
      }
    };
    if (sRefs.current[0].current) {
      toScrollTop();
    }

    current.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [updateRefs, sHeights, nChildren]);

  return (
    <>
      <div
        className={`reel-section bg-body-tertiary bg-opacity-50 border border-start-0 border-end-0`}
        ref={domRef}
      >
        {children.map((child, i) => (
          <ReelSectionItem
            key={`reel-${i}`}
            ref={{ domRef: domRef, tRef: sRefs.current[i] }}
            animateStartScrollY={sHeights[i]}
            animated={i === 0 ? false : true}
          >
            {child}
          </ReelSectionItem>
        ))}
      </div>
    </>
  );
};

export default ReelSection;
