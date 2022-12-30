/* eslint-disable prettier/prettier */
import { IFavoriteState } from "@store/modules/favorites/types";
import { IReducersState } from "@store/modules/rootReducer";
import Base from "@ui/Base";
import Card from "@ui/Card";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Favorites() {
  const { products } = useSelector<IReducersState, IFavoriteState>(
    (state) => state.favorite
  );

  return (
    <>
      <Head>
        <title>Favorites | Online Shopping</title>
      </Head>

      <Base>
        <main>
          <div className="h-full border-l-4 border-blue-700">
            <h4 className="mb-6 ml-2">Favorites products</h4>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] gap-4">
            {products.map((product) => (
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
