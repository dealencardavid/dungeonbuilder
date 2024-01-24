import AppLayout from "./ui/AppLayout";
import EncounterPage from "./ui/EncounterPage";
// import LandingPage from "./ui/LandingPage";

// Possibilities
//import { GiCrossedSwords } from "react-icons/gi";
// import { GiDaemonSkull } from "react-icons/gi";
// import { GiDiceEightFacesEight } from "react-icons/gi";
// import { GiMightyForce } from "react-icons/gi";
// import { GiShears } from "react-icons/gi";
// import { GiSwordsPower } from "react-icons/gi";

function App() {
  return (
    <AppLayout>
      {/* <LandingPage /> */}
      <EncounterPage />
    </AppLayout>
  );
}

export default App;
