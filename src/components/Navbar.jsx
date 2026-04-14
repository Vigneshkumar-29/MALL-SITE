import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Specific to the design requirements
  const activeClass = "text-[#2E4031] dark:text-emerald-50 border-b border-[#2E4031] pb-1 font-medium transition-colors duration-300";
  const inactiveClass = "text-stone-500 dark:text-stone-400 hover:text-[#2E4031] transition-colors duration-300";

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#FAF9F6] dark:bg-stone-950 opacity-80 backdrop-blur-md">
      <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-serif tracking-tighter text-[#2E4031] dark:text-emerald-50">
          Green Haven
        </Link>
        <div className="hidden md:flex gap-10 font-['Noto_Serif'] tracking-tight text-sm">
          <Link
            className={isActive("/collection") ? activeClass : inactiveClass}
            to="/collection"
          >
            Shop
          </Link>
          <Link
            className={isActive("/story") ? activeClass : inactiveClass}
            to="/story"
          >
            Our Story
          </Link>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-[#2E4031] transition-colors duration-300"
            href="#"
          >
            Care
          </a>
          <a
            className="text-stone-500 dark:text-stone-400 hover:text-[#2E4031] transition-colors duration-300"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#2E4031] dark:text-emerald-50 scale-95 duration-200 transition-transform">
            search
          </button>
          <button className="material-symbols-outlined text-[#2E4031] dark:text-emerald-50 scale-95 duration-200 transition-transform">
            shopping_bag
          </button>
        </div>
      </div>
    </nav>
  );
}
