import React, {Component} from 'react';
import resumeData from '../resumeData';

class Sidebar extends Component {

    render() {
        return (
            <div>
                <div>    
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <aside id="colorlib-aside" className="border js-fullheight">
                    <div className="text-center">
                    <div className="author-img" style={{backgroundImage: `url(images/${resumeData.profileimage})`}} />
                    <h1 id="colorlib-logo"><a href="index.html">Sandesh Nimat</a></h1>
                    <span id="email" className="email"><i className="icon-mail"></i> ssnimat95@gmail.com</span>
                    <br></br>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                        <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                        <li><a href="#about" data-nav-section="about">About</a></li>
                        <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                        <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                        </ul>
                    </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                    <ul>
                        <li><a href={resumeData.socialLinks[0].url} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                        <li><a href={resumeData.socialLinks[1].url} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    </ul>
                    </nav>
                    <div className="colorlib-footer">
                    <p><small>
                    Copyright &copy; 2020 <br/>
                    Template made by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>. <br/>
                    Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>.
                    </small></p>
                    <p><small>
                    </small></p>
                    </div>
                </aside>
                </div>
            </div>
        )
    }

}

export default Sidebar;