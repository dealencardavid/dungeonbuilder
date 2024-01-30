import { useSelector } from "react-redux";
import { getDifficulty } from "../utilities/helpers";

function TableRow({ encounter }) {
  const { xpThreshold } = useSelector((state) => state.party);

  const containerStyle = getDifficulty(encounter.xpAdjusted, xpThreshold);

  return (
    <div className="grid grid-cols-3 place-items-center uppercase text-xs font-normal py-2">
      <p className="text-center">#{encounter.id + 1}</p>
      <p className="text-center">{encounter.xpAdjusted}</p>

      <div
        className={`${containerStyle.style} rounded text-white px-2 py-1 border border-black`}
      >
        {containerStyle.label}
      </div>
    </div>
  );
}

export default TableRow;
