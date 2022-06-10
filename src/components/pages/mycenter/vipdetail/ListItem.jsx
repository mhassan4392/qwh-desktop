const ListItem = ({ no, children }) => {
  return (
    <div className="flex space-x-2">
      <div className="bg-secondary w-4 h-4 rounded-full flex items-center justify-center text-xs text-white shrink-0">
        {no}
      </div>
      <p className="text-sm">{children}</p>
    </div>
  );
};

export default ListItem;
