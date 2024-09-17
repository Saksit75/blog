// import { Link } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar bg-neutral text-neutral-content px-10">
//         <div className="flex-1">
//           <Link to="/">
//             <img src="/vite.svg" />
//           </Link>
//         </div>
//         <div className="flex justify-center items-center gap-3">
//           <Link to="/">หน้าแรก</Link>
//           <Link to="/blog">บล็อก</Link>
//           <Link to="/about">เกี่ยวกับเรา</Link>
//           <ThemeToggle/>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Blog from "../assets/blog.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-neutral text-neutral-content px-10">
        <div className="flex-1">
          <NavLink to="/">  
            <img className="h-[20px]" src={Blog} alt="Logo" />
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline decoration-yellow-500" : "text-neutral-content"
            }
          >
            หน้าแรก
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline decoration-yellow-500" : "text-neutral-content"
            }
          >
            บล็อก
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline decoration-yellow-500" : "text-neutral-content"
            }
          >
            เกี่ยวกับเรา
          </NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

