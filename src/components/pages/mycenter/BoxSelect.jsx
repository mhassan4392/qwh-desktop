import { useState } from "react";

const BoxSelect = ({ values, defaultValue = "", onChange = () => {} }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex items-center">
      {values.map((v, i) => (
        <div
          onClick={() => {
            setValue(v);
            onChange(v);
          }}
          key={i}
          className={`w-14 h-10 flex items-center justify-center border cursor-pointer hover:text-secondary hover:border-secondary text-sm ${
            i == 0 ? "rounded-l-md" : ""
          } ${i == values.length - 1 ? "rounded-r-md" : ""} ${
            value == v ? "text-secondary border-secondary" : ""
          }`}
        >
          {v}
        </div>
      ))}
    </div>
  );
};

export default BoxSelect;
