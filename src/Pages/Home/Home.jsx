import { Helmet } from "react-helmet-async";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Team from "../../Components/MeetOurTeam/Team";
import PopularServices from "../../Components/PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BloomCraft | Home</title>
        
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PopularServices></PopularServices>
      <Team></Team>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
