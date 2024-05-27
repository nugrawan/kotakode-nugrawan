const Button = ({ text, className, icon, onClick, size = 'font-semibold' }) => {
  return (
    <button
      onClick={onClick}
      className={
        `inline-flex items-center border rounded-md ring-0 outline-none px-9 py-2 justify-center hover:opacity-60 ${className} ${size}`
      }
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
