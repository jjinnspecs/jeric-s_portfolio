
const ContactMe = () => {

  
  return (
    <div className="container mx-auto p-8 bg-cyan-950/50 rounded-xs shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="border-cyan-800 border-2 rounded-lg p-6 text-center">
          <img src="src\assets\icons8-gmail-48.svg" alt="Mail" className="w-14 h-14 mx-auto mb-4" />
          <img src="src\assets\gmail.png" alt="GMail QR Code" className="w-26 h-26 mx-auto mb-2" />
          <p className="text-white">SCAN ME!</p>
          <br />
          <a href="mailto:j3.cariaso@gmail.com"
          className=" text-white bg-transparent border-cyan-800 border-2 focus:ring-1 focus:ring-cyan-700 font-['Abhaya_Libre-normal'] rounded-lg text-base px-5 py-2.5 me-2 mb-2 mt-4 hover:bg-cyan-800 hover:focus:ring-white cursor-pointer">
            Let's Talk
          </a>
        </div>

        <div className="border-cyan-800 border-2 rounded-lg p-6 text-center">
          <img src="src\assets\icons8-linkedin-50.svg" alt="LinkedIn" className="w-14 h-14 mx-auto mb-4" />
          <img src="src\assets\linkedIn.png" alt="LinkedIn QR Code" className="w-26 h-26 mx-auto mb-2" />
          <p className="text-white">SCAN ME!</p>
          <br />
          <a href="https://www.linkedin.com/in/jeric-cariaso-926860330"
          className="text-white bg-transparent border-cyan-800 border-2 focus:ring-1 focus:ring-cyan-700 font-['Abhaya_Libre-normal'] rounded-lg text-base px-5 py-2.5 me-2 mb-2 mt-4 hover:bg-cyan-800 hover:focus:ring-white cursor-pointer">
            Let's Talk
          </a>
        </div>

        <div className="border-cyan-800 border-2 rounded-lg p-6 text-center">
          <img src="src\assets\icons8-messenger-48.svg" alt="Facebook_messenger" className="w-14 h-14 mx-auto mb-4" />
          <img src="src\assets\messenger.png" alt="Facebook_messenger QR Code" className="w-26 h-26 mx-auto mb-2" />
          <p className="text-white">SCAN ME!</p>
          <br />
          <a href="https://m.me/11636617j"
          className="text-white bg-transparent border-cyan-800 border-2 focus:ring-1 focus:ring-cyan-700 font-['Abhaya_Libre-normal'] rounded-lg text-base px-5 py-2.5 me-2 mb-2 mt-4 hover:bg-cyan-800 hover:focus:ring-white cursor-pointer">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;