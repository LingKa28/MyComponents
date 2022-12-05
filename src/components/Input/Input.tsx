import { useState } from "react";
import "./index.less";

type InputProps = {
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly type?: 'outlined' | 'filled' | 'standard';
  readonly lable?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  defaultValue = '',
  onChange,
  type = 'outlined',
  lable = 'Lable',
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [_value, _setValue] = useState<string>(defaultValue);

  const getLableStyle = () => {
    const lableStyle: React.CSSProperties = {
      top: '0',
      fontSize: '.5rem',
      lineHeight: '1',
    };

    switch (type) {
      case 'outlined':
        lableStyle.backgroundColor = 'white';
        break;
      case 'filled':
        lableStyle.padding = '4px 8px';
        lableStyle.backgroundColor = 'hsl(0, 0%, 95%)';
        lableStyle.borderRadius = '4px';
        break;
      case 'standard':
        lableStyle.backgroundColor = 'transparent';
        break;
      default:
        lableStyle.backgroundColor = 'white';
        break;
    };

    return _value ? lableStyle : {};
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    _setValue(e.target.value)
  }

  return (
    <div className="input-container">
      <input
        required
        className={`input-type-${type}`}
        defaultValue={defaultValue}
        value={_value}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <label
        className={`input-type-${type} ${isFocus ? 'input-focus' : ''}`}
        style={getLableStyle()}
      >
        {lable}
      </label>
      <div className={`input-underline ${isFocus ? 'input-focus' : ''}`} />
    </div>
  );
}

export default Input;
