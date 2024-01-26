import { FiPlus, FiX } from "react-icons/fi";
import Btn from "../../ui/Btn";

function EncounterMonster({ monster }) {
  const { name, type, xp, challenge_rating } = monster.details;

  return (
    <div className="flex items-end justify-between">
      {/* Monster's data */}
      <div className="flex flex-col">
        <p className="text-mainOrange-500 text-xs font-extralight">{type}</p>
        <p className="text-black text-sm font-semibold">{name}</p>
        <p className="text-black text-xs font-light">
          CR: <span className="font-medium">{challenge_rating}</span> - XP:{" "}
          <span className="font-medium">{xp}</span>
        </p>
      </div>
      <div className="flex gap-1">
        <Btn size="small">
          <FiPlus />
        </Btn>
        <input
          className="w-12 bg-white px-1 text-sm text-center shadow-btn rounded-md border border-black focus:outline-none"
          type="number"
          min={0}
          id="monsterQtd"
          value={monster.quantity}
          onChange={() => console.log("im changed")}
        />
        {/* <Btn size="small">
              <FiMinus />
            </Btn> */}

        <Btn size="small" color="delete">
          <FiX />
        </Btn>
      </div>
    </div>
  );
}

export default EncounterMonster;
