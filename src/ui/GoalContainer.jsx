import { getDifficulty } from "../utilities/helpers";

function GoalContainer({ title, xpThreshold, xpBase, values }) {
  const containerStyle = getDifficulty(xpBase, xpThreshold);

  return (
    <div
      className={`w-full min-h-32 p-2 border-2 border-black rounded-lg shadow-container relative overflow-clip  ${containerStyle.style}`}
    >
      <div className="absolute w-32 bg-mainOrange-500 p-1 py-[2px] rounded-lg border-2 border-black grid place-items-center top-2 -right-8 rotate-[30deg]">
        <p className="text-white text-xs font-medium">{containerStyle.label}</p>
      </div>
      <div className="flex flex-col h-full justify-between items-center  divide-y-[0.5px] divide-dashed divide-white">
        <p className="text-white py-1 text-lg font-semibold">{title}</p>
        {values.map((value, index) => (
          <div className="w-full py-1 flex justify-between" key={index}>
            <p className="text-white">{value.label}</p>
            <p className="text-white">{value.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalContainer;
