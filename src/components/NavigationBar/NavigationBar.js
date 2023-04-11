import "./NavigationBar.css"
import { TiCode } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'

function NavigationBar () {

    return (
        <>
        <div className="navContainer">
            <div className="navCenter" >
                    <div className="navName">
                        <span className="navCodeIcon"><TiCode /></span>
                        <div>Ari Moshe</div>
                    </div>
                    <div className="sectionLabelContainer">
                        <div className="sectionLabelMover" >
                            <div className="sectionLabelSplash">Meet Me</div>
                            <div className="sectionLabelQual">Education | Experience | Skills</div>
                            <div className="sectionLabelProjects">Projects</div>
                            <div className="sectionLabelAbout">About Me</div>
                            <div className="sectionLabelContact">Contact Me</div>
                        </div>
                    </div>
                    <div className="navLinkedIn">
                        <span className="navLiIcon"><AiFillLinkedin /></span>
                        <div>Connect On LinkedIn</div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default NavigationBar