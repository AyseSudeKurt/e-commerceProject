import React from 'react';

function Footer() {
    return (
        <footer className='w-full h-[488px] bg-[#FFFFFF]'>
            <div className='w-full h-[142px] bg-[#FAFAFA]'>
                <div className='w-[1050px] h-[138px] ml-[195px] py-10'>
                    <div className='w-[1049.5px] h-[58px] gap-[577.5px] items-baseline	flex'>
                        <div className='w-[236px] h-[58px] gap-2.5'>
                            <p className='w-[108px] h-[32px] top-[13px] font-montserrat font-bold text-2xl tracking-[0.1px] text-[#252B42] flex'>Bandage</p>
                        </div>

                        <div className='w-[236px] h-[24px]'>
                            <div className='w-[112px] h-[24px] gap-[20px] flex justify-end'>
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path fill="#23A6F0" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path fill="#23A6F0" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="#23A6F0" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='w-[1057px] h-[0px] top-[138px] left-[195px] mx-auto '></hr>

            <div className='w-full h-[272px] top-[142px] bg-[#FFFFFF]'>
                <div className='w-[1050px] h-[270px] flex ml-[195px] pt-[50px] pb-[50px]'>
                    <div className='flex flex-row w-[1041px] h-[170px] gap-[30px]'>
                        <div className='w-[148px] h-[170px] gap-[20px] flex text-nowrap flex-col'>
                            <h5 className='font-montserrat w-[119px] h-[24px] font-bold text-base tracking-[0.1px] text-[#252B42]'>Company Info</h5>
                            <a className='w-[67px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>About Us</a>
                            <a className='w-[50px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Carrier</a>
                            <a className='w-[97px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>We are hiring</a>
                            <a className='w-[33px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Blog</a>
                        </div>

                        <div className='w-[148px] h-[170px] gap-[20px] flex text-nowrap flex-col'>
                            <h5 className='font-montserrat w-[45px] h-[24px] font-bold text-base tracking-[0.1px] text-[#252B42]'>Legal</h5>
                            <a className='w-[67px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>About Us</a>
                            <a className='w-[50px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Carrier</a>
                            <a className='w-[97px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>We are hiring</a>
                            <a className='w-[33px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Blog</a>
                        </div>

                        <div className='w-[148px] h-[170px] gap-[20px] flex text-nowrap flex-col'>
                            <h5 className='font-montserrat w-[72px] h-[24px] font-bold text-base tracking-[0.1px] text-[#252B42]'>Features</h5>
                            <a className='w-[142px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Business Marketing</a>
                            <a className='w-[97px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>User Analytic</a>
                            <a className='w-[68px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Live Chat</a>
                            <a className='w-[134px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Unlimited Support</a>
                        </div>

                        <div className='w-[148px] h-[170px] gap-[20px] flex text-nowrap flex-col'>
                            <h5 className='font-montserrat w-[86px] h-[24px] font-bold text-base tracking-[0.1px] text-[#252B42]'>Resources</h5>
                            <a className='w-[102px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>IOS & Android</a>
                            <a className='w-[106px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Watch a Demo</a>
                            <a className='w-[79px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>Customers</a>
                            <a className='w-[25px] h-[24px] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>API</a>
                        </div>

                        <div className='w-[321px] h-[131px] gap-[20px] flex text-nowrap flex-col '>
                            <h5 className='font-montserrat w-[103px] h-[24px] font-bold text-base tracking-[0.1px] text-[#252B42]'>Get In Touch</h5>
                            <div className='flex flex-row'>
                                <input type="email" placeholder='Your Email' className='w-[321px] h-[57px] rounded-[5px] border-solid border-[#E6E6E6] bg-[#F9F9F9]'></input>
                                <button className='w-[117px] h-[58px] left-[58px] text-white font-montserrat text-sm tracking-[0.2px] bg-main-blue'>Subscribe</button>
                            </div>
                            <p className='font-montserrat w-[155px] h-[28px] top-[59px] left-0.5 font-normal text-sm tracking-[0.2px] text-[#737373]'>Lore imp sum dolor Amit</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-fit h-[74px] top-[414px] bg-[#FAFAFA]'>
                <div className='w-[1050px] h-[74px] ml-[195px] py-6 '>
                    <div className='w-[600px] h-[24px] gap-[231px] flex'>
                        <h6 className='w-[336px] h-[24px] font-montserrat font-bold text-base tracking-[0.2px] text-[#737373] flex text-nowrap'>Made With Love By Finland All Right Reserved </h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 