
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css"
import Intro from "./components/Intro";
import Trending from "./components/Trending"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End intro */}
      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending Section */}
    </div>
  );
}

export default App;