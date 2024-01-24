function Btn({ children, callback, size = "regular", color = "regular" }) {
  const sizeStyle = {
    regular: " text-2xl",
    small: " text-md",
    light: " text-md w-fit",
  };

  const colorStyle = {
    regular: " bg-mainBlue-400",
    delete: " bg-danger-500",
    light: " text-white bg-mainBlue-400",
  };

  return (
    <button
      className={`border border-black p-1 h-fit rounded-md shadow-btn transition-all duration-50 active:translate-y-0.5 active:shadow-none ${colorStyle[color]}  ${sizeStyle[size]}`}
      onClick={callback}
    >
      {children}
    </button>
  );
}

export default Btn;
