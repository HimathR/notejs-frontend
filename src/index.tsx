import ReactDOM from "react-dom";
import CellList from "./components/cell-list";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./state";
import "./index.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import png from notejslogo.png
import png from "./notejslogo.png";

const App = () => {
  return (
    <div className="main">
      <Provider store={store}>
        <div>
          <div className="title">
            <img src={png} className="notejsimg" alt="notejslogo" />
          </div>
          <CellList />
        </div>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
