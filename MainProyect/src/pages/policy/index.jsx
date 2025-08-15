import React from "react";
import singlepage1920 from "../../assets/img/single page image 1920.jpg";
import policybg from "../../assets/img/policybg2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
function Policy() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
          <div className="flex flex-col justify-center gap-5 items-center">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Şərtlər
            </p>
            <svg
              width="55"
              height="4"
              viewBox="0 0 55 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="55" height="4" rx="2" fill="#F36F20" />
            </svg>
          </div>
        </div>
        <div
          className="bg-cover bg-center absolute inset-0 z-[-1]"
          style={{ backgroundImage: `url(${singlepage1920})` }}
        ></div>
        <div className="bg-[#282828D9] absolute inset-0 z-[-1]"></div>
      </div>
      <div className="p-[40px] max-w-[1320px] mx-auto relative">
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{ backgroundImage: `url(${policybg})` }}
        ></div>
        <div>
          <Accordion
            type="multiple"
            collapsible
            className="gap-[20px] flex  flex-col"
          >
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="false"
              value="item-1"
              className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
            >
              <AccordionTrigger className="hover:text-primary transtion-all duration-300 cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionTrigger>
              <AccordionContent asChild className="text-[#707070]">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#707070] overflow-hidden"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nunc felis ultrices vitae iaculis at eu. Tincidunt
                  pellentesque lobortis enim morbi nulla tortor tristique in.
                  Massa semper quis imperdiet cursus egestas. Nulla eget purus
                  et phasellus vehicula feugiat. Quam dictumst diam id tincidunt
                  est.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="false"
              value="item-2"
              className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
            >
              <AccordionTrigger className="hover:text-primary transtion-all duration-300 cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionTrigger>
              <AccordionContent className="text-[#707070]">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#707070] overflow-hidden"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nunc felis ultrices vitae iaculis at eu. Tincidunt
                  pellentesque lobortis enim morbi nulla tortor tristique in.
                  Massa semper quis imperdiet cursus egestas. Nulla eget purus
                  et phasellus vehicula feugiat. Quam dictumst diam id tincidunt
                  est.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="false"
              value="item-3"
              className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
            >
              <AccordionTrigger className="hover:text-primary transtion-all duration-300 cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionTrigger>
              <AccordionContent className="text-[#707070]">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#707070] overflow-hidden"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nunc felis ultrices vitae iaculis at eu. Tincidunt
                  pellentesque lobortis enim morbi nulla tortor tristique in.
                  Massa semper quis imperdiet cursus egestas. Nulla eget purus
                  et phasellus vehicula feugiat. Quam dictumst diam id tincidunt
                  est.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="false"
              value="item-4"
              className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
            >
              <AccordionTrigger className="hover:text-primary transtion-all duration-300 cursor-pointer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionTrigger>
              <AccordionContent className="text-[#707070]">
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#707070] overflow-hidden"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nunc felis ultrices vitae iaculis at eu. Tincidunt
                  pellentesque lobortis enim morbi nulla tortor tristique in.
                  Massa semper quis imperdiet cursus egestas. Nulla eget purus
                  et phasellus vehicula feugiat. Quam dictumst diam id tincidunt
                  est.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Policy;
