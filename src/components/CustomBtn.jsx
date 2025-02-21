const CustomBtn = ({ children, ...props }) => {
  return (
    <button
      className="text-center px-3 py-2 bg-blue-500 rounded-lg text-sm text-white m-auto cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
