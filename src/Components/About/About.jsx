import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt="" />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>React JS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Javascript</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Next JS</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>08+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
