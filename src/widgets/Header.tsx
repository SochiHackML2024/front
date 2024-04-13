export const Header = () => {
  return (
    <header className={"w-full flex items-center justify-between py-4"}>
      <div className={"text-[#5B2376] text-4xl font-black"}>Огонь внутри</div>
      <nav className={"text-[#5B2376] text-xl flex gap-8 items-center"}>
        <div>Инструкция</div>
        <div>Инструкция</div>
        <div className={"bg-gradient-to-b from-[#9957B9BB] to-[#4766D7BB] text-white px-4 py-2 rounded-xl cursor-pointer"}>Правила</div>
      </nav>
    </header>
  );
};
