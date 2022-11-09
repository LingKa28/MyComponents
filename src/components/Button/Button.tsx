import { useState } from "react";
import Pressable from "../Pressable/Pressable";
import "./index.less";

const Button: React.FC<ButtonData> = ({
  type = 'contained',
  color = 'primary',
  size = 'medium',
  style = {},
  disabled = false,
  disableRipple = false,
  herf,
  onClick,
  children,
}) => {
  const [isPress, setIsPress] = useState<boolean>(false);

  const handleMouseDown = () => {
    setIsPress(true);
  }

  const handleMouseUp = () => {
    setIsPress(false);
  }

  const handleMouseLeave = () => {
    setIsPress(false);
  }

  const getStyle = () => {
    let _style: any = {};
    _style['--color'] = color;

    return {..._style, ...style};
  }

  const getClassName = () => {
    const getColorClassName = () => {
      switch (color) {
        case 'primary':
          return 'button-color-primary';
        case 'secondary':
          return 'button-color-secondary';
        case 'success':
          return 'button-color-success';
        case 'error':
          return 'button-color-error';
        case 'warning':
          return 'button-color-warning';
        case 'info':
          return 'button-color-info';
        default:
          return '';
      }
    }
    const getSizeClassName = () => {
      switch (size) {
        case 'small':
          return 'button-size-small';
        case 'medium':
          return 'button-size-medium';
        case 'large':
          return 'button-size-large';
        default:
          return '';
      }
    }
    const pressing = `${isPress ? 'button-pressing' : ''}`;
    const _type = `button-type-${type}`;
    const _disabled = `${disabled ? 'button-disabled' : ''}`;
    const _color = getColorClassName();
    const _size = getSizeClassName()
    return `${pressing} ${_type} ${_disabled} ${_color} ${_size}`;
  }

  const renderSubject = () => {
    return (
      <>
        {herf ? (
          <a
            className={getClassName()}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            href={herf}
            style={getStyle()}
          >
            {children}
          </a>
        ) : (
          <button
            className={getClassName()}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={getStyle()}
          >
            {children}
          </button>
        )}
      </>
    );
  }

  return (
    <>
      {/* <style>
        {`

       `}
      </style> */}
      <div className='button'>
        {(!disabled && !disableRipple) ? (
          <Pressable
            color={type === 'contained' ? 'white' : color}
            borderRadius='4px'
          >
            {renderSubject()}
          </Pressable>
        ) : (
          <>
            {renderSubject()}
          </>
        )}
      </div>
    </>
  );
}

export default Button;
