import * as React from "react";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
 return (
  <>
   <div className="my-8 w-full px-8">
    <Carousel className="shadow">
     <CarouselContent>
      <CarouselItem>
       <div className="border dark:bg-destructive flex flex-col space-y-4 h-52 w-full rounded-md items-center justify-center">
        <h1 className="text-center">1</h1>
        <Button>Watch Now!</Button>
       </div>
      </CarouselItem>
      <CarouselItem>
       <div className="border dark:bg-destructive flex flex-col space-y-4 h-52 w-full rounded-md items-center justify-center">
        <h1 className="text-center">2</h1>
        <Button>Watch Now!</Button>
       </div>
      </CarouselItem>
      <CarouselItem>
       <div className="border dark:bg-destructive flex flex-col space-y-4 h-52 w-full rounded-md items-center justify-center">
        <h1 className="text-center">3</h1>
        <Button>Watch Now!</Button>
       </div>
      </CarouselItem>
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </div>
  </>
 );
};

export default Hero;
