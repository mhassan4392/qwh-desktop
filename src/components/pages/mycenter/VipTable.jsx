const VipTable = ({ cols = [], items = [], className = "" }) => {
  return (
    // <table className={`w-full ${className}`}>
    //   <thead>
    //     <tr className="bg-[#f4f6f9] text-center h-10 text-sm">
    //       {cols.map((col, i) => (
    //         <td key={i}>
    //           {col.headerRender && col.headerRender({ value: col.header })}
    //           {!col.headerRender && col.header}
    //         </td>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody className="text-xs text-center">
    //     {items.map((item, i) => (
    //       <tr key={i} className="h-10 border-b">
    //         {cols.map((col, i) => (
    //           <td key={i}>
    //             {col.render && col.render({ item, value: item[col.value] })}
    //             {!col.render && item[col.value]}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <div>
      <div className="flex justify-between">
        {cols.map((col, i) => (
          <div key={i} className="grow h-full">
            <div className="text-center">
              {col.headerRender && col.headerRender({ header: col.header })}
              {!col.headerRender && col.header}
            </div>
            {items.map((item, i) => (
              <div key={i} className="">
                {col.render && col.render({ item, value: item[col.value] })}
                {!col.render && item[col.value]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* <div>
        {items.map((item, i) => (
          <div key={i} className="flex">
            {cols.map((col, i) => (
              <div key={i}></div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default VipTable;
