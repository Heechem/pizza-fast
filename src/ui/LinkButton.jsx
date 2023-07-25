import { Link } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className=" text-sm text-blue-500 hover:text-lg  hover:text-blue-600"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
