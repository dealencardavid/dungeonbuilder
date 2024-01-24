import { GiDeathZone } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import Btn from "./Btn";
import { FiPlus } from "react-icons/fi";

function AppLayout({ children }) {
  return (
    <div className=" h-dvh bg-mainBlue-500 flex">
      <div className="h-full bg-mainBege-500 rounded-r-3xl shadow-page flex flex-col gap-8 px-3 py-6 grow">
        {children}
      </div>
      <div className="min-w-12 h-full flex flex-col-reverse gap-2 items-center py-6">
        <Btn>
          <GiSwordsEmblem />
        </Btn>
        <Btn>
          <GiDeathZone />
        </Btn>
        <Btn>
          <FiPlus />
        </Btn>
      </div>
    </div>
  );
}

export default AppLayout;
