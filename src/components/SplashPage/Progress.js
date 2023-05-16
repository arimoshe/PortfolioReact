import Headshot from "../../DSCF1405.jpg"
import { useEffect, useRef } from "react";

function Progress () {

    let scrollPos = useRef("");
    scrollPos.current = window.scrollY;

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

    // function throttle(func, wait) {
        
    //     let waiting = false;
    //     return function () {
    //         if (waiting) {
    //             return;
    //         }

    //         waiting = true;
    //         setTimeout(() => {
    //             func.apply(this, arguments);
    //             waiting = false;
    //         }, wait);
    //     };
    // }

    // const scrollToNearestPage = () => {

    //         const positions = [
    //             0, 
    //             document.querySelector('.qualifications').getBoundingClientRect().top + window.scrollY, 
    //             document.querySelector('.work').getBoundingClientRect().top + window.scrollY, 
    //             document.querySelector('.about').getBoundingClientRect().top + window.scrollY, 
    //             document.querySelector('.contact').getBoundingClientRect().top + window.scrollY
    //         ]
    //         for (let i = 0; i <= 4; i++) {
                
    //             if (window.scrollY > scrollPos.current && window.scrollY - positions[i] < 50) {
    //                 window.scrollTo({ top: positions[i], behavior:"smooth"});   
    //                 scrollPos.current = positions[i];
    //                 break;
    //             } else if (i > 0 && window.scrollY < scrollPos.current && window.scrollY - positions[i] < -100) {
    //                 window.scrollTo({ top: positions[i - 1], behavior: "smooth" });
    //                 scrollPos.current = positions[i - 1];
    //                 break;
    //             }
    //         }
        

    // }

    // const snapScroll = (prevScrollPos, first)=>{
    //     setTimeout(()=>{
    //         if (prevScrollPos === window.scrollY) {
    //             scrollToNearestPage();
    //         }
    //     }, 200)
        
    // }

    const storeScroll = (e) => {
        const r = document.querySelector(':root')
        r.style.setProperty('--scale', Math.min(1, window.innerWidth / 1400))
        r.style.setProperty('--scrollPos', window.scrollY + "px");
        r.style.setProperty('--scrollPosDeg', window.scrollY + 'deg')
        r.style.setProperty('--scrollPosPercentage', window.scrollY)
        if (window.innerHeight >= 680) {
            document.querySelector(':root').style.setProperty('--totalHeight', document.body.scrollHeight - window.innerHeight)
        } else {
            document.querySelector(':root').style.setProperty('--totalHeight', document.body.scrollHeight - 680)
        }
    }

    useEffect(() => {
        const r = document.querySelector(':root')
        r.style.setProperty('--scale', Math.min(1, window.innerWidth / 1400))
        if (window.innerHeight >= 680) {
            r.style.setProperty('--totalHeight', document.body.scrollHeight - window.innerHeight)
        } else {
            r.style.setProperty('--totalHeight', document.body.scrollHeight - 680)
        }
        
    }, [])
    
    document.addEventListener('scroll', debounce(storeScroll));
    // document.addEventListener('scroll', throttle((e) => { 
    //     snapScroll(window.scrollY)
    //  }, 500))
    window.addEventListener('resize', debounce(storeScroll));

    return (
        <div className="container">
            <div className="progress">
                <div className="pie">
                    <img src={Headshot} alt="Ari Headshot" />
                </div>
                <svg className="top-right" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                    <defs>
                        <filter id="f1" x="0" y="0" width="200%" height="200%">
                            <feComponentTransfer result="colorOut" in="SourceAlpha">
                                <feFuncA type="linear" slope="0.4" intercept="0" ></feFuncA>
                            </feComponentTransfer>
                            <feGaussianBlur result="blurOut" in="colorOut" stdDeviation="7" />

                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                        </filter>
                        <path id="textCircle"
                            d="M220,500a280,280 0 1,0 560,0a280,280 0 1,0 -560,0" />
                    </defs>
                    <text>
                        <textPath xlinkHref="#textCircle"
                            textLength={110} startOffset="595">
                            Meet Me
                        </textPath>
                    </text>
                    <circle className="top-right" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
                <svg className="bottom-right" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                    <defs>
                        <path id="textCircle"
                            d="M220,500a280,280 0 1,0 560,0a280,280 0 1,0 -560,0" />
                    </defs>
                    <text>
                        <textPath xlinkHref="#textCircle"
                                  textLength={350} startOffset="500">
                            Education | Experience | Skills
                                  </textPath>
                    </text>
                    <circle className="bottom-right" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
                <svg className="bottom-left" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                    <defs>
                        <path id="textCircle"
                            d="M220,500a280,280 0 1,0 560,0a280,280 0 1,0 -560,0" />
                    </defs>
                    <text>
                        <textPath xlinkHref="#textCircle"
                            textLength={110} startOffset="620">
                            Projects
                        </textPath>
                    </text>
                    <circle className="bottom-left" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                </svg>
                <svg className="top-left" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                    <circle className="top-left" cx="500" cy="500" r="230" strokeLinecap="round" filter="url(#f1)" />
                    <defs>
                        <path id="textCircle"
                            d="M220,500a280,280 0 1,0 560,0a280,280 0 1,0 -560,0" />
                    </defs>
                    <text>
                        <textPath xlinkHref="#textCircle"
                            textLength={120} startOffset="630">
                            About Me
                        </textPath>
                    </text>
                </svg>
            </div>
            
        </div>
    )
}

export default Progress