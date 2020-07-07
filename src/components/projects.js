import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							{
								resumeData.projects.map((entry) => {
									return (
										<div className="col-md-4 animate-box" data-animate-effect={entry.animation}>
											<div className="project" style={{backgroundImage: `url(images/${entry.image}`}}>
												<div className="desc">
													<div className="con">
														<h3><a href={entry.link} target="_blank" rel="noopener noreferrer">{entry.title}</a></h3>
													</div>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href={resumeData.socialLinks[1].url} className="btn btn-primary btn-lg btn-load-more"> Visit <i className="icon-github" /> for more</a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}