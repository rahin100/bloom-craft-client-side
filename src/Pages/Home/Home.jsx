import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Team from "../../Components/MeetOurTeam/Team";
import PopularServices from "../../Components/PopularServices/PopularServices";


const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <AboutUs></AboutUs>
          <PopularServices></PopularServices>
          <Team></Team>
          <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;
