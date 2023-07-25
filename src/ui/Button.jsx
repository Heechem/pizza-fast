const Button = ({ children, disabled }) => {
  return (
    <div
      disabled={disabled}
      className="duration-250 focus inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </div>
  );
};

export default Button;
