import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import HeroBanner from "./components/heroBanner";
import QuickLinks from "./components/quickLinks";
import UpcomingTrips from "./components/upcomingTrips";
import Cards from "./components/cards";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Header />
			<HeroBanner />
			<QuickLinks />
			<UpcomingTrips />
			<Cards />
			<Footer />
		</>
	);
}

export default App;
