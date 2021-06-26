import { ReactComponent as HeaderBackground } from '../svg/header-background.svg';
import { ReactComponent as Mobileapp } from '../svg/mobile-app.svg';
import { ReactComponent as Team } from '../svg/team.svg';
import { ReactComponent as Shopping } from '../svg/offers.svg';
import {ReactComponent as Homefooter} from '../svg/homefooter.svg';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import { useEffect } from 'react';
const Steps = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pt-5">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left pt-5">
          <div className="p-5">

          </div>
          <h1 className="my-4 text-5xl font-bold leading-tight p-5">
            Step 1
          </h1>
        </div>
      </div>
      <Step1 />
      <Homefooter/>
    <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Step 2
      </h1>
    </section>
      <Step2 />
      <Homefooter/>
    <section className="container mx-auto text-center py-6 mb-12">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Step 3
      </h1>
    </section>
      <Step3 />
    </div>
  );
}

export default Steps;