import Head from "next/head";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "../styles/home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | pedro.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.homeSection}>
          <span>👏 Hello, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get full access to all the news <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img
          src="/images/bgimg.svg"
          alt="Pedro-coding"
          className={styles.bgImage}
        />
      </main>
    </>
  );
}

// Static Home

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1ImrOKKImYZXlCNw9rdi83do");

  const product = {
    princeId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      name: "Pedro",
      product,
    },
    revalidate: 60 * 60 * 24, // 24h
  };
};
