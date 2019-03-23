import React from 'react';
import BlogSummary from './BlogSummary';

const BlogList = ({ blogs }) => {
	return (
		<div className="container row blog-list	">
			<ul className="collection col s12 m6 offset-m3">
				{blogs &&
					blogs.map((blog) => {
						return <BlogSummary blog={blog} key={blog.id} />;
					})}
			</ul>
		</div>
	);
};

export default BlogList;
