import Hero from "@/assets/images/hero.png";
import H1 from "@/components/typography/H1";
import Text from "@/components/typography/Text";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <div>
          <H1 className="flex flex-col capitalize mb-12 text-center md:text-left mt-5 md:mt-0">
            <span>Your energy</span>
            <span>Your power</span>
          </H1>
          <Text className="w-full md:w-4/5 mb-12 text-center md:text-left">
            Connect our product to your solar panel generator for a seamless and
            eco-friendly mining solution, maximizing both efficiency and
            profitability.
          </Text>
          <Button className="w-full bg-green-400 md:w-fit">Explore</Button>
        </div>
        <img src={Hero} alt="" />
      </section>
    </main>
  );
}
