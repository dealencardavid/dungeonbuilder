import { useDispatch } from "react-redux";
import {
  decrementMonster,
  deleteMonster,
  incrementMonster,
} from "./encountersSlice";

import { FiMinus, FiPlus, FiX } from "react-icons/fi";

import Btn from "../../ui/Btn";

function EncounterMonster({ monster, encounterId }) {
  const dispatch = useDispatch();
  const {
    name,
    type,
    xp,
    challenge_rating,
    index: monsterIndex,
  } = monster.details;

  function plusMonster() {
    dispatch(incrementMonster({ encounterId, monsterIndex }));
  }

  function minusMonster() {
    dispatch(decrementMonster({ encounterId, monsterIndex }));
  }

  function removeMonster() {
    dispatch(deleteMonster({ encounterId, monsterIndex }));
  }

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
        <Btn size="small" callback={plusMonster}>
          <FiPlus />
        </Btn>
        <input
          className="w-12 bg-white px-1 text-sm text-center shadow-btn rounded-md border border-black focus:outline-none"
          type="number"
          id="monsterQtd"
          value={monster.quantity}
          readOnly
        />

        {monster.quantity === 1 ? (
          <Btn size="small" color="delete" callback={removeMonster}>
            <FiX />
          </Btn>
        ) : (
          <Btn size="small" callback={minusMonster}>
            <FiMinus />
          </Btn>
        )}
      </div>
    </div>
  );
}

export default EncounterMonster;
