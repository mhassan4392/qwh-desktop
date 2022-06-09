import { useEffect, useState } from "react";
import { Dropdown } from "@/components/dropdown";

import { BsChevronDown } from "react-icons/bs";

const Select = ({
  defaultValue = "",
  values = [],
  onchange = () => {},
  className = "",
}) => {
  const [select, setSelect] = useState(defaultValue);

  useEffect(() => {
    setSelect(defaultValue);
    onchange(defaultValue);
  }, [defaultValue]);
  return (
    <Dropdown>
      <Dropdown.Button className={className}>
        {({ isOpen }) => (
          <div
            className={`flex items-center justify-between h-10 p-2 border rounded-lg w-64 hover:border-secondary transition-all duration-300 ${
              isOpen ? "border-secondary" : ""
            }`}
          >
            <span>{select}</span>
            <BsChevronDown
              className={`transform transition-all duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        )}
      </Dropdown.Button>
      <Dropdown.Menu className="w-64 py-2 max-h-64 overflow-y-auto">
        {values.map((value, i) => (
          <Dropdown.MenuItem
            onClick={() => {
              setSelect(value);
              onchange(value);
            }}
            key={i}
            className={`${
              select == value ? "bg-gray-100" : "bg-white"
            } shadow-none hover:bg-gray-100 hover:text-black text-sm`}
          >
            {value}
          </Dropdown.MenuItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
