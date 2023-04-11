import Headshot from "../../DSCF1405.jpg"
import { useEffect } from "react";

function Progress () {

    const debounce = (fn) => {
        let animationFrame
        return (...params) => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            animationFrame = requestAnimationFrame(() => {
                fn(...params)
            })
        }
    }
    const storeScroll = () => {
        const r = document.querySelector(':root')
        r.style.setProperty('--scrollPos', window.scrollY + "px");
        r.style.setProperty('--scrollPosDeg', window.scrollY + 'deg')
        r.style.setProperty('--scrollPosPercentage', window.scrollY)
    }

    useEffect(() => {
        document.querySelector(':root').style.setProperty('--totalHeight', document.body.scrollHeight - window.innerHeight)
    }, [])
    document.addEventListener('scroll', debounce(storeScroll));


    return (
        <div className="container">
            <div className="progress">
                <div className="pie">
                    <img src={Headshot} alt="Ari Headshot" />
                </div>
                <svg className="top-right" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1000px" height="1000px">
                    <defs>
                        <filter id="f1" x="0" y="0" width="200%" height="200%">
                            <feComponentTransfer result="colorOut" in="SourceAlpha">
                                <feFuncA type="linear" slope="0.6" intercept="0" ></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur result="blurOut" in="colorOut" stdDeviation="7" />

                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                        </filter>
                    </defs>
                    <circle className="top-right" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
                <svg className="bottom-right" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1000px" height="1000px">
                    <circle className="bottom-right" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
                <svg className="bottom-left" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1000px" height="1000px">
                    <circle className="bottom-left" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
                <svg className="top-left" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1000px" height="1000px">
                    <circle className="top-left" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
            </div>
        </div>
    )
}

export default Progress