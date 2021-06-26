import {ReactComponent as HeaderBackground} from '../svg/header-background.svg';
import {ReactComponent as Mobileapp} from '../svg/mobile-app.svg';
import {ReactComponent as Team} from '../svg/team.svg';
import {ReactComponent as Shopping} from '../svg/offers.svg';
import { useEffect } from 'react';
const Step3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return ( 
        <div>
        <div className="pt-24">
     
    </div>
    <div className="relative -mt-12 lg:-mt-24">
      <HeaderBackground/>
    </div>
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Accept an Offer
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br/>
        <br/>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Are you satisfied with an offer? If yes, Accept it!
            </h3>
            <br/>
            
            
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
              Agree on when and where you can meet
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
     );
}
 
export default Step3;