import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import Text from "@/components/typography/Text";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import Events from "@/data/Events";
import Steps from "@/data/Steps";

// Images
import Hero from "@/assets/images/hero.png";

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
          <Button className="w-full bg-green-400 text-black md:w-fit hover:bg-green-600">
            Explore
          </Button>
        </div>
        <img src={Hero} alt="Srcful bringing the tech-world together" />
      </section>
      <section className="my-24">
        <H2 className="text-center mb-12">Our upcoming events for 2024</H2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {Events.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-evenly gap-2 md:flex-row">
        <p className="text-9xl">🗞️</p>
        <div className="text-center mb-2 md:text-left md:mb-0">
          <H2>Weekly Newsletter</H2>
          <p>Sign-up today to get information about our next upcoming events</p>
        </div>
        <Button
          size="lg"
          className="uppercase text-black bg-green-400 hover:bg-green-600 "
        >
          sign up
        </Button>
      </section>
      <section className="grid place-items-center my-24">
        <H2 className="text-center mb-12">How does it work?</H2>
        {Steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-6 md:flex-row ${
              index === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 my-12 text-center md:text-left">
              <H3>{step.title}</H3>
              <Text>{step.text}</Text>
            </div>
            <div className="w-full md:w-1/2">
              <img
                height={100}
                className="h-52 w-full object-cover rounded-lg"
                src={step.image}
                alt="project image"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
