import Link from 'next/link';
import MenuButton from './MenuButton';

export default function Navbar() {
  return (
    <header>
      <nav className="text-aggie-gold">
        <div className="hidden sm:block">
          <ul className="flex justify-end gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="sm:hidden">
          <MenuButton />
        </div>
      </nav>
    </header>
  );
}
