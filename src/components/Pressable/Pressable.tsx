import { useState, useRef, useEffect } from "react";
import { PressableData } from "./index";
import Ripple from "./Ripple";
import "./index.less";

interface RippleData {
  readonly key: number;
  readonly rippleX: number;
  readonly rippleY: number;
  readonly rippleSize: number;
  isExiting: boolean;
}

let id = 0;
const getId = () => {
  if (id > 99)
    id = 0;
  return id++;
}

const Pressable: React.FC<PressableData> = ({
  color = 'primary',
  borderRadius,
  children,
}) => {
  const exitAnimationTime = 10; // *100ms
  const [rippleArray, setRippleArray] = useState<Array<RippleData>>([]);
  const rippleWrapperEl = useRef<HTMLDivElement>(null);

  const handleMouseDown = ({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const key = getId();
    const rippleWrapperData = rippleWrapperEl.current?.getBoundingClientRect();
    const rippleX = Math.round(clientX - (rippleWrapperData?.x || 0));
    const rippleY = Math.round(clientY - (rippleWrapperData?.y || 0));
    const sizeX = Math.max(Math.abs((rippleWrapperEl.current?.clientWidth || 0) - rippleX), rippleX) * 2 + 2;
    const sizeY = Math.max(Math.abs((rippleWrapperEl.current?.clientHeight || 0) - rippleY), rippleY) * 2 + 2;
    const rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    setRippleArray([...rippleArray, {
      key,
      rippleX,
      rippleY,
      rippleSize,
      isExiting: false,
    }]);
  }

  const deleteRipple = () => {
    if (rippleArray && rippleArray.length) {
      setRippleArray(rippleArray => {
        rippleArray[rippleArray.length - 1].isExiting = true;
        return [...rippleArray];
      });
      const key = rippleArray[rippleArray.length - 1].key;
      setTimeout(() => {
        setRippleArray((rippleArray) => {
          const index = rippleArray.findIndex(ripple => ripple.key === key);
          index >= 0 && rippleArray.splice(index, 1);
          return [...rippleArray];
        })
      }, exitAnimationTime * 100);
    }
  }

  /**
   * 调试代码 
   */
  useEffect(() => {
    // console.log(rippleArray);
  }, [rippleArray]);
  // console.log(children);

  return (
    <div
      className='pressable'
      ref={rippleWrapperEl}
      onMouseDown={handleMouseDown}
      onMouseUp={deleteRipple}
      onMouseOut={deleteRipple}
    >
      {children}
      <div
        className='ripple-wrapper'
        style={{ borderRadius: borderRadius }}
      >
        {rippleArray.map(ripple => {
          return <Ripple
            key={ripple.key}
            rippleX={ripple.rippleX}
            rippleY={ripple.rippleY}
            rippleSize={ripple.rippleSize}
            isExiting={ripple.isExiting}
            color={color}
          />
        })}
      </div>
    </div>
  );
}

export default Pressable;
