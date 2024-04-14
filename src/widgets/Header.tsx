export const Header = () => {
  return (
    <header className={"w-full flex items-center justify-between py-4"}>
      <div className={"text-[#5B2376] text-lg sm:text-4xl font-black"}>Огонь внутри</div>
      <nav className={"text-[#5B2376] text-small sm:text-xl flex gap-4 items-center"}>
        <div>Инструкция</div>
        <div className={"bg-gradient-to-b from-[#9957B9BB] to-[#4766D7BB] text-white px-4 py-2 rounded-xl cursor-pointer"}>Правила</div>
      </nav>
    </header>
  );
};
