type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto w-full max-w-screen-xl px-9">{children}</div>
);

export default Container;
