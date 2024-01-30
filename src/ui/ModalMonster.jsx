import { useDispatch } from "react-redux";
import { addMonsterToEncounter } from "../features/encounters/encountersSlice";

import { FiPlus } from "react-icons/fi";

import Btn from "./Btn";

function ModalMonster({ name, monsterIndex, encounterId }) {
  const dispatch = useDispatch();

  function addMonster() {
    dispatch(addMonsterToEncounter({ encounterId, monsterIndex }));
  }

  return (
    <div className="grid grid-cols-[1fr_50px] py-2 items-center">
      <div className="flex flex-col">
        <p className="text-black text-sm font-medium">{name}</p>
      </div>

      <Btn size="light" color="light" callback={addMonster}>
        <FiPlus />
      </Btn>
    </div>
  );
}

export default ModalMonster;
