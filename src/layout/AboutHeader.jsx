import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutHeader = () => {
    return (
        <header className="w-full h-[91px] ">
            <div className='w-full h-[91px] flex flex-row'>
                <div className='w-[187px] h-[58px] mt-[40px] ml-[216px] font-montserrat font-bold text-2xl tracking-[0.1px] text-[#252B42]'>Bandage</div>
                <div className='w-[815px] h-[58px] mt-[30px] ml-[150px] flex flex-row'>
                    <ul className='w-[275px] h-[24px] mt-[17px] gap-[21px] flex'>
                        <li className='w-[43px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373]'><a href='/'>Home</a></li>
                        <li className='w-[59px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373]'>Product</li>
                        <li className='w-[52px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373]'><a href="/pricing">Pricing</a></li>
                        <li className='w-[58px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373]'><a href='/contact'>Contact</a></li>
                    </ul>

                    <div className='w-[300px] h-[52px] ml-[350px] gap-[45px] mt-[8px] flex flex-row'>
                        <div className='w-[43px] h-[22px] ml-[-130px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#23A6F0] mt-3'>Login</div>
                        <div className='w-[214px] h-[52px] rounded-[5px] bg-[#23A6F0] flex mb-8'>
                            <p className='w-[137px] h-[22px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#FFFFFF] flex text-nowrap pt-[15px] pr-[25px] pb-[15px] pl-[15px]'>Become a Member</p>
                            <ArrowRight className='w-[20px] h-[20px] text-[#FFFFFF] ml-8 mt-4' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AboutHeader;
