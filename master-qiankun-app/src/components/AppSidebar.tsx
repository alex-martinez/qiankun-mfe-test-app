import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

export default function AppSidebar() {
  const linkClassList = 'text-gray-700 hover:text-gray-900 flex items-center gap-4 py-3 px-2 rounded';
  const isLinkActive = ({ isActive }: NavLinkRenderProps) => isActive
    ? `bg-[#08b843]/20 ${linkClassList}`
    : linkClassList;

  return (
    <aside className="h-screen border-r border-gray-200 w-full max-w-80 pt-8 flex flex-col flex-1">
      <div className="block px-6">
        <img src="/anaconda-logo-full.svg" alt="Anaconda" width="142" />
      </div>

      <nav className="mt-8 px-4 mb-4 flex flex-col gap-3 flex-auto overflow-auto custom-scrollbar">
        {/* <NavLink to="/" className={isLinkActive}>
          <i className="fa-light fa-house fa-xl fa-fw flex-shrink-0"></i>
          <span className="truncate">Home</span>
        </NavLink> */}

        <NavLink to="react-micro" className={isLinkActive}>
          <span className="w-[30px] flex justify-center">
            <img src="/react.svg" alt="React" className="w-6" />
          </span>
          <span className="truncate">React</span>
        </NavLink>

        <NavLink to="vue-micro" className={isLinkActive}>
          <span className="w-[30px] flex justify-center">
            <img src="/vue.svg" alt="Vue" className="w-6" />
          </span>
          <span className="truncate">Vue</span>
        </NavLink>

        <NavLink to="angular-micro" className={isLinkActive}>
          <i className="fa-light fa-block-question fa-xl fa-fw flex-shrink-0"></i>
          <span className="truncate">Angular</span>
        </NavLink>

        <a className="text-gray-700 hover:text-gray-900 flex items-center gap-4 py-3 px-2 rounded mt-auto" href="#">
          <i className="fa-light fa-gears fa-xl fa-fw flex-shrink-0 fa-flip-horizontal"></i>
          <span className="truncate">Placeholder</span>
        </a>
      </nav>

      <div className="border-t border-gray-200 mx-4 flex flex-none items-center py-4">
        <button className="flex items-center gap-4 hover:bg-primary-600/20 p-2 rounded transition-colors text-left w-full max-w-full">
          <img src="https://www.gravatar.com/avatar/0?s=80&d=mp" alt="Profile Picture" id="gravitar" className="rounded-full w-12 h-12" />

          <div className="min-w-0">
            <span id="user-name" className="text-sm font-semibold block truncate">John Doe</span>
            <span id="user-email" className="text-sm text-gray-700 block truncate">jdoe@example.com</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
