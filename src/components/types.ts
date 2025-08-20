export interface BaseComponentProps {
  disabled?: boolean;
  backgroundColor?: string;
  className?: string;
}

export interface ButtonProps extends BaseComponentProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
}

export interface LabelProps extends BaseComponentProps {
  text: string;
  htmlFor?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface TextProps extends BaseComponentProps {
  content: string;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold' | 'light';
  color?: string;
}

export interface TableProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface TableHeaderProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface TableRowProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface TableCellProps extends BaseComponentProps {
  children: React.ReactNode;
  header?: boolean;
}

export interface TableFooterProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface DropdownProps extends BaseComponentProps {
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface RadioButtonProps extends BaseComponentProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

export interface ImgProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

export interface HeroImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  height?: string;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
}
