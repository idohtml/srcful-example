import React from "react";
import { Badge } from "./ui/badge";
import H3 from "./typography/H3";
import { Button } from "./ui/button";

interface CardProps {
  event: {
    image: string;
    title: string;
    subTitle: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ event }) => {
  return (
    <div className="border rounded-lg flex flex-col overflow-hidden h-full shadow-md hover:shadow-lg">
      <img
        height={30}
        className="object-cover max-h-52"
        src={event.image}
        alt={event.title}
      />
      <div className="p-4 flex-1 text-center md:text-left">
        <Badge className="my-4">{event.subTitle}</Badge>
        <H3>{event.title}</H3>
        <p>{event.description}</p>
      </div>
      <div className="p-4">
        <Button className="text-black bg-green-400 hover:bg-green-600 w-full md:w-fit">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Card;
