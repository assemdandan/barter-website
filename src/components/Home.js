import phone from '../images/phone.png'
import downloadon from '../images/downloadon.png'
import {ReactComponent as HeaderBackground} from '../svg/header-background.svg';
import {ReactComponent as Agreement} from '../svg/agreement.svg';
import {ReactComponent as Events} from '../svg/events.svg';
import {ReactComponent as Homefooter} from '../svg/homefooter.svg';
import {ReactComponent as Wallet} from '../svg/wallet.svg';
import {ReactComponent as Shopping} from '../svg/shopping.svg';
import {ReactComponent as Chatimage} from '../svg/messaging.svg';
import {ReactComponent as Boxes} from '../svg/deliveries.svg';
import {ReactComponent as Ad} from '../svg/ad.svg';
import {ReactComponent as Offers} from '../svg/offers.svg';
import {ReactComponent as Order} from '../svg/order.svg';
import {ReactComponent as Mobileapp} from '../svg/mobile-app.svg';
import {Link} from 'react-router-dom'
const Home = () => {
    return ( 
    <div>
     <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">What is bartering?</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Barter
          </h1>
          <p className="leading-normal text-2xl mb-8">
            exchange (goods or services) for other goods or services without using money.
          </p>
          <a href="https://mega.io/" target="_blank">
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Download
          </button>
          </a>
        </div>
        
        <div className="w-full md:w-3/5 py-10 text-center">
            <Mobileapp/>
        </div>
      </div>
    </div>
    <div className="relative -mt-12 lg:-mt-24">
      <HeaderBackground/>
    </div>
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Features
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Trade Items or Services
            </h3>
            <p className="text-gray-600 mb-8">
              Allow users to place ads for items and services and make offers to trade with them.
              <br />
              <br />

            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Agreement/>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Events/>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Participate & Volunteer in events
              </h3>
              <p className="text-gray-600 mb-8">
                Let users create events which are moderated, where other users can participate & volunteer in.
                <br />
                <br />
                
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Chat with users
            </h3>
            <p className="text-gray-600 mb-8">
              A chat section so that users can negotiate offers & make deals.
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Chatimage/>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Boxes/>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Donate items
              </h3>
              <p className="text-gray-600 mb-8">
                You can also donate items that you no longer use, which can be of great benefit to others.
                <br />
                <br />
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Steps
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            
            <Ad/>
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Step 1
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Upload an Ad
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Choose the type of ad (Item, Service, Event) and provide some description and upload it!
              </p>
            
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
            <Link class="inline-block py-2 px-4 text-black font-bold no-underline" to="/step1">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn more
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            
            <Offers/>
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Step 2
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Propose or wait for an Offer.
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                You can either search for items or services to trade with straight away, or you can wait for someone to propose an offer.
              </p>
            
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
            <Link class="inline-block py-2 px-4 text-black font-bold no-underline" to="/step2">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn more
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            
            <Order/>
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Step 3
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Accept an Offer
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Once you are satisfied with an offer, you can accept it and then agree on when and where you can meet.
              </p>
            
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
            <Link class="inline-block py-2 px-4 text-black font-bold no-underline" to="/step3">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn more
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Why Barter?
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            A rescue for communities dealing with economic crises
            </h3>
            <br/>
            <p className="text-gray-600 mb-8">- Stopping the rely on money</p>
            <p className="text-gray-600 mb-8">- Enabling those who are short of hard currencies to obtain goods and services</p>
            <p className="text-gray-600 mb-8">- Limiting the waste of resources</p>

              <br />
              <br />
            
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Wallet/>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Shopping/>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Satisfying the needs of average consumers
              </h3>
              <br/>
              <p className="text-gray-600 mb-8">- Finding more items or services than the typical markets</p>
            <p className="text-gray-600 mb-8">- Finding items or services which have a lower value </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/*<section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Pricing
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Free
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £0
                <span className="text-base">for one user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
              <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-4xl font-bold text-center">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Pro
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    */}
    <Homefooter/>
    <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        What are you waiting for?
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Start Bartering Now!
      </h3>
      <a href="https://mega.io/" target="_blank">
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Download
      </button>
      </a>
    </section>
    </div>
     );
}
 
export default Home;