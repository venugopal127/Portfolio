import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">IT Undergrad, Software Developer & Problem Solver</h3>
            {/* Education and self-description */}
            <p className="text-muted-foreground md:text-left">
              I am an enthusiastic and detail-oriented IT undergraduate at Vasavi College of Engineering, Hyderabad.
              I have a solid foundation in programming, problem-solving, and team collaboration.
              I’m passionate about learning new technologies and delivering user-centric, scalable applications.
            </p>
            <p className="text-muted-foreground md:text-left">
              My expertise spans frontend and backend development, with hands-on experience in C, Java, Python, JavaScript, React, Node.js, and more.
              I enjoy optimizing solutions, building impactful projects, and collaborating with diverse teams.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href="/Resume/Venugopal_Resume.pdf" download className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
            {/* Contact info (optional) */}
            <div className="pt-4 space-y-1 text-sm md:text-base">
              <p><strong>Email:</strong> <a href="mailto:vangoluvenugopal@gmail.com" className="text-primary">vangoluvenugopal@gmail.com</a></p>
              <p><strong>Phone:</strong> 7075193818</p>
              <p><strong>Location:</strong> Hyderabad, India</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/venugopal127" target="_blank" className="text-primary">github.com/venugopal127</a></p>
            </div>
          </div>
          {/* Photo Section */}
          <div className='bg-card rounded-lg overflow-hidden shadow-xs card-hover flex justify-center'>
            {/* Place your own image in /public/Images directory, name accordingly */}
            <img
              className='h-64 w-64 overflow-hidden object-cover rounded-full'
              src="/Images/PassportImg.jpeg"
              alt="Venugopal Vangolu"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
