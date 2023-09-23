import Home from "../components/homeComponents/Home";
import BestSelling from "../components/homeComponents/BestSelling";
import { HomePageProps } from "../types/Types";

export default function HomePage({ handleCart, cart }: HomePageProps) {
  return (
    <>
      <div className="mt-[80px] mx-auto max-w-[1200px] p-6">
        <BestSelling />
        <Home handleCart={handleCart} cart={cart} />
      </div>
    </>
  );
}
