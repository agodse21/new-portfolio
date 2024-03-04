import { Button, HStack, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { typeWritterStrings } from "../../lib/utils";

export default function Home() {
  return (
    <div
      className="h-[100vh] relative w-full grid mt-0"
      id="home"
      style={{
        gridTemplateColumns: "65% 35%",
      }}
    >
      <div className="flex flex-col justify-end items-end">
        <VStack
          style={{
            height: "50%",
            width: "90%",
          }}
          align={"start"}
          spacing={5}
        >
          <p className="text-4xl font-[cursive]  text-[#06223f] font-bold">
            Hi,
          </p>
          <HStack align={"end"}>
            <span className="inline-flex  text-[#06223f]  text-4xl  font-bold">
              I'm a
            </span>
            <span className="inline-flex capitalize  text-[#06223f]  text-4xl  font-bold">
              <Typewriter
                options={{
                  strings: typeWritterStrings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </HStack>
          <HStack justify={"end"} className="w-[60%] mt-7">
            <a href="#contact" className="text-primary">
              <Button
                border="2px"
                borderColor="#06223f"
                variant={"outline"}
                style={{
                  borderRadius: "12px 2px 30px 8px",
                }}
                className="py-6 w-32  hover:scale-110 duration-200"
              >
                Hire Me
              </Button>
            </a>
          </HStack>
        </VStack>
      </div>
      <img
        className="absolute w-[30%] bottom-0 right-[23%]"
        src="https://codeaprogram-portfolio.web.app/assets/person.7931d41d.png"
        alt="home"
      />

      <div
        className="w-full h-full"
        style={{
          backgroundImage: "linear-gradient(180deg,#B6CCF5 .48%,#D5E3F1 100%)",
        }}
      >
        <div className="rotate-90 absolute top-[40%] right-[-8%]">
          <span className="text-[#EAF2FA] text-[3.75rem] uppercase font-extrabold tracking-wide">
            Amol
          </span>
          <span className="text-[#06223f] text-[3.75rem] ml-3 uppercase font-extrabold tracking-wide">
            Godse
          </span>
        </div>
      </div>
    </div>
  );
}
