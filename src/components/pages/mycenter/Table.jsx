const Table = ({ cols = [], items = [], className = "" }) => {
  return (
    <table className={`w-full ${className}`}>
      <thead>
        <tr className="bg-[#f4f6f9] text-center h-10 text-sm">
          {cols.map((col, i) => (
            <td key={i}>
              {col.headerRender && col.headerRender({ value: col.header })}
              {!col.headerRender && col.header}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="text-xs text-center">
        {items.map((item, i) => (
          <tr key={i} className="h-10 border-b">
            {cols.map((col, i) => (
              <td key={i}>
                {col.render && col.render({ item, value: item[col.value] })}
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
