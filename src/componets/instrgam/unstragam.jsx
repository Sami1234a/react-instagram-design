import React from 'react'
import "./unstragam.css"
import image from '../../../api'
const Instragam = () => {
    const mt = {
        marginTop:"20px",
        fontSize:"0.8em"
    }
    
  return (
   
         <div className='container'>
            <div className="maidium">
                <div className="imges">
                   <img src="./public/img/home-phones.png" alt="" />
                   <img className='screenshot' src="./public/img/screenshot2.png" alt="" />
                </div>

                <div className="test">
                <div className="forms">
                    <div className="form">
                        <div className="headingimg ">
                            <img src="./public/img/image-removebg-preview.png" alt="" />
                        </div>
                        <input type="text" placeholder='Phon Number,username or email' />
                        <input type="text" placeholder='Phon Number,username or email' />
                        <input className='login' type="submit" value="Log In" />
                        <div className="divition">
                            <span>OR</span>
                        </div>

                        <div className="link">
                            <a href="#"><i class="fa-brands fa-square-facebook"></i>Log In Width Facebook</a>
                            <a style={mt} href="#">Forgot  Password?</a>
                        </div>
                    </div>
                    
                </div>

                <div className="box">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
                </div>
               
            </div>
        </div>
   
  )
}

export default Instragam