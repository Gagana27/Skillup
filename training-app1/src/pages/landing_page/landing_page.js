import React from 'react';
import FeatureSection from '../feature_section';
import CourseSection from '../course_section';
import PartnersSection from './partners_section';
import TechnologySearchListSection from './technology_search_list_section';
import TopCatagoriesListSection from './top_catagories_list_section';
import StatsSection from './stats_section';
import Study from '../../assets/study.svg';

const LandingPage = () => {
  return (
        <div className="pt-10 bg-bright-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">


                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Learn & Be</span>
                    <span className="block text-black"> Creative</span>
                  </h1>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="hidden md:flex md:items-center md:space-x-6">
                        <a href="/homePage" className="inline-flex items-center px-4 py-2 border  border-gray-500 text-base font-medium rounded-md text-black bg-bright-white hover:bg-gray-700">
                          Log in
                        </a>
                        <a href="/login" className="inline-flex items-center px-4 py-2 border  border-transparent text-base font-medium rounded-md text-white bg-bright-orange hover:bg-gray-700">
                          Start free trial
                        </a>
                      </div>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Learn about technology, build your skills and advance your career.
                      </p>
                      <h3 className="mt-4 text-2xl tracking-tight font-bold text-gray-700 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xl">
                        <span className="block">The best way</span>
                        <span className="block text-gray-700">to explore tech.  </span>
                      </h3>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img 
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 ml-40 lg:h-full lg:w-auto lg:max-w-none" 
                    src={Study} alt />

                  {/* <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" alt /> */}
                </div>
              </div>
            </div>
          </div>
          <PartnersSection/>
          {/* <TechnologySearchListSection/> */}
          <TopCatagoriesListSection/>
        </div>
  );
}

export default LandingPage;