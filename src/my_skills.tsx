const MySkills = () => {
    return (
        <div className="p-10 "> 
        <h2 className="text-white text-3xl mb-4 text-center ">Tech Stack</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> 
          {/* Left Column */}
          <div className="flex flex-col items-center"> 
            <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full flex justify-center items-center">
              <img
              alt="html5"
              src="src\assets\icons8-html5-96.svg"
              className=" h-30 w-30" />
            </div>
            <h1>HTML5</h1>
          </div>
  
          {/* Middle Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full flex justify-center items-center">
              <img
              alt="css3"
              src="src\assets\icons8-css3-96.svg"
              className=" h-30 w-30" />
            </div>
            <h1>CSS3</h1>
          </div>
  
          {/* Right Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full mb-4 flex justify-center items-center">
              <img
              alt="javascript"
              src="src\assets\icons8-javascript-96.svg"
              className=" h-30 w-30" />
            </div>
            <h1>JavaScript</h1>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8"> 
          {/* Left Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full flex justify-center items-center">
              <img
              alt="PHP"
              src="src\assets\icons8-php-logo-80.svg"
              className=" h-30 w-30" />
            </div>
            <h1>PHP</h1>
          </div>
  
          {/* Middle Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full flex justify-center items-center">
              <img
              alt="Laravel"
              src="src\assets\icons8-laravel-64.svg"
              className=" h-30 w-30" />
            </div>
            <h1>Laravel</h1>
          </div>
  
          {/* Right Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full mb-4 flex justify-center items-center">
              <img
              alt="ReactJS"
              src="src\assets\icons8-react-js-96.svg"
              className=" h-30 w-30" />
            </div>
            <h1>ReactJS</h1>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8"> 
          {/* Left Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full flex justify-center items-center">
              <img
              alt="NodeJS"
              src="src\assets\icons8-node-js-96.svg"
              className=" h-30 w-30" />
            </div>
            <h1>NodeJS</h1>
          </div>
  
          {/* Middle Column */}
          <div className="flex flex-col items-center"> 
          <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-transparent rounded-full flex justify-center items-center">
              <img
              alt="MySQL"
              src="src\assets\icons8-mysql-96.svg"
              className=" h-30 w-30" />
            </div>
            <h1>MySQL</h1>
          </div>
  
          {/* Right Column */}
          {/* <div className="flex flex-col items-center"> 
            <div className="w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-gray-600 rounded-full"></div>
          </div> */}
        </div>
      </div>
    );
  };
  
  export default MySkills;