import './container.scss';

interface ContainerProps {
  className?: string | undefined;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
