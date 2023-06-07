export default function Layout({ children }) {
  return (
    <div className="p-5 md:px-12 lg:px-36 max-w-[1440px] mx-auto min-h-screen">
      {children}
    </div>
  );
}
