import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	code: state
});


const Preview = props => {
	const { code: { code } } = props;
	const [maximized, setMaximized] = useState(false);

	function toggleMaximize() {
		setMaximized(!maximized);
	}

	const marked = require("marked");
	marked.setOptions({
		breaks: true
	});
	const markedCode = marked(code);

	useEffect(() => {
		const editor = document.querySelector(".editor-container");
		const preview = document.querySelector(".preview-container");
		const mainDiv = document.getElementById("main-div");
		if(maximized){
			editor.classList.add("hide");
			preview.classList.add("maximized");
			mainDiv.style.padding = "0";
		} else {
			editor.classList.remove("hide");
			preview.classList.remove("maximized");
			mainDiv.style.padding = "15vh";
		}
	});

	return (
		<div className="preview-container">
			<header className="preview-header">
				<h2>Preview</h2>
				<i className="material-icons"
				onClick={toggleMaximize}>open_in_full</i>
			</header>
			<div dangerouslySetInnerHTML={{ __html: marked(markedCode) }}
				id="preview"></div>
		</div>
	);
};

export default connect(mapStateToProps, null)(Preview);