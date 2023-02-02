import React from 'react'
import profile_image from "../assets/Ellipse 1238.png"
import filesImg from "../assets/path3683.png"


import "../styles/middlesection.css"
const Middlesection = () => {
    return (
        <>
            <div className='middle__section'>

                <div className="profile__section--top">
                    <div className="name__email--photo">
                        <img src={profile_image} alt="profile_image" />
                        <h1 style={{marginTop:"2rem"}}>Diane Copper</h1>
                        <p style={{ color: "#6B6B6B" }}>disne.copper@example.com</p>
                    </div>

                    <div className="past_upcoming--section">
                        <div style={{marginLeft :"50px"}} >
                            <h2>15</h2>
                            <p>Past</p>
                        </div>
                        <div className='border'></div>
                        <div style={{marginRight :"50px"}} >
                            <h2>02</h2>
                            <p>Upcoming</p>
                        </div>
                    </div>
                </div>





                <div className="profile__section--middle">
                    <p>Send Message</p>
                </div>




                <div className="profile__section--bottom">

                    <h4>Files / Documents</h4>

                    <div className="inside__profile__section--bottom">

                        <div className='innermost__profile__section--bottom'>
                            <img src={filesImg} alt="" />
                            <p>Check Up Results.pdf</p>
                        </div>

                        <div className='innermost__profile__section--bottom'>
                            <img src={filesImg} alt="" />
                            <p>Check Up Results.pdf</p>
                        </div>

                        <div className='innermost__profile__section--bottom'>
                            <img src={filesImg} alt="" />
                            <p>Medical Presciption.pdf</p>
                        </div>

                        <div className='innermost__profile__section--bottom'>
                            <img src={filesImg} alt="" />
                            <p>Dental X-Ray Result.pdf</p>
                        </div>

                    </div>
                </div>




            </div>

        </>
    )
}

export default Middlesection