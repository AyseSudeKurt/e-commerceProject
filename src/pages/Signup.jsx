import React from "react";

function Signup() {

    return (

        <div className="w-full h-[800px]">
            <h1 className="font-montserrat font-bold w-[500px] h-[40px] ml-[530px] flex mt-[30px] text-gray-600 text-2xl">Welcome To Bandage, Sign In To Start</h1>
            <div className="w-[600px] h-[600px] rounded-[5px] ml-[465px] border-[#23A6F0] mt-10 border-[1px] flex flex-col">
                <input type="email" placeholder="Your Email" className="w-[400px] h-[40px] border-solid rounded-[5px] border-[#E6E6E6] ml-[110px] mt-[50px]"></input>
                <input type="password" placeholder="Your Password" className="w-[400px] h-[40px] border-solid rounded-[5px] border-[#E6E6E6] ml-[110px] mt-[50px]"></input>
                <div className="rounded-[5px] border-solid bg-[#23A6F0] w-[200px] h-[60px] ml-[200px] mt-[80px]">
                    <div className="font-montserrat font-bold text-xl w-[40px] h-[40px] text-white text-nowrap ml-[60px] mt-[15px]">Sign Up</div>
                </div>

                <h2 className="w-[60px] h-[30px] font-montserrat font-bold text-xl text-gray-600 text-nowrap mt-12 ml-[200px]">Have an Account ?</h2>
                <div className="rounded-[5px] border-[#23A6F0] border-[1px] w-[200px] h-[60px] mt-8 ml-[200px]">
                    <div className="text-xl font-montserrat font-bold text-[#23A6F0] ml-[60px] mt-[15px]">Log In</div>
                </div>
            </div>
        </div>

    )
}

export default Signup;