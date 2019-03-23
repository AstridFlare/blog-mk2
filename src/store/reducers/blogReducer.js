const initState = {
	blogs: [
		{ id: '1', title: 'This is title one -', content: 'blah blah blah 1' },
		{ id: '2', title: 'This is title two -', content: 'blah blah blah 2' },
		{ id: '3', title: 'This is title three -', content: ' blah blah blah 3' },
		{ id: '4', title: 'This is title four -', content: ' blah blah blah 3' }
	]
};

const blogReducer = (state = initState, action) => {
	return state;
};

export default blogReducer;
