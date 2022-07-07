
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Admit(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current
    });
  
    return (
      <div className="bg-gray-200 p-6" ref={componentRef}>
        <button
          type="button"
          className="bg-gray-500 border border-gray-500 p-2 mb-4"
          onClick={handlePrint}
        >
          {" "}
          Print Resume{" "}
        </button>
        
      </div>
    );
  
}
