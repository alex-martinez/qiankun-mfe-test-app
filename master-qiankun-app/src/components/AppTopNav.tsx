import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

export default function AppSidebar() {
  const linkClassList = 'text-gray-700 hover:text-gray-900 flex items-center gap-4 py-3 px-2 rounded transition-colors';
  const isLinkActive = ({ isActive }: NavLinkRenderProps) => isActive
    ? `bg-[#08b843]/30 ${linkClassList}`
    : `hover:bg-[#08b843]/15 ${linkClassList}`;

  return (
    <section className="border-b border-gray-200 w-full py-2 px-6 flex items-center">
      <div className="block mr-6">
        <img src="/anaconda-logo-full.svg" alt="Anaconda" width="142" />
      </div>

      <nav className="px-4 flex flex-row gap-3 flex-auto overflow-auto custom-scrollbar">
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
      </nav>

      <button className="ml-auto bg-none rounded-full border hover:border-gray-600 transition-colors">
        <img src="https://www.gravatar.com/avatar/0?s=80&d=mp" alt="Profile Picture" id="gravitar" className="rounded-full w-10 h-10" />
      </button>
    </section>
  );
}
