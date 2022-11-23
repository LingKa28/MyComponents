import "./index.less";

type InputProps = {
  readonly type?: 'outlined' | 'filled' | 'standard';
}

const Input: React.FC<InputProps> = ({
  type = 'outlined',
}) => {
  return (
    <div className="input-container">
      <input className={`input-type-${type}`} />
      <label className={`input-type-${type}`}>Lable</label>
      <div className="input-border-bottom" />
    </div>
  );
}

export default Input;
