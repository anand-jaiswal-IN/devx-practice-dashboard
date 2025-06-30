import { MessageCircleMore, Bell } from "lucide-react";
function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div>
        <a href="/">
          <img src="logo.png" alt="" className="w-32" />
        </a>
      </div>
      <div>
        <ul className="flex">
          <li>
            <button className="p-3 bg-dim-white rounded-full text-dark-green cursor-pointer mr-4 hover:bg-light-green transition-colors hover:text-white">
              <MessageCircleMore />
            </button>
          </li>
          <li>
            <button className="p-3 bg-dim-white rounded-full text-dark-green cursor-pointer hover:bg-light-green transition-colors hover:text-white">
              <Bell />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
