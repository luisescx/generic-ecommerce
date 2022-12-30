import { ICartState } from "@store/modules/cart/types";
import { IReducersState } from "@store/modules/rootReducer";
import Base from "@ui/Base";
import CartCard from "@ui/CartCard";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Cart() {
  const { products } = useSelector<IReducersState, ICartState>(
    (state) => state.cart
  );

  return (
    <>
      <Head>
        <title>Cart | Online Shopping</title>
      </Head>

      <Base>
        <main>
          <div className="h-full border-l-4 border-blue-700">
            <h4 className="mb-6 ml-2">Cart</h4>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] gap-4">
            {products.map((product) => (
              <CartCard key={product.id} product={{ ...product }} />
            ))}
          </div>
        </main>
      </Base>
    </>
  );
}
