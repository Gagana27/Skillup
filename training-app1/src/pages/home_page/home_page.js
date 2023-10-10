import React from 'react'
import HeroSection from './hero_section';
import MyTopCatagoriesListSection from './my_top_catagories_list_section';

const HomePage = () => {
    return (
        <>
            <section>
                <HeroSection />
                <MyTopCatagoriesListSection />
            </section>
        </>
    );
}

export default HomePage;
