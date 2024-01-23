import Container from "./ui/Container";

function App() {
  return (
    <div className=" h-dvh bg-mainBlue-500 pr-12">
      <div className="h-full bg-mainBege-500 rounded-r-3xl shadow-page flex flex-col gap-8 px-3 py-6">
        <h1 className="text-black text-xl font-extrabold">Adventure Day</h1>
        <Container label="Party">
          <p>Hey</p>
        </Container>
        <div className="w-full p-2 bg-success-500 border-4 border-black rounded-lg shadow-container relative overflow-clip">
          <div className="absolute w-32 bg-mainOrange-500 p-1 py-[2px] rounded-lg border-2 border-black grid place-items-center top-2 -right-8 rotate-[30deg]">
            <p className="text-white text-xs font-medium">medium</p>
          </div>
          <div className="flex flex-col items-center  divide-y-[0.5px] divide-dashed divide-white">
            <p className="text-white py-1 text-lg font-semibold">XP Goals</p>
            <div className="w-full py-1 flex items-center justify-between">
              <p className="text-white">Daily budget</p>
              <p className="text-white">45.000</p>
            </div>
            <div className="w-full py-1 flex justify-between">
              <p className="text-white">Total XP</p>
              <p className="text-white">45.000</p>
            </div>
            <div className="w-full py-1 flex justify-between">
              <p className="text-white">Ajusted Total XP</p>
              <p className="text-white">45.000</p>
            </div>
          </div>
        </div>
        <Container label="Encounters">Ho</Container>
      </div>
    </div>
  );
}

export default App;
