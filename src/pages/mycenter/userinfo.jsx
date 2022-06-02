const UserInfo = () => {
  return (
    <div className="rounded h-full flex gap-5">
      <div className="rounded basis-4/5 gap-5 flex flex-col">
        <div className="bg-white rounded h-[30%]"></div>
        <div className="bg-white rounded h-[30%]"></div>
        <div className="bg-white rounded grow"></div>
      </div>
      <div className="basis-1/5 flex flex-col">
        <div className="bg-white h-[40%] rounded mb-5"></div>
        <div className="bg-white grow rounded"></div>
      </div>
    </div>
  );
};

export default UserInfo;
