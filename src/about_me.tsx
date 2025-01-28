import { Link, animateScroll as scroll } from 'react-scroll'

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8"> 
      <div className="md:w-1/2 mb-10 md:mb-0 p-8 font-['Abhaya_Libre-normal']"> 
        <h2 className="text-white text-3xl mb-4 text-center">About Me</h2>
        <div className="rounded-[0.3rem] p-10 bg-cyan-950/50">
        <div className="p-3 text-lg">
        <p className="text-white text-pretty text-justify">
          A web developer with experience in HTML, CSS, JavaScript, PHP, and more. I have a strong foundation in software engineering and database management, and I'm passionate about building user-friendly web applications.
        </p><br/>
        <p className="text-cameo mt-4 text-orange-200">
          Let's connect and discuss how I can contribute to your projects!
        </p>
        <br />
        <Link 
                    activeClass="active" 
                    to="contact-me" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    className="text-white bg-transparent border-cyan-800 border-2 focus:ring-1 focus:ring-cyan-700 font-['Abhaya_Libre-normal'] rounded-lg text-base px-5 py-3 me-2 mb-2 mt-4 hover:bg-cyan-800 hover:focus:ring-white cursor-pointer"
                  >
                    Contact Me!
                  </Link>
        </div>
        </div>
      </div>

      <div className="md:w-1/2"> 
      <div className="max-w-[20rem] rounded-[0.3rem] mx-auto">
        <img 
          src="src\assets\photo1.jpg" 
          alt="Profile Picture" 
          className="rounded-md max-w-full h-auto border-cyan-950 border-1" 
        />
      </div>
      </div>
    </div>
    );
};

export default AboutMe;