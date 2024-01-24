import Btn from "./Btn";
import Container from "./Container";
import GoalContainer from "./GoalContainer";
import { useState } from "react";
import MonstersModal from "./MonstersModal";

import { FiPlus, FiX } from "react-icons/fi";
// import { FiMinus } from "react-icons/fi";

function EncounterPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MonstersModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center">
        <span>#1</span>
        Encounter
      </h1>
      <GoalContainer />
      <Btn size="small" color="light" callback={() => setIsOpen(true)}>
        Add monster
      </Btn>
      <Container label="Encounter">
        {/* Monster */}
        <div className="flex items-end justify-between">
          {/* Monster's data */}
          <div className="flex flex-col">
            <p className="text-mainOrange-500 text-xs font-extralight">
              Elemental
            </p>
            <p className="text-black text-sm font-semibold">Phoenix</p>
            <p className="text-black text-xs font-light">
              CR: <span className="font-medium">16</span> - XP:{" "}
              <span className="font-medium">15.000</span>
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
            />
            {/* <Btn size="small">
              <FiMinus />
            </Btn> */}

            <Btn size="small" color="delete">
              <FiX />
            </Btn>
          </div>
        </div>
      </Container>
    </>
  );
}

export default EncounterPage;
