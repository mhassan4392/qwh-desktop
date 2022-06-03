import { Dropdown } from "@/components/dropdown";
import { format } from "date-fns";

import { DateRangePicker } from "react-date-range";

import { BsCalendarWeek } from "react-icons/bs";

const DateRange = ({ onChange, dates }) => {
  return (
    <Dropdown>
      <Dropdown.Button>
        {({ isOpen }) => (
          <div
            className={`flex items-center justify-between h-10 p-2 border rounded-lg w-64 hover:border-secondary transition-all duration-300 ${
              isOpen ? "border-secondary" : ""
            }`}
          >
            <span className="flex items-center space-x-2">
              <span>{format(dates[0].startDate, "yyyy-MM-dd")}</span>
              <span>~</span>
              <span>{format(dates[0].endDate, "yyyy-MM-dd")}</span>
            </span>
            <BsCalendarWeek />
          </div>
        )}
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem closeMenuOnClick={false}>
          <DateRangePicker
            ranges={dates}
            onChange={(item) => onChange([item.selection])}
          />
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DateRange;
