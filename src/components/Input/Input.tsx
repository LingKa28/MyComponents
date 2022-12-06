import { useState } from "react";
import "./index.less";

type InputProps = {
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly type?: 'outlined' | 'filled' | 'standard';
  readonly lable?: string;
  readonly disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  defaultValue = '',
  onChange,
  type = 'outlined',
  lable = 'Lable',
  disabled = false,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [_value, _setValue] = useState<string>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    _setValue(e.target.value)
  }

  return (
    <div className="input-container">
      <input
        className={`input-type-${type} ${disabled ? 'input-disabled' : ''}`}
        defaultValue={defaultValue}
        value={_value}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <label
        className={`
                    input-type-${type} 
                    ${isFocus ? 'input-focus' : ''} 
                    ${_value ? 'input-not-null' : ''}
                    ${disabled ? 'input-disabled' : ''}
        `}
      >
        {lable}
      </label>
      <div className={`input-underline ${isFocus ? 'input-focus' : ''}`} />
    </div>
  );
}

export default Input;
