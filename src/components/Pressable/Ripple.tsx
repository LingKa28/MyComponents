interface RippleData {
  readonly rippleX: number;
  readonly rippleY: number;
  readonly rippleSize: number;
  readonly isExiting: boolean;
  readonly color?: string;
}

const Ripple: React.FC<RippleData> = rippleData => {
  const { rippleX, rippleY, rippleSize, color, isExiting } = rippleData;

  return (
    <span
      className={`${isExiting ? 'ripple-exit' : ''}`}
      style={{ pointerEvents: 'none' }}
    >
      <span
        className='ripple ripple-enter'
        style={{
          width: `${rippleSize}px`,
          height: `${rippleSize}px`,
          left: `${rippleX - (rippleSize / 2)}px`,
          top: `${rippleY - (rippleSize / 2)}px`,
          backgroundColor: color,
        }}
      />
    </span>
  );
}

export default Ripple;
