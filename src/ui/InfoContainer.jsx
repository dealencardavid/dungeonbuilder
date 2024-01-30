function InfoContainer({ title, values }) {
  return (
    <div
      className={`w-full p-2 border-2 border-black rounded-lg shadow-container bg-mainBlue-400`}
    >
      <div className="flex flex-col items-center  divide-y-[0.5px] divide-dashed divide-white">
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

export default InfoContainer;
