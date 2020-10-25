import React from 'react';
import { connect } from "react-redux";

/* Styles */
import "./styles/index.scss";

/* Components */
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";

const mapStateToProps = state => ({
	code: state.code
});

const App = props => {
  return (
    <div id="main-div">
      <Editor />
			<Preview />
    </div>
  );
}

export default connect(mapStateToProps, null)(App);
