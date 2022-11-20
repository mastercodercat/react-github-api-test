interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children?: React.ReactNode;
}

const Col = ({ xs, sm, md, lg, xl, className, children }: ColProps) => {
  return (
    <div
      className={`col-${xs} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${className}`}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  className: "",
};

export default Col;
