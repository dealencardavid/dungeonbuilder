import Container from "../../ui/Container";
import GoalContainer from "../../ui/GoalContainer";
import InputNumber from "../../ui/InputNumber";

import { TfiClose } from "react-icons/tfi";
import { FiPlus, FiX } from "react-icons/fi";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

import Btn from "../../ui/Btn";
import Table from "../../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { addParty, updateParty, updateLevel, deleteParty } from "./partySlice";

function LandingPage() {
  const parties = useSelector((state) => state.party.party);
  const dispatch = useDispatch();

  function onPartyChange(e, index) {
    e.preventDefault();
    const newParty = e.target.value;
    dispatch(updateParty({ index, newParty }));
  }

  function onLevelChange(e, index) {
    e.preventDefault();
    const newLevel = e.target.value;
    dispatch(updateLevel({ index, newLevel }));
  }

  return (
    <>
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center">
        <span className="">
          <GiDiceTwentyFacesTwenty />
        </span>
        Adventure Day
      </h1>
      <Container label="Party">
        {parties.map((party, index) => {
          // const { players, level } = party;
          return (
            <div className="flex justify-between gap-3 items-end" key={index}>
              <InputNumber
                index={index}
                label="Players"
                value={party.players}
                callback={onPartyChange}
              />
              <span className="h-full flex">
                <TfiClose className="self-end mb-2" />
              </span>
              <InputNumber
                index={index}
                label="Level"
                value={party.level}
                callback={onLevelChange}
              />
              {index === 0 ? (
                <Btn callback={() => dispatch(addParty())}>
                  <FiPlus />
                </Btn>
              ) : (
                <Btn
                  color="delete"
                  callback={() => dispatch(deleteParty({ index }))}
                >
                  <FiX />
                </Btn>
              )}
            </div>
          );
        })}
      </Container>
      <GoalContainer />
      <Container label="Encounters">
        <Table />
      </Container>
    </>
  );
}

export default LandingPage;
