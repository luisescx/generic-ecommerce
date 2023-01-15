import { cartInitialFetch } from "@store/modules/cart/actions";
import { initialFetch } from "@store/modules/favorites/reducer";
import Container from "@ui/Container";
import Menu from "@ui/Menu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataFetch = async () => {
      await Promise.all([
        dispatch(initialFetch()),
        dispatch(cartInitialFetch())
      ]);
    };

    getDataFetch();
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col">
      <Container>
        <Menu />

        <div className="mt-6 pb-20">{children}</div>

        <footer className="absolute bottom-0 left-0 right-0 mt-8 border-t border-gray-200">
          <div className="p-4 text-center text-gray-700">
            © 2023 Copyright: Online Shop
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default Base;
