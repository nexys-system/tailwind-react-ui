// move to headless props
export interface WrapperProps {
  label?: string;
  info?: string;
  children: JSX.Element | JSX.Element[];
  errors?: string[];
}
