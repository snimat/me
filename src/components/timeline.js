import React, { Component } from 'react';
import resumeData from '../resumeData';

class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {resumeData.timeline.map((entry) => {
                      return (
                              <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                          <div className="timeline-entry-inner">
                            <div className={`timeline-icon ${entry.color}`}>
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2>{entry.title} <span> {entry.duration}</span></h2>
                              <p>{entry.details}</p>
                            </div>
                          </div>
                        </article>
                      );                     
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Timeline;