function InputNumber({ label, value, callback, index }) {
  return (
    <div className="flex flex-col gap-1 grow">
      <label htmlFor="players" className="text-black text-sm">
        {label}
        <input
          id="players"
          type="number"
          min={0}
          step={1}
          value={value}
          className="bg-mainBege-500 w-full border-[0.5px] border-black rounded-md p-1"
          onChange={(e) => callback(e, index)}
        />
      </label>
    </div>
  );
}

export default InputNumber;
