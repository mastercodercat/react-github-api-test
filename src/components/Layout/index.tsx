import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className="container">
      <Helmet title={title} />
      {children}
    </div>
  );
};

export default Layout;
