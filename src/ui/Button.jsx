import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "duration-250 focus inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4 "',
    small: base + " px-4 py2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "duration-250 focus inline-block border border-stone-300 rounded-full bg-transparent  font-semibold uppercase tracking-wide text-stone-400 transition-colors hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300  cursor-pointer focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-4 md:py-3.5 ",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <div disabled={disabled} className={styles[type]}>
      {children}
    </div>
  );
};

export default Button;
