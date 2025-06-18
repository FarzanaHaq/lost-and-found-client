import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Latest from "../Latest/Latest";
import Recent from "../Recent/Recent";
import Safety from "../Safety/Safety";

const Home = () => {
  return (
    <div>
           <Helmet>
              <meta charSet="utf-8" />
              <title>Home</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Banner></Banner>
        <Recent></Recent>
      <Latest></Latest>
      <Safety></Safety>
    
    </div>
  );
};

export default Home;
