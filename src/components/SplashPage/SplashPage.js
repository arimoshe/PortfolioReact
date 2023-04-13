import Progress from "./Progress";
import "./SplashPage.css"
import Berkeley from './../../UC-Berkeley-Symbol-small.png'
import AppAcademy from './../../aAlogo.svg'
import SMP from './../../SMP_logo2_2-15_213px.png'

function SplashPage() {
    
   
    

    

    return (
        <>
           <Progress /> 
            <div className="content">
                <div className="splash">
                    <div className="contentBox">
                        <div className="headline">Always <span className="highlight">learning</span>, tech obsessed, creative <span className="highlight">problem-solver</span>.</div>
                        <div className="subhead">I see technology as a means to connect each other and create value in the world.</div>
                        <div className="learnMore"> Learn More: </div>
                        <div className="anchorButtons">
                            <div>Education | Experience | Skills</div>
                            <div>Projects</div>
                            <div>About me</div>
                        </div>
                    </div>
                    <svg xmlns="//www.w3.org/2000/svg" version="1.1" class="svg-filters" style={{display:'none'}}>
                        <defs>
                            <filter id="marker-shape">
                                <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
                                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="qualifications">
                    <div className="contentBox">
                        <div className="education">
                            <div className="eduHeader">
                                Education & Experience
                            </div>
                            <div className="eduLogos">
                                <img src={Berkeley} alt="UC Berkeley"/>
                                <img src={AppAcademy} alt="App Academy" />
                                <img src={SMP} alt="Sheet Music Plus" />
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="work">
                    <div className="contentBox">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="about">
                    <div className="contentBox">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="contact">
                    
                </div>
            </div>
        </>
    )
}
export default SplashPage