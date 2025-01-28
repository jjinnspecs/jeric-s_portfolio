
const Intro = () => {
    return (
        <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-30 lg:py-30">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-[Philosopher-bold] tracking-tight text-orange-200 sm:text-8xl">
              JERIC CARIASO
            </h1>
            
            <p className="mt-8 text-pretty text-lg font-['Abhaya_Libre-normal'] text-white sm:text-xl/8">
            A dedicated web developer with a passion for crafting elegant digital solutions.
            </p>
            <button type="button" className="text-white bg-transparent border-cyan-800 border-2 focus:ring-1 focus:ring-cyan-700 font-['Abhaya_Libre-normal'] rounded-lg text-base px-5 py-2.5 me-2 mb-2 mt-4 hover:bg-cyan-800 hover:focus:ring-white cursor-pointer"
           
            >View Works </button>
          </div>
        </div>
      </div>  
    );
};

export default Intro;