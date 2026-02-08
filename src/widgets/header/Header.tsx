import { NavLink } from 'react-router-dom';

import { Logo } from '@/shared/ui';
import { Bell, CircleUserRound, Search, Settings } from 'lucide-react';
import { Separator } from '@/shared/ui/shadcn';

function Header() {
  const navItems = [
    { to: '/', label: '대시보드' },
    { to: '/projects', label: '프로젝트' },
    { to: '/board', label: '보드' },
    { to: '/team', label: '팀' }
  ];

  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-center border-b-[#e9ecef] shadow">
      <div className="flex w-full items-center justify-between px-7 py-5">
        {/* left menu */}
        <div className="flex items-center gap-7">
          <Logo />
          <nav className="flex items-center gap-2 text-[14px] font-medium text-gray-600">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 select-none ${isActive ? 'bg-[#eef2ff] text-[#4f46e5]' : 'hover:bg-[#f1f3f5] hover:text-gray-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* right menu */}
        <div className="flex items-center gap-3 text-gray-600">
          <button className="rounded-lg p-2 hover:bg-[#f1f3f5] hover:text-gray-900">
            <Search size={20} />
          </button>
          <button className="rounded-lg p-2 hover:bg-[#f1f3f5] hover:text-gray-900">
            <Bell size={20} />
          </button>
          <button className="rounded-lg p-2 hover:bg-[#f1f3f5] hover:text-gray-900">
            <Settings size={20} />
          </button>
          <Separator orientation="vertical" className="!h-6" />
          <button className="rounded-lg p-2 hover:bg-[#f1f3f5] hover:text-gray-900">
            <CircleUserRound size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export { Header };
