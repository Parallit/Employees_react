import { FC, ReactNode } from 'react';

interface CustomTitleProps {
  children: ReactNode;
  $color?: string;
  $fontSize?: string;
  $textTransform?: string;
  $margin?: string;
  $textAlign?: string;
  $padding?: string;
  className?: string;
}

export const CustomTitle: FC<CustomTitleProps> = ({
  children,
  $color,
  $fontSize,
  $textTransform,
  $margin,
  $textAlign,
  $padding,
  className,
}) => {
  return (
    <div className={className}>
      <h1>{children}</h1>
    </div>
  );
};
