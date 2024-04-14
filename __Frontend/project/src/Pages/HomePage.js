import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import InsuranceCardGroup from "../Components/InsuranceCardGroup";
import Review from "../Components/Review";

function HomePage() {
    return (
        <>
            <InsuranceCardGroup/>
            {/* <Review /> */}
            <ContactUs />
            <Footer />
        </>
    );
}

export default HomePage;