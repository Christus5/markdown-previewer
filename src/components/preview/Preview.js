import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	code: state
});

const Preview = props => {
	const { code: { code } } = props;
	const marked = require("marked");
	const markedCode = marked(code);

	return (
		<div className="preview-container">
			<header className="preview-header">
				<h2>Preview</h2>
				<i className="material-icons">
open_in_full</i>
			</header>
			<p id="preview"
			dangerouslySetInnerHTML={{ __html: marked(markedCode) }}>
			</p>
		</div>
	);
};

export default connect(mapStateToProps, null)(Preview);