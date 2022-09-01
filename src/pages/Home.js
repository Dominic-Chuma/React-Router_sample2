import MyCarousel from "./Sub-components/Carousels/Carousel";
import DemarcationDiv from "./Sub-components/Divs/demarcation";
import InfoWithIconDiv from "./Sub-components/Divs/info-icons";

const Home = () => {
    return (
        // Commence on the Carousel tomorrow....
        <>
            {/* Home Page - Beginning.... */}
            <MyCarousel />
            <DemarcationDiv/>
            <InfoWithIconDiv/>
            {/* Home Page - Ending... */}
        </>
    )
}

export default Home;