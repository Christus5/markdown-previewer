import React, { useEffect } from "react";
import { connect } from "react-redux";

/* Actions */
import { codeChange, codeDefault } from "../../store/actions";

const mapDispatchToProps = dispatch => ({
	codeChange: e => dispatch(codeChange(e)),
	codeDefault: c => dispatch(codeDefault(c))
});

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
	return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
	 - With different indentation levels.
		- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const Editor = props => {
	function handleChange(e){
		props.codeChange(e);
	}

	useEffect(() => {
		props.codeDefault(placeholder);
	});

	return (
		<form className="editor-container">
			<header className="editor-header">
				<h2>Editor</h2>
				<i className="material-icons">
open_in_full</i>
			</header>
			<textarea id="editor" rows="10"
			onChange={handleChange} placeholder="Enter code here">{placeholder}</textarea>
		</form>
	);
}

export default connect(null, mapDispatchToProps)(Editor);

