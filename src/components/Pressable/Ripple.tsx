interface RippleData {
  readonly rippleX: number;
  readonly rippleY: number;
  readonly rippleSize: number;
  readonly isExiting: boolean;
  readonly color: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;

}

const Ripple: React.FC<RippleData> = rippleData => {
  const { rippleX, rippleY, rippleSize, color, isExiting } = rippleData;

  const getColorClassName = () => {
    switch (color) {
      case 'primary':
        return 'ripple-color-primary';
      case 'secondary':
        return 'ripple-color-secondary';
      case 'success':
        return 'ripple-color-success';
      case 'error':
        return 'ripple-color-error';
      case 'warning':
        return 'ripple-color-warning';
      case 'info':
        return 'ripple-color-info';
      default:
        return '';
    }
  }
  const _color = getColorClassName();

  return (
    <span
      className={`${isExiting ? 'ripple-exit' : ''}`}
      style={{ pointerEvents: 'none' }}
    >
      <span
        className={`ripple ripple-enter ${_color}`}
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
