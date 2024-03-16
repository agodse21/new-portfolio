import {
  Badge,
  HStack,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";
import { WorkExprienceArray } from "../../lib/utils";

export default function WorkExprience() {
  return (
    <div id="experience" className="p-20 w-full">
      <span
        className="text-4xl font-semibold text-primary"
        style={{
          fontFamily: "Inria Serif",
        }}
      >
        Work Experience
      </span>
      <h1
        className="text-4xl mt-2 uppercase font-medium text-secondary"
        style={{
          fontFamily: "Paprika",
        }}
      >
        My Professional Journey
      </h1>
      <div className="w-[80%] m-auto mt-10">
        <Stepper
          index={3}
          colorScheme="gray"
          size="sm"
          orientation="vertical"
          height="200px"
          gap="0"
          className="w-full"
        >
          {WorkExprienceArray.map((work, idx) => (
            <Step className="w-full" key={idx}>
              <StepIndicator></StepIndicator>
              <div className="-m-1 w-full ml-2">
                <HStack justify={"space-between"}>
                  <div className="flex gap-2 items-center">
                    <StepTitle className="text-primary">
                      {work.company}
                    </StepTitle>
                    <Badge className="bg-primary w-[80px] py-0.5 text-center text-primary">
                      {work.badge}
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <StepTitle className="text-primary">
                      {work.start_date}
                    </StepTitle>
                    <span>-</span>
                    <StepTitle className="text-primary">
                      {work.end_date}
                    </StepTitle>
                  </div>
                </HStack>
                <span className="text-primary text-lg font-semibold">
                  {work.position}
                </span>
                <StepDescription
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {work.desc}
                </StepDescription>
              </div>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
