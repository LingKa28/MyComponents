export interface PressableData {
  readonly color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
  readonly borderRadius?: string;
  readonly children: React.ReactNode;
}