import { useState } from "react";

const BoxCheckboxes = ({
  values = [],
  onChange = () => {},
  defaultValue = "",
  boxClass = "",
  boxActiveClass = "",
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex items-center space-x-3 flex-wrap" {...rest}>
      {values.map((v, i) => (
        <span
          key={i}
          onClick={() => {
            setValue(v);
            onChange(v);
          }}
          className={`border border-light rounded w-28 h-10 px-2 truncate flex items-center justify-center cursor-pointer ${
            v == value
              ? "border-secondary text-secondary " + boxActiveClass
              : ""
          } ${boxClass}`}
        >
          {v}
        </span>
      ))}
    </div>
  );
};

export default BoxCheckboxes;
