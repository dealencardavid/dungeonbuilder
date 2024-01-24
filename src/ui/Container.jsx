function Container({ children, label }) {
  return (
    <div className="w-full p-4 bg-white border-2 border-black rounded-lg shadow-container relative flex flex-col">
      <div className="absolute bg-mainOrange-500 px-3 py-[2px] rounded-lg border-2 border-black grid place-items-center -top-4 right-3">
        <p className="text-white text-sm font-medium">{label}</p>
      </div>
      {children}
    </div>
  );
}

export default Container;
