import React from 'react';

const BlogSummary = ({ blog }) => {
	console.log(blog.title);
	return (
		<li className="collection-item avatar">
			<a href="/" className=" btn btn-floating pink lighten-1 circle">
				AF
			</a>

			<span className="title">{blog.title}</span>
			<p>
				First Line <br />
				Second Line
			</p>
			<a href="#!" className="secondary-content">
				<i className="material-icons">grade</i>
			</a>
		</li>
	);
};

export default BlogSummary;

// <div className="container row blog-list	">
// <ul className="collection col s12 m6 offset-m3">
// </ul>
// </div>

// <li className="collection-item avatar">
// <a href="/" className=" btn btn-floating pink lighten-1 circle">
//     AF
// </a>
// <span className="title">Title</span>

// <p>
//     First Line <br />
//     Second Line
// </p>
// <a href="#!" className="secondary-content">
//     <i className="material-icons">grade</i>
// </a>
// </li>
// <li className="collection-item avatar">
// <a href="/" className=" btn btn-floating pink lighten-1 circle">
//     AF
// </a>

// <span className="title">Title</span>
// <p>
//     First Line <br />
//     Second Line
// </p>
// <a href="#!" className="secondary-content">
//     <i className="material-icons">grade</i>
// </a>
// </li>
// <li className="collection-item avatar">
// <a href="/" className=" btn btn-floating pink lighten-1 circle">
//     AF
// </a>

// <span className="title">Title</span>
// <p>
//     First Line <br />
//     Second Line
// </p>
// <a href="#!" className="secondary-content">
//     <i className="material-icons">grade</i>
// </a>
// </li>
// <li className="collection-item avatar">
// <a href="/" className=" btn btn-floating pink lighten-1 circle">
//     AF
// </a>

// <span className="title">Title</span>
// <p>
//     First Line <br />
//     Second Line
// </p>
// <a href="#!" className="secondary-content">
//     <i className="material-icons">grade</i>
// </a>
// </li>
// <li className="collection-item avatar">
// <a href="/" className=" btn btn-floating pink lighten-1 circle">
//     AF
// </a>

// <span className="title">Title</span>
// <p>
//     First Line <br />
//     Second Line
// </p>
// <a href="#!" className="secondary-content">
//     <i className="material-icons">grade</i>
// </a>
// </li>
