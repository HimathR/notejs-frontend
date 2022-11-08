import ReactDOM from "react-dom";
import CellList from "./components/cell-list";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./state";
import "./index.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import png from "./notejslogo.png";
import MDEditor from "@uiw/react-md-editor";
import "./components/text-editor.css";
import { useEffect, useState } from "react";
import OBModal from "./components/onboarding";
import Footer from "./components/footer";
import { ActionType } from "./state/action-types";

const initcontents = `# Welcome to NoteJS!\n
### Please Note: This is the **web** version of NoteJS, and only serves as a simple demo of the actual application functionality. 
To use the full version of NoteJS, please download the npm bundle! Full instructions and code is available in my GitHub repo (inside the info modal below), as well as some other documentation of features. 
Simply run __**npx himath-notejs serve**__ in your terminal to get started with the full experience, including proper data persistence!
For the time being, this web version will not save your data but you can still export any code you write in json form, and import it into the CLI version with the export button.

Click on a **code** or **text** button to get started! You can also click on the NoteJS logo to close this modal.

`;

const Results = () => (
  <div className="text-editor-intro" id="intro">
    <div className="card-content">
      <MDEditor.Markdown source={initcontents || "Click To Edit"} />
      {/* add padding inline style */}
      <div style={{ padding: "10px" }}></div>
      <OBModal />
    </div>
  </div>
);

const App = () => {
  const [showResults, setShowResults] = useState(true);
  const onClick = () => setShowResults(!showResults);

  // store showResults in local storage
  useEffect(() => {
    const showResults = JSON.parse(
      localStorage.getItem("showResults") || "true"
    );
    setShowResults(showResults);
  }, []);

  useEffect(() => {
    localStorage.setItem("showResults", JSON.stringify(showResults));
  }, [showResults]);

  return (
    <div className="main">
      <Provider store={store}>
        <div>
          <div className="title">
            <img
              src={png}
              className="notejsimg"
              alt="notejslogo"
              onClick={onClick}
            />
          </div>

          <div>{showResults ? <Results /> : null}</div>

          <CellList />
          <Footer />
        </div>
      </Provider>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

// add some default cells
store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: "defaulttext",
    type: "text",
  },
});
store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: "defaultcode",
    type: "code",
  },
});
