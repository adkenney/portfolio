export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="hidden sm:block">
          <ul className="flex gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="sm:hidden">
          <p>hamburger</p>
        </div>
      </nav>
    </header>
  );
}
