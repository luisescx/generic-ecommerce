import Base from "@ui/Base";
import Card from "@ui/Card";
import { productsMockList } from "mocks/productsMock";
import Head from "next/head";

export default function Home() {
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
