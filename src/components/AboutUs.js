import {ReactComponent as HeaderBackground} from '../svg/header-background.svg';
import {ReactComponent as Mobileapp} from '../svg/mobile-app.svg';
import {ReactComponent as Team} from '../svg/team.svg';
import {ReactComponent as Shopping} from '../svg/offers.svg';
import assem from '../images/assem.jpeg'
import mohammad from '../images/mohammad.jpeg'
import hussam from '../images/hussam.jpeg'
const AboutUs = () => {
    return ( 
        <div>
        <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            About Us
          </h1>
          <p className="leading-normal text-2xl mb-8">
          Our goal as a team is to build a platform that can help communities on many levels.
          </p>
        </div>
        
        <div className="w-full md:w-3/5 py-10 flex text-center"> 
        <Team/>
        </div>
      </div>
    </div>
    <div className="relative -mt-12 lg:-mt-24">
      <HeaderBackground/>
    </div>
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Our Mission
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Creating a platform
            </h3>
            <br/>
            <p className="text-gray-600 mb-8">Create a platform for users to easily trade goods and services, and where they can volunteer in events</p>
            

              <br />
              <br />
            
          </div>
          <div className="w-full sm:w-1/2 p-6">
          <Mobileapp/>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Shopping/>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Mainting a safe environment
              </h3>
              <br/>
              <p className="text-gray-600 mb-8">Mainting a safe and user-friendly environment where all posts will be moderated</p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Meet The Team
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <img className="w-1/2 md:w-1/2 z-50 rounded-full" style={{marginLeft:100, marginTop:20, marginBottom:20}} src={assem} />
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Assem Dandan
              </div>
              <p className="text-gray-800 text-base px-6 mb-5 ">
                UI Designer & Frontend Developer
              </p>
              
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
            <a href="https://lb.linkedin.com/in/assem-dandan" className=" no-underline hover:no-underline">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Contact
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <img className="w-1/2 md:w-1/2 z-50 rounded-full" style={{marginLeft:100, marginTop:20, marginBottom:20}} src={mohammad} />
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Mohammad Faour
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Backend Developer
              </p>
           
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
            <a href="https://www.linkedin.com/in/mohammed-faour-6167451b0/" className=" no-underline hover:no-underline">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Contact
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            
            <img className="w-1/2 md:w-1/2 z-50 rounded-full" style={{marginLeft:100, marginTop:20, marginBottom:20}} src={hussam} />
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Hussam Mneimneh
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Mobile Developer
              </p>
            
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
            <a href="https://www.linkedin.com/in/hussam-mneimneh-578797207/" className="no-underline hover:no-underline">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Contact
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
     );
}
 
export default AboutUs;