import React from "react";
import CareDogs from "../components/CareDogs/CareDogs";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import cachorro from "../assets/images/cachorro.png"
import MainDescription from "../components/MainDescription/MainDescription";

const Care = () => {
    return (
        <main className="container">
            <div className="pages_content">
                <CareDogs
                    icon={faCheckSquare}
                    imgSrc={cachorro}
                    altText="Dog"
                />
            </div>
        </main>
    );
};

export default Care;