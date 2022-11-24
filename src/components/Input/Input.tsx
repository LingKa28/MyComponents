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
  const [_value, _setValue] = useState<string>(defaultValue);
  console.log(_value);
  

  const getLableStyle = () => {
    return (
      _value ? {
        top: '0',
        fontSize: '.5rem',
        lineHeight: '1',
        backgroundColor: 'white',
      } : {}
    )
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
        className={`input-type-${type}`}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <label
        className={`input-type-${type}`}
        style={getLableStyle()}
      >
        {lable}
      </label>
      <div className="input-underline" />
    </div>
  );
}

export default Input;
