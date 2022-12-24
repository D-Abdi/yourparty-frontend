const NavBar = () => {
  return (
    <header
      className="text-primary body-font"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 text-xl cursor-pointer hover:text-accent transition-all duration-300">Home</a>
          <a className="mr-5 text-xl cursor-pointer hover:text-accent transition-all duration-300">About</a>
          <a className="text-xl cursor-pointer hover:text-accent transition-all duration-300">Contact</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          
          <span className="ml-3 text-3xl"><span className="text-primary">@</span><span className="text-white">YourParty</span></span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 bg-secondary text-white hover:bg-accent transition-all duration-300">
            Buy me a coffee
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
