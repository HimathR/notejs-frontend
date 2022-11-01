import ReactDOM from "react-dom";
import CellList from "./components/cell-list";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./state";
import "./index.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
const App = () => {
  return (
    <div className="main">
      <Provider store={store}>
        <div>
          <CellList />
        </div>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
