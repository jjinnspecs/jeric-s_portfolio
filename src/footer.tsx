const Footer = () => {
    return (
        <div className="bg-slate-950 py-4 text-center">
      <div className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.facebook.com/11636617j" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-facebook-50.svg" alt="Facebook" className="w-8 h-8 mx-auto mb-1" />
            </a>
          </li>
          <li>
            <a href="mailto:j3.cariaso@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-gmail-50.svg" alt="Gmail" className="w-8 h-8 mx-auto mb-1" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeric-cariaso" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-linkedin-1-50.svg" alt="LinkedIn" className="w-8 h-8 mx-auto mb-1" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jjinnspecs" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\icons8-github-50.svg" alt="GitHub" className="w-8 h-8 mx-auto mb-1" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-gray-400">
          &copy; 2023 Jeric Cariaso | All Rights Reserved
        </p>
      </div>
    </div>

    );
};

export default Footer;