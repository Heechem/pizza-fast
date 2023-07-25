import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const base =
    "duration-250 focus inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + 'px-4 py-3 "',
    small: base + " px-4 py2 md:px-5 md:py-2.5 text-xs",
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
