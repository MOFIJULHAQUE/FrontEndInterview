import React from 'react';

import "../styles/sidebar.css"


import logo from "../assets/Vector 771 (Stroke).png"
import icon1 from "../assets/+.png";
import icon2 from "../assets/image 897.png"
import icon3 from "../assets/image 898.png"
import icon4 from "../assets/image 899.png"
import icon5 from "../assets/image 900.png"
import icon6 from "../assets/image 901.png"
import icon7 from "../assets/image 902.png"


const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className='green_bg'>fd</div>
                <img src={logo} alt="logo" className='logo' />
                {/* <img src={sidebarText} alt="sidebar_Text"  className='sidebar_Text'/> */}
                <div className="sidebarText">

                    <img src={icon1} alt="" className='icon1' />
                    <p> NEW</p>
                    <img src={icon2} alt="" className='icon2' />
                    <p>PATIENT</p>
                    <img src={icon3} alt="" className='icon3' />
                    <p>
                        FOLDER
                    </p>

                    <img src={icon4} alt="" className='icon4' />


                    <p>
                        UPLOAD

                    </p>

                    <img src={icon5} alt="" className='icon5' />

                    <p>
                        REPORT</p>


                    <img src={icon6} alt="" className='icon6' />

                    <p>SETTING</p>

                    <img src={icon7} alt="" className='icon7' />

                    <p>
                        LOGOUT
                    </p>
                </div>

            </div>
        </>
    )
}

export default Sidebar;