import { useState } from "react";
import Table from "../Table";

import vip_medal from "@/assets/images/pages/mycenter/myvip/vip_medal.webp";

import "./VipTable.css";
import VipTable from "../VipTable";

const SectionTwo = () => {
  const [cols] = useState([
    { header: "VIP等级", value: "one" },
    {
      header: "image",
      value: "two",
      headerRender: ({ _v }) => (
        <img src={vip_medal} className="w-10 mx-auto" alt="" />
      ),
      render: ({ value }) => <span className="text-primary">{value}</span>,
    },
    { header: "VIP1", value: "three" },
    { header: "VIP2", value: "four" },
    { header: "VIP3", value: "five" },
    {
      header: "VIP4",
      value: "six",
    },
    { header: "VIP5", value: "seven" },
    { header: "VIP6", value: "eight" },
    { header: "VIP7", value: "nine" },
    { header: "VIP8", value: "ten" },
    { header: "VIP9", value: "eleven" },
    { header: "VIP10", value: "ten" },
  ]);

  const items = [
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
    {
      one: "有效投注要求",
      two: "0",
      three: "1000",
      four: "2000",
      five: "60000",
      six: "10000",
      seven: "15000",
      eight: "20000",
      nine: "25000",
      ten: "30000",
      eleven: "35000",
      twelve: "40000",
    },
  ];
  return (
    <div className="p-4">
      <h3 className="mb-4">
        <span className="font-semibold">VIP</span>每周红包
      </h3>

      <div>
        <Table cols={cols} items={items} className="vip-table" />
      </div>
    </div>
  );
};

export default SectionTwo;
