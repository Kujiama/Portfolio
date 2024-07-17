const Landing = ({info,TypeAnimation}) => {
    return (
        <div className="w-full px-4 mx-auto text-center sm:max-w-md md:max-w-lg lg:max-w-xl ">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: info.gradient }}
            >
              {info.firstName}
            </span>
          </h1>
          <h2 className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
            I'm a{" "}
            <TypeAnimation
              cursor={true}
              sequence={[info.position]}
              speed={10}
            />
          </h2>
          <p className="hidden sm:mt-5 sm:block sm:text-lg md:text-xl">
            {info.aboutMe}
          </p>

          <ul id="social-links" className="flex flex-wrap justify-center items-center gap-11 mx-5 my-5">
            {info.socials.map((social, index) => (
              // ignore last 2 social links
                <li key={index} className='social-link hover:text-violet-500 transition-colors duration-200'>
                  <a href={social.link} target="_blank" rel="noreferrer noopener" className="hover:text-violet-500 transition-colors duration-300 flex flex-col items-center justify-center">
                    <span className='text-2xl sm:text-3xl md:text-4xl'>
                      {social.icon}
                    </span>
                    <span className='social-link-text absolute'>
                      {social.label}
                    </span>
                  </a>
                </li>
            ))}
          </ul>
        </div>
    );
}
 
export default Landing;