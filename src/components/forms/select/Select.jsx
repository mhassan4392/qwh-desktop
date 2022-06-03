import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
const Select = ({
  values = [],
  selectText = "Select Value",
  defaultValue = "",
  right,
  buttonClass = "",
  menuClass = "",
  itemClass = "",
  itemActiveClass = "",
  onChange = () => {},
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="relative min-w-max" {...rest}>
      <div
        className={`flex items-center justify-between cursor-pointer p-2 border rounded-lg h-10 hover:border-secondary ${buttonClass} ${
          open ? "border-secondary" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className="grow truncate mr-3">{value ? value : selectText}</span>
        <BsChevronDown
          className={`shrink-0 transform transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute left-0 bg-white min-w-full shadow py-2 ${
              right ? "right-0" : ""
            } ${menuClass}`}
          >
            {values.map((v, i) => (
              <div
                key={i}
                onClick={() => {
                  setValue(v);
                  setOpen(false);
                  onChange(v);
                }}
                className={`p-2 hover:bg-gray-100 cursor-pointer text-sm ${
                  value == v ? "bg-gray-100 " + itemActiveClass : ""
                } ${itemClass}`}
              >
                {v}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
