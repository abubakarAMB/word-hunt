import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
// import axios from "axios";
import { useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [LightTheme, setLightTheme] = useState(false);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Provider store={store}>
        <Container
          maxWidth="md"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
          >
            <span>{LightTheme ? "Dark" : "Light"} Mode</span>
            <PurpleSwitch
              checked={LightTheme}
              onChange={() => setLightTheme(!LightTheme)}
            />
          </div>
          <Header LightTheme={LightTheme} />
          <Definitions LightTheme={LightTheme} />
        </Container>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
