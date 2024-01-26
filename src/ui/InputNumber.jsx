function InputNumber({ label, value, callback }) {
  return (
    <div className="flex flex-col gap-1 grow">
      <label htmlFor="players" className="text-black text-sm">
        {label}
      </label>
      <input
        id="players"
        type="number"
        min={0}
        value={value}
        className="bg-mainBege-500 w-full border-[0.5px] border-black rounded-md p-1 "
        onChange={callback}
      />
    </div>
  );
}

export default InputNumber;
