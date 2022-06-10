import Spinner1 from "../../spinner/Spinner1";

const Loader = ({ open }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center z-30">
          <Spinner1 />
        </div>
      )}
    </>
  );
};

export default Loader;
