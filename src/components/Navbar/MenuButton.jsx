export default function MenuButton({ isOpen, handleCycle }) {
  return (
    <button
      className="hamburger flex justify-self-end lg:hidden z-50"
      aria-expanded={`${isOpen ? true : false}`}
      aria-label="menu button"
      onClick={handleCycle}
    >
      <svg
        className="stroke-white fill-none overflow-hidden z-50"
        viewBox="-5 -15 100 100"
        width="50"
        height="50"
      >
        <path
          className="line"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="60 23 40 300"
          d="m 20 20 h 60 a 1 1 0 0 1 0 15 h -60 a 1 1 0 0 1 0 -30 h 30 v 60"
        />
      </svg>
    </button>
  );
}
