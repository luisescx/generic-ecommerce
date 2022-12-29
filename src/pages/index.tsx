import { initialFetch } from "@store/modules/favorites/actions";
import { IFavoriteState } from "@store/modules/favorites/types";
import { IReducersState } from "@store/modules/rootReducer";
import Base from "@ui/Base";
import Card from "@ui/Card";
import { productsMockList } from "mocks/productsMock";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { isInitialDataFetch } = useSelector<IReducersState, IFavoriteState>(
    (state) => state.favorite
  );

  useEffect(() => {
    if (!isInitialDataFetch) {
      dispatch(initialFetch());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Products | Online Shopping</title>
      </Head>

      <Base>
        <main>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] gap-4">
            {productsMockList.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        </main>
      </Base>
    </>
  );
}
