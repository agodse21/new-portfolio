import { Avatar, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { TestimonialsArray } from "../../lib/utils";

export default function Testimonials() {
  const [count, setCount] = useState(0);
  const currentTestimonial = TestimonialsArray[count];
  return (
    <div id="testimonials" className="p-20 w-full">
      <span
        className="text-4xl font-semibold text-primary"
        style={{
          fontFamily: "Inria Serif",
        }}
      >
        Testimonials
      </span>
      <h1
        className="text-4xl mt-2 uppercase font-medium text-secondary"
        style={{
          fontFamily: "Paprika",
        }}
      >
        peoples speaking about me
      </h1>

      <div className="flex gap-5 justify-center p-10 items-end">
        <div
          className="w-[50%] flex items-center  h-60 gap-8 rounded-xl p-8 shadow-lg bg-primary"
          style={{
            border: "1px solid #06223f",
          }}
        >
          <Avatar
            size="xl"
            name="Christian Nwamba"
            className="shadow-lg"
            src={currentTestimonial.avatar}
          />

          <div className="flex flex-col  gap-5">
            <p className="text-justify text-primary text-[15px] font-medium">
              <q>{currentTestimonial.testimonial}</q>
            </p>
            <span
              style={{
                fontFamily: "Paprika",
              }}
              className="text-primary text-lg font-semibold"
            >
              {currentTestimonial.name}
            </span>
          </div>
        </div>
        <VStack className="-mb-5">
          {TestimonialsArray.map((_, i) => (
            <span
              key={i}
              className="size-3 rounded-[50%] hover:scale-125 duration-200 cursor-pointer"
              style={{
                backgroundColor: count === i ? "#06223f" : "#bdc7d1",
              }}
              onClick={() => setCount(i)}
            ></span>
          ))}
        </VStack>
      </div>
    </div>
  );
}
