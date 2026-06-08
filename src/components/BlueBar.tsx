export default function BlueBar() {
  return (
    <>
      {/* Desktop left bar */}
      <div className="fixed left-0 top-0 w-[3px] h-[100vh] bg-blue z-40 hidden md:block" />
      {/* Mobile top bar */}
      <div className="fixed left-0 top-0 w-full h-[4px] bg-blue z-40 md:hidden" />
    </>
  );
}
