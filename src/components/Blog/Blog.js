import React, { Component } from 'react';

import BlogList from './BlogList';
import { connect } from 'react-redux';

class Blog extends Component {
	render() {
		// console.log(this.props);
		const { blogs } = this.props;

		return <BlogList blogs={blogs} />;
	}
}

const mapStateToProps = (state) => {
	return {
		blogs: state.blog.blogs
	};
};

export default connect(mapStateToProps)(Blog);
