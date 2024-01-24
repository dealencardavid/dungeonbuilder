import { FiPlus } from "react-icons/fi";
import Btn from "./Btn";
import { useMonstersDetails } from "../features/useMonsterDetails";
// import Loader from "./Loader";

function ModalMonster({ name }) {
  const { monsterDetails, isLoading } = useMonstersDetails(name);

  if (isLoading) return <div className="py-2">Loading...</div>;

  return (
    <div className="grid grid-cols-[1fr_1fr_48px] py-2 items-end">
      <div className="flex flex-col">
        <p className="text-black text-sm font-medium">{monsterDetails.name}</p>
        <p className="text-mainOrange-500 text-xs font-light capitalize">
          {monsterDetails.type}
        </p>
      </div>
      <div>
        <p className="text-black text-xs font-light">
          CR:{" "}
          <span className="font-medium">{monsterDetails.challenge_rating}</span>
        </p>
        <p className="text-black text-xs font-light">
          XP: <span className="font-medium">{monsterDetails.xp}</span>
        </p>
      </div>
      <Btn size="light" color="light">
        <FiPlus />
      </Btn>
    </div>
  );
}

export default ModalMonster;
