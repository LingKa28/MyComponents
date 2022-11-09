type ButtonData = {
  readonly type?: 'contained' | 'outlined' | 'text';
  readonly color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
  readonly size?: 'small' | 'medium' | 'large';
  readonly style?: React.CSSProperties;
  readonly disabled?: boolean;
  readonly disableRipple?: boolean;
  readonly herf?: string;
  readonly onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>>;
  readonly children?: React.ReactNode;
};