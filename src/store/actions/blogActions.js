export const createBlog = (blog) => {
	return (dispatch, getState) => {
		//make asynchronous call
		dispatch({ type: 'CREATE_BLOG', blog });
	};
};
