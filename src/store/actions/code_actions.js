export const codeChange = event => ({
	type: "CHANGE",
	code: event.target.value
});

export const codeDefault = code => ({
	type: "CHANGE",
	code
});