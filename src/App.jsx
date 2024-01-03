import "./App.css";
import MainNavigationBar from "./components/navBar/MainNavigationBar";
import TopNavigationBar from "./components/navBar/TopNavigationBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <TopNavigationBar />
      <MainNavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
