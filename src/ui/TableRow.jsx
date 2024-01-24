function TableRow() {
  return (
    <div className="grid grid-cols-3 place-items-center uppercase text-xs font-normal py-2">
      <p className="text-center">#1</p>
      <p className="text-center">14.000</p>

      <div className="bg-danger-500 rounded text-white px-2 py-1">Deadly</div>
    </div>
  );
}

export default TableRow;
