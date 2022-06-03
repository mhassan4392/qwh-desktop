const Table = ({ cols = [], items = [] }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#f4f6f9] text-center h-10 text-sm">
          {cols.map((col, i) => (
            <td key={i}>{col.header}</td>
          ))}
        </tr>
      </thead>
      <tbody className="text-xs text-center">
        {items.map((item, i) => (
          <tr key={i} className="h-10 border-b">
            {cols.map((col, i) => (
              <td key={i}>
                {col.render && col.render({ item })}
                {!col.render && item[col.value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
