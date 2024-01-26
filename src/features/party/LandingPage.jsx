import Container from "../../ui/Container";
import GoalContainer from "../../ui/GoalContainer";
import InputNumber from "../../ui/InputNumber";

import { TfiClose } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

import Btn from "../../ui/Btn";
import Table from "../../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { addParty } from "./partySlice";

function LandingPage() {
  const parties = useSelector((state) => state.party.party);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center">
        <span className="">
          <GiDiceTwentyFacesTwenty />
        </span>
        Adventure Day
      </h1>
      <Container label="Party">
        {parties.map((party, index) => (
          <div className="flex justify-between gap-3 items-end" key={index}>
            <InputNumber label="Players" value={party.players} />
            <span className="h-full flex">
              <TfiClose className="self-end mb-2" />
            </span>
            <InputNumber label="Level" value={party.level} />
            <Btn callback={() => dispatch(addParty())}>
              <FiPlus />
            </Btn>
          </div>
        ))}
      </Container>
      <GoalContainer />
      <Container label="Encounters">
        <Table />
      </Container>
    </>
  );
}

export default LandingPage;
