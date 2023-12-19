import image1 from "@/assets/images/event-1.jpg";
import image2 from "@/assets/images/event-2.jpg";
import image3 from "@/assets/images/event-3.jpg";
import image4 from "@/assets/images/event-4.jpg";
import image5 from "@/assets/images/event-5.jpg";
import image6 from "@/assets/images/event-6.jpg";

interface Event {
  image: string;
  title: string;
  subTitle: string;
  description: string;
}

const Events: Event[] = [
  {
    image: image1,
    title: "Tech Summit 2023",
    subTitle: "The Future of Technology",
    description:
      "Explore the latest advancements in technology and discover what the future holds for the IT industry.",
  },
  {
    image: image2,
    title: "Web Development Workshop",
    subTitle: "Master the Art of Web Development",
    description:
      "Join us for an intensive workshop on web development, covering the latest tools and best practices.",
  },
  {
    image: image3,
    title: "AI and Machine Learning Conference",
    subTitle: "Unlocking the Potential of AI",
    description:
      "Dive into the world of artificial intelligence and machine learning, with expert speakers and hands-on sessions.",
  },
  {
    image: image4,
    title: "Cybersecurity Forum",
    subTitle: "Securing the Digital Frontier",
    description:
      "Discuss the latest trends in cybersecurity and learn how to protect your systems from evolving threats.",
  },
  {
    image: image5,
    title: "DevOps Expo 2023",
    subTitle: "Streamlining Software Development",
    description:
      "Explore the principles of DevOps and discover how it enhances collaboration and efficiency in software development.",
  },
  {
    image: image6,
    title: "Blockchain Symposium",
    subTitle: "Revolutionizing Industries with Blockchain",
    description:
      "Learn about the transformative power of blockchain technology and its impact on various industries.",
  },
  // Add more events as needed
];

export default Events;
