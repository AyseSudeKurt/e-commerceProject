import React from 'react';

function HomePage() {
    return (
        <div>
            <div className='w-full h-[770px] bg-white'>
                <div className='ml-[258.5px] mt-[80px] '>
                    <h2 className='ml-[258.5px] w-[187px] h-[32px] font-montserrat font-bold text-[#252B42] text-2xl leading-10	'>EDITOR’S PICK</h2>
                    <p className='w-[342px] h-[20px] font-montserrat font-normal text-sm text-[#737373] ml-[190.5px] leading-10	'>Problems trying to resolve the conflict between </p>
                </div>

                <div className='w-[1050px] h-[500px] mt-[100px]  ml-[37px] gap-[30px] flex'>
                    <div className='w-[510px] h-[500px] bg-cover1 bg-no-repeat ml-[37px] '>
                        <h2 className='bg-white w-[170px] h-[48px] mt-[426px] ml-[31px] font-montserrat font-bold text-[#252B42] text-base'>MEN</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;