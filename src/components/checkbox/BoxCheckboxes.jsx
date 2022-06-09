import { useState } from "react";

const BoxCheckboxes = ({
  values = [],
  onChange = () => {},
  defaultValue = "",
  boxClass = "",
  boxActiveClass = "",
  noActiveClass = false,
  render = false,
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
            v == value && !noActiveClass
              ? "border-secondary text-secondary icon-select-bg " +
                boxActiveClass
              : ""
          } ${typeof boxClass == "function" ? boxClass(v) : boxClass}`}
        >
          {render ? render(v) : v}
        </span>
      ))}
    </div>
  );
};

export default BoxCheckboxes;
