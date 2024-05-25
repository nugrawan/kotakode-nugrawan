const Button = ({ text, className }) => {
  return (
    <button
      className={
        `${className} inline-flex font-semibold items-center justify-center border rounded-md ring-0 outline-none px-9 py-2 hover:opacity-60`
      }
    >
      {text}
    </button>
  );
};

export default Button;
