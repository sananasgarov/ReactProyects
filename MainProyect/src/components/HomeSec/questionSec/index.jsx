import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

function QuestionSec() {
  return (
    <div className="p-[40px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-wrap">
        <p className="text-[#282828] text-[36px]">Ən çox verilən suallar</p>
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
      <div className="w-[800px] mx-auto">
        <Accordion
          type="multiple"
          collapsible
          className="gap-[20px] flex flex-col"
        >
          <AccordionItem
            value="item-1"
            className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
          >
            <AccordionTrigger>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                felis ultrices vitae iaculis at eu. Tincidunt pellentesque
                lobortis enim morbi nulla tortor tristique in. Massa semper quis
                imperdiet cursus egestas. Nulla eget purus et phasellus vehicula
                feugiat. Quam dictumst diam id tincidunt est.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
          >
            <AccordionTrigger>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                felis ultrices vitae iaculis at eu. Tincidunt pellentesque
                lobortis enim morbi nulla tortor tristique in. Massa semper quis
                imperdiet cursus egestas. Nulla eget purus et phasellus vehicula
                feugiat. Quam dictumst diam id tincidunt est.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
          >
            <AccordionTrigger>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                felis ultrices vitae iaculis at eu. Tincidunt pellentesque
                lobortis enim morbi nulla tortor tristique in. Massa semper quis
                imperdiet cursus egestas. Nulla eget purus et phasellus vehicula
                feugiat. Quam dictumst diam id tincidunt est.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="text-[black] text-[20px] border-l-[4px] border-b-[0px] transition-all duration-400 border-primary shadow-lg p-[20px]"
          >
            <AccordionTrigger>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc
                felis ultrices vitae iaculis at eu. Tincidunt pellentesque
                lobortis enim morbi nulla tortor tristique in. Massa semper quis
                imperdiet cursus egestas. Nulla eget purus et phasellus vehicula
                feugiat. Quam dictumst diam id tincidunt est.
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default QuestionSec;
