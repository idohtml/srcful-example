import image1 from "@/assets/images/event-1.jpg";
import image2 from "@/assets/images/event-2.jpg";
import image3 from "@/assets/images/event-3.jpg";

interface Step {
  image?: HTMLImageElement;
  title: string;
  text: string;
}

const Steps: Step[] = [
  {
    image: image1,
    title: "Step 1: Purchase and Install",
    text: "Begin your eco-friendly mining journey by purchasing our revolutionary system. Upon arrival, follow our simple installation guide to seamlessly connect the device to your solar panel generator. It's a hassle-free setup designed with your convenience in mind.",
  },
  {
    image: image2,
    title: "Step 2: Integration with Solar Power",
    text: "Once connected, our system harmonizes with your solar panel generator, tapping into the limitless power of the sun. Witness a fusion of cutting-edge technology and sustainable energy as your mining operations become not only efficient but also environmentally conscious.",
  },
  {
    image: image3,
    title: "Step 3: Optimize Efficiency and Profits",
    text: "Experience the ultimate synergy of efficiency and profitability. Our system optimizes the energy from your solar panels, ensuring every watt is utilized for maximum mining output. Embrace a greener future while maximizing your crypto gains effortlessly.",
  },
];

export default Steps;
