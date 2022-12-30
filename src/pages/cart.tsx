import { ICartState } from "@store/modules/cart/types";
import { IReducersState } from "@store/modules/rootReducer";
import Base from "@ui/Base";
import CartCard from "@ui/CartCard";
import CartTotalCard from "@ui/CartTotalCard";
import Head from "next/head";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { products } = useSelector<IReducersState, ICartState>(
    (state) => state.cart
  );

  const totalValue = useMemo(() => {
    return products.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
  }, [products]);

  const itemsTotalQuantity = useMemo(() => {
    return products.reduce((prev, cur) => prev + cur.quantity, 0);
  }, [products]);

  const productsTotalQuantity = useMemo(() => {
    return products.length;
  }, [products]);

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

          {!!products.length && (
            <div className="lg:flex lg:flex-row lg:gap-4">
              <div className="mb-8 lg:mb-0 lg:basis-1/4">
                <CartTotalCard
                  totalValue={totalValue}
                  itemsTotalQuantity={itemsTotalQuantity}
                  productsTotalQuantity={productsTotalQuantity}
                />
              </div>

              <div className="basis-10/12">
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] gap-4">
                  {products.map((product) => (
                    <CartCard key={product.id} product={{ ...product }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </Base>
    </>
  );
}
