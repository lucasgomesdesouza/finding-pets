import React from "react";
import HeroContent from "../components/HeroContent/HeroSection";
import CardSection from "../components/CardSection/CardSection";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";

const Home = () => {
    return (
        <main className="container">
            <div className="pages_content">
                <HeroContent />
                <CardSection />
                <TestimonialCard />
            </div>
        </main>
    );
};

export default Home;