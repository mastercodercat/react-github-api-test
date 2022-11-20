interface RowProps {
  className?: string;
  children: React.ReactNode;
}

const Row = ({ className, children }: RowProps) => {
  return <div className={`row ${className}`}>{children}</div>;
};

Row.defaultProps = {
  className: "",
};

export default Row;
