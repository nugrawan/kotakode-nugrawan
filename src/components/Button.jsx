const Button = ({ text, className, icon }) => {
  return (
    <button
      className={
        `inline-flex font-semibold items-center border rounded-md ring-0 outline-none px-9 py-2 hover:opacity-60 ${className} ${!icon ? 'justify-between' : 'justify-center'}`
      }
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
