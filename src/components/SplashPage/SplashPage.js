import Headshot from "../../DSCF1405.jpg"
import "./SplashPage.css"

function SplashPage() {
    return (
        <>
            <div className="container">
                <div className="progress">
                    <div className="pie">
                        <img src={Headshot} alt="Ari Headshot"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SplashPage