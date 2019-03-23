import React, { Component } from 'react';

export default class CreateBlog extends Component {
	render() {
		return (
			<div className="container sign-in">
				<div className="card">
					<div className="row">
						<form className="col s12 form-padding">
							<h5 className="grey-text text-darken-3">Create a New Post</h5>

							<div className="row">
								<div className="input-field col s12">
									<input type="text" id="title" onChange={this.handleChange} />
									<label htmlFor="title">Project Title</label>
								</div>
							</div>

							<div className="row">
								<div className="input-field col s12">
									<textarea
										id="content"
										className="materialize-textarea"
										onChange={this.handleChange}
									/>
									<label htmlFor="content">Project Content</label>
								</div>
							</div>
							<div className="right">
								<div className="input-field ">
									<button className="btn pink lighten-1">
										Post
										<i className="material-icons right">send</i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

// <div className="container post-blog">
// 				<form className="white" onSubmit={this.handleSubmit}>
// 					<h5 className="grey-text text-darken-3">Create a New Project</h5>
// 					<div className="input-field">
// 						<input type="text" id="title" onChange={this.handleChange} />
// 						<label htmlFor="title">Project Title</label>
// 					</div>
// 					<div className="input-field">
// 						<textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
// 						<label htmlFor="content">Project Content</label>
// 					</div>
// 					<div className="input-field right">
// 						<button className="btn pink lighten-1">Create</button>
// 					</div>
// 				</form>
// 			</div>
