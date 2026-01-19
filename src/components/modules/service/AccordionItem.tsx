import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface AccordionItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
     <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          >
    <div className="border cursor-pointer bg-white border-gray-200 hover:border-[#64D3F8] rounded-lg  transition-all duration-300 ease-in-out">
      <button
        onClick={onToggle}
        className="w-full transition-all duration-300   cursor-pointer flex items-center justify-between py-5 px-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-base md:text-lg font-semibold text-[#002047] pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-[#65758B] shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-[#65758B] text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
    </motion.div>
  );
};