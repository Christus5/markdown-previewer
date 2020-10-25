import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

/* Actions */
import { codeChange, codeDefault } from "../../store/actions";

const mapDispatchToProps = dispatch => ({
	codeChange: e => dispatch(codeChange(e)),
	codeDefault: c => dispatch(codeDefault(c))
});

const mapStateToProps = state => ({
	code: state.code,
	maximized: state.maximized
});

const Editor = props => {
	const code = props.code;
	const [maximized, setMaximized] = useState(false);

	function handleChange(e){
		props.codeChange(e);
	}
	function toggleMaximize() {
		setMaximized(!maximized);
	}

	useEffect(() => {
		const editor = document.querySelector(".editor-container");
		const preview = document.querySelector(".preview-container");
		const mainDiv = document.getElementById("main-div");
		if(maximized){
			editor.classList.add("maximized");
			preview.classList.add("hide");
			mainDiv.style.padding = "0";
		} else {
			editor.classList.remove("maximized");
			preview.classList.remove("hide");
			mainDiv.style.padding = "15vh";
		}
	});

	return (
		<form className="editor-container">
			<header className="editor-header">
				<h2>Editor</h2>
				{maximized === false &&<i className="material-icons"
				onClick={toggleMaximize}>
					open_in_full</i>}
				{maximized === true &&<i class="material-icons"
				onClick={toggleMaximize}>
					close_fullscreen</i>}
			</header>
			<textarea id="editor" rows="10"
			onChange={handleChange}
			placeholder="Enter code here">{code}</textarea>
		</form>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

