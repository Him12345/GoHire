import './App.css';
import Banner from './Components/Banner/Banner';
import FaciCards from './Components/CanditateFaci/FaciCards';
import FaciCards1 from './Components/CanditateFaci/FaciCards1';
import FaciCards2 from './Components/CanditateFaci/FaciCards2';
import FeatureCards from './Components/cards/FeatureCards';
import FeatureCards2 from './Components/cards/FeatureCards2';
import FeatureCards3 from './Components/cards/FeatureCards3';
import Bubble from './Components/FoatingBubble/Bubble';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
   <>
     <Header/>
     <Banner/>

     <div className="cardss flex  justify-around items-center flex-wrap">
     <FeatureCards/>
    <FeatureCards2/>
    <FeatureCards3/>

     </div>
     <Bubble/>
     <div className="facicard flex justify-around items-center ">
     <FaciCards/>
      <FaciCards1/>

     </div>
     <FaciCards2/>

   <Footer/>

   </>
  );
}

export default App;
