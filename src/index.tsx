import ReactDOM from "react-dom";
import CellList from "./components/cell-list";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "./state";
import "./index.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import png from notejslogo.png
import png from "./notejslogo.png";
import MDEditor from "@uiw/react-md-editor";
import "./components/text-editor.css";
import { useEffect, useState } from "react";
import OBModal from "./components/onboarding";
import Footer from "./components/footer";

const initcontents = `# Welcome to NoteJS!\n
### Please Note: This is the **web** version of NoteJS, and only serves as a simple demo of the actual application functionality. 
To use the full version of NoteJS, please download the CLI from GitHub! Full instructions and code is available in my GitHub repo linked below. 
Simply run __**npx himath-notejs serve**__ in your terminal to get started with the full experience, including proper data persistence!
For the time being, this web version will not save your data but you can still export any code you write in json form, and import it into the CLI version with the export button.

Click on a **code** or **text** button to get started. 
This application was built with React + TypeScript. 
Redux was used for state management and many of the components were taken from the AtlasKit UI 
from the Atlassian Design System.\n

## Information: \n- [Github Repo (Main)](https://github.com/HimathR/notejs/)\n
- [Github Repo (Web Version)](https://github.com/HimathR/notejs-frontend/)\n
- [My LinkedIn](https://www.linkedin.com/in/himath-ratnayake/)\n
- [Portfolio Website](https://www.himathsprojects.xyz/)\n 
`;

const Results = () => (
  <div className="text-editor-card" id="intro">
    <div className="card-content">
      <MDEditor.Markdown source={initcontents || "Click To Edit"} />
      <OBModal></OBModal>
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
