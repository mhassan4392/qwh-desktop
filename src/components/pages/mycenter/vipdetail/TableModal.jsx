import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
import Table from "../Table";

import vip_medal from "@/assets/images/pages/mycenter/myvip/vip_medal.webp";

const TableModal = ({ open, onClose }) => {
  const cols = [
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
  ];

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
    <Modal
      open={open}
      containerClass="bg-black bg-opacity-50"
      onOutsideClick={onClose}
      size="lg"
    >
      <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white relative px-5 flex items-center justify-center font-semibold">
        <div className="absolute inset-0 flex items-center justify-end px-3">
          <VscChromeClose
            className="text-2xl cursor-pointer transform hover:rotate-180 transition-all duration-300"
            onClick={() => {
              onClose();
            }}
          />
        </div>
        云游棋牌
      </Modal.Header>
      <Modal.Body className="py-8 px-6 space-y-8">
        <div className="cursor-pointer" onClick={onClose}>
          <Table cols={cols} items={items} className="vip-table modal-table" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TableModal;
