import TableRow from "./TableRow";

function Table({ encounters }) {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="grid grid-cols-3 place-items-center uppercase text-xs py-2 font-medium border-b-[0.5px] border-black">
        <p className="text-center grow">Encounter</p>
        <p className="text-center grow">Xp</p>
        <p className="text-center grow">Difficulty</p>
      </div>
      {/* Content */}
      {encounters.map((encounter) => (
        <TableRow key={encounter.id} encounter={encounter} />
      ))}
    </div>
  );
}

export default Table;
