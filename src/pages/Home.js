import MyCarousel from "./Sub-components/Carousels/Carousel";
import DemarcationDiv from "./Sub-components/Divs/demarcation";
import InfoWithIconDiv from "./Sub-components/Divs/info-icons";
import FooterDiv from "./Sub-components/Divs/footer";

const Home = () => {
    return (
        // Commence on the Carousel tomorrow....
        <>
            {/* Home Page - Beginning.... */}
            <MyCarousel />
            <DemarcationDiv/>
            <InfoWithIconDiv/>
            <FooterDiv/>
            {/* Home Page - Ending... */}
        </>
    )
}

export default Home;