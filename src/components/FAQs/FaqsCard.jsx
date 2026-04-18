import React, { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function FaqsCard(props) {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className={`mt-0 overflow-hidden border-b transition-all duration-300 ${
        state ? "border-gold/30" : "border-gray-200"
      }`}
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4
        className={`cursor-pointer py-6 flex items-center justify-between font-sans text-base transition-colors duration-300 ${
          state ? "text-gold font-medium" : "text-brand-black/80 hover:text-gold"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className="font-serif text-gold/40 text-sm">{String(idx + 1).padStart(2, '0')}</span>
          {faqsList.q}
        </span>
        <span
          className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            state
              ? "bg-gold text-brand-black rotate-0"
              : "bg-gray-100 text-gray-400 rotate-0"
          }`}
        >
          {state ? (
            <FaMinus className="h-3 w-3" />
          ) : (
            <FaPlus className="h-3 w-3" />
          )}
        </span>
      </h4>
      <div
        ref={answerElRef}
        className="duration-500 ease-out"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="pl-9">
          <p className="text-gray-500 font-sans text-sm leading-relaxed">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqsCard;
