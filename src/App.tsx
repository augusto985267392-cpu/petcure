import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";

function App() {
  return (
    <main>
      <div className="about-us-page">
        <Header variant="about-us" />
        <AboutUs />
      </div>
      <Services />
    </main>
  );
}

export default App;
