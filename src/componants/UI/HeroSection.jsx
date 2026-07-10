import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore THe World, One Country at a time.
                    </h1>
                    <p className="paragraph">
                        Discover The Culture, and Beuty of every nation.sort,
                        search, and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        start Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img 
                    src="/images/world.png" 
                    alt="no image"
                    className="banner-image"
                     />
                </div>
            </div>
        </main>
    )
}