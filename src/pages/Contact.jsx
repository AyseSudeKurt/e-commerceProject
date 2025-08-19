import React from "react";
import { Circle, Phone, MapPin, Mail, Undo } from "lucide-react";


function Contact() {

    return (

        <div>
            <div className="w-full h-[742px] mt-[104px] pt-[112px] pb-[112px] gap-[80px]">
                <div className="w-[1044px] h-[518px] gap-[30px] flex flex-row">
                    <div className="w-[599px] h-[518px] gap-[35px] flex text-nowrap flex-col ml-[230px]">
                        <h5 className="w-[108px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ">CONTACT US</h5>
                        <h1 className="w-[378px] h-[160px] font-montserrat font-bold text-6xl tracking-[0.2px] text-[#252B42] ">Get in touch<br></br>today!</h1>
                        <h4 className="w-[376px] h-[60px] font-montserrat font-normal text-xl tracking-[0.2px] text-[#737373]">We know how large objects will act,<br></br>but things on a small scale</h4>
                        <div className="w-[242px] h-[32px] font-montserrat font-bold text-2xl tracking-[0.1px] text-[#252B42]">Phone : +451 215 215 </div>
                        <div className="w-[207px] h-[32px] font-montserrat font-bold text-2xl tracking-[0.1px] text-[#252B42] mt-[-10px]">Fax : +451 215 215 </div>
                        <div className="w-[242px] h-[50px] p-[10px] gap-[34px] flex flex-row">
                            <svg role="img" className="w-[30px] h-[25px] fill-[#252B42]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                            <svg role="img" className="w-[30px] h-[30px] fill-[#252B42]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                            <svg role="img" className="w-[30px] h-[30px] fill-[#252B42]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
                        </div>
                    </div>

                    <div className="w-[415px] h-[280px] flex">
                        <div className="bg-yeniden z-10 bg-cover bg-center bg-no-repeat absolute w-[571px] h-[826px] mt-[-196px] ml-[34px]"></div>
                        <Circle color="#e2c9ca" className="w-[484px] h-[484px] ml-[58px] fill-[#e2c9ca] absolute z-0 mt-[-90px]"></Circle>
                        <Circle color="#e2c9ca" className="w-[77px] h-[77px] fill-[#e2c9ca] absolute z-0 mt-[11px]"></Circle>
                        <Circle color="#e2c9ca" className="w-[30px] h-[30px] fill-[#e2c9ca] absolute z-0 mt-[157px] ml-[555px]"></Circle>
                        <Circle color="#e2c9ca" className="w-[15px] h-[15px] fill-[#e2c9ca] absolute z-0 mt-[77px] ml-[576px]"></Circle>
                    </div>
                </div>
            </div>

            <div className="w-full h-[814px]">
                <div className="w-[1050px] h-[841px] ml-[195px] pt-[112px] pb-[112px] gap-[80px] mt-6">
                    <div className="w-[633px] h-[134px] flex flex-col gap-[10px] text-nowrap text-center">
                        <h6 className="w-[132px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#252B42] ml-[450px]">VISIT OUR OFFICE</h6>
                        <h2 className="w-[531px] h-[100px] font-montserrat font-bold text-4xl tracking-[0.2px] text-[#252B42] ml-[250px]">We help small businesses<br></br>with big ideas</h2>
                    </div>

                    <div className="w-[985px] h-[403px] flex flex-row">
                        <div className="w-[327px] h-[343px]">
                            <div className="w-[328px] h-[343px] mt-[50px] mb-[50px] mr-[40px] ml-[70px] bg-[#FFFFFF] flex flex-col">
                                <Phone color="#23A6F0" className="w-[72px] h-[72px]" />
                            </div>
                            <div className="w-[216px] h-[48px] flex flex-col mt-[-300px]">
                                <h6 className="w-[216px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#252B42]">georgia.young@example.com</h6>
                                <h6 className="w-[176px] h-[24px] mt-[14px] ml-[20px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#252B42]">georgia.young@ple.com</h6>
                            </div>

                            <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] flex text-nowrap ml-[55px] mt-[30px]">Get Support</h5>
                            <div className="w-[193px] h-[54px] rounded-[37px] border-[1px] pt-[15px] pb-[15px] pr-[36px] pl-[36px] gap-[10px] border-[#23A6F0] flex ml-[15px] mt-[20px]">
                                <div className="w-[121px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#23A6F0] text-nowrap">Submit Request</div>
                            </div>
                        </div>

                        <div className="w-[329px] h-[403px]">
                            <div className="w-[328px] h-[343px] mt-[50px] mb-[50px] mr-[10px] ml-[10px] bg-[#252B42] flex flex-col">
                                <MapPin color="#23A6F0" className="w-[72px] h-[72px] ml-[130px]" />
                            </div>
                            <div className="w-[216px] h-[48px] flex flex-col mt-[-300px]">
                                <h6 className="w-[216px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#FFFFFF] ml-[70px]">georgia.young@example.com</h6>
                                <h6 className="w-[176px] h-[24px] mt-[14px] ml-[80px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#FFFFFF]">georgia.young@ple.com</h6>
                            </div>

                            <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#FFFFFF] flex text-nowrap ml-[115px] mt-[30px]">Get Support</h5>
                            <div className="w-[193px] h-[54px] rounded-[37px] border-[1px] pt-[15px] pb-[15px] pr-[36px] pl-[36px] gap-[10px] border-[#23A6F0] flex ml-[80px] mt-[20px]">
                                <div className="w-[121px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#23A6F0] text-nowrap">Submit Request</div>
                            </div>
                        </div>

                        <div className="w-[329px] h-[343px]">
                            <div className="w-[328px] h-[343px] mt-[50px] mb-[50px] mr-[40px] ml-[180px] bg-[#FFFFFF] flex flex-col">
                                <Mail color="#23A6F0" className="w-[72px] h-[72px]" />
                            </div>
                            <div className="w-[216px] h-[48px] flex flex-col mt-[-300px] ml-[100px]">
                                <h6 className="w-[216px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#252B42]">georgia.young@example.com</h6>
                                <h6 className="w-[176px] h-[24px] mt-[14px] ml-[20px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#252B42]">georgia.young@ple.com</h6>
                            </div>

                            <h5 className="w-[100px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] flex text-nowrap ml-[160px] mt-[30px]">Get Support</h5>
                            <div className="w-[193px] h-[54px] rounded-[37px] border-[1px] pt-[15px] pb-[15px] pr-[36px] pl-[36px] gap-[10px] border-[#23A6F0] flex ml-[120px] mt-[20px]">
                                <div className="w-[121px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#23A6F0] text-nowrap">Submit Request</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[348px] bg-[#FFFFFF]">
                <Undo color="#23A6F0" className="w-[100px] h-[100px] mt-[-6px] ml-[670px] -rotate-45" />

                <div className="w-[1050px] h-[348px] ml-[195px] pt-[80px] pb-[80px] gap-[96px]">
                    <div className="w-[607px] h-[188px] gap-[36px]">
                        <div className="w-[272px] h-[188px] gap-[16px] flex flex-col text-nowrap">
                            <h6 className="w-[239px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-[380px] mt-[-80px]">WE CAN'T WAIT TO MEET YOU</h6>
                            <h2 className="w-[272px] h-[80px] font-montserrat font-bold text-6xl tracking-[0.2px] text-[#252B42] ml-[360px]">Let's Talk</h2>
                            <div className="w-[186px] h-[52px] gap-[10px] rounded-[5px] pt-[15px] pb-[15px] pr-[40px] pl-[40px] bg-[#23A6F0] ml-[410px]">
                                <div className="w-[106px] h-[22px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#FFFFFF]">Try It Free Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;