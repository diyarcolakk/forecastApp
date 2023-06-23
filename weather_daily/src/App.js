import Header from "./Components/Header/Header";
import Context from "./Context/Context";
import "./styles/App.css";

function App() {
  return (
    <Context>
      <Header />
    </Context>
  );
}

export default App;
