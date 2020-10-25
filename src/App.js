import React from 'react';

/* Styles */
import "./styles/index.scss";

/* Components */
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";

const App = () => {
  return (
    <div id="main-div">
      <Editor />
			<Preview />
    </div>
  );
}

export default App;
