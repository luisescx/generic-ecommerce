import Container from "@ui/Container";
import Menu from "@ui/Menu";

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => (
  <section className="relative flex min-h-screen flex-col">
    <Container>
      <Menu />

      <div className="mt-6 pb-20">{children}</div>

      <footer className="absolute bottom-0 mt-8 w-full max-w-screen-xl border-t border-gray-200">
        <div className="p-4 text-center text-gray-700">
          © 2023 Copyright: Online Shop
        </div>
      </footer>
    </Container>
  </section>
);

export default Base;
