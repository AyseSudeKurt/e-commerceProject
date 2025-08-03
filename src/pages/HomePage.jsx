import React from 'react';
import { Circle, Clock, ChartArea, ChevronRight } from 'lucide-react';

function HomePage() {
    return (
        <div>
            <div className='w-full h-[770px] bg-[#FAFAFA]'>
                <div className='w-[1124px] h-[824px] flex justify-center py-20  ml-[120px]'>
                    <div className='w-[1050px] h-[610px]  flex justify-center flex-col'>
                        <div className='w-[607px] h-[62px] top-[80px]  gap-8  ml-[30px] space-y-3'>
                            <h2 className='w-[187px] h-[32px] font-montserrat font-bold text-2xl tracking-[0.1px] ml-[400px] text-[#252B42]'>EDITOR’S PICK</h2>
                            <p className='w-[342px] h-[20px] font-montserrat font-normal text-sm tracking-[0.2px] ml-[340px] text-[#737373]'>Problems trying to resolve the conflict between </p>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='w-[1050px] h-[500px]  flex flex-row gap-8'>
                            <div className='w-[510px] h-[500px] bg-cover1 bg-no-repeat bg-cover bg-center'>
                                <div className='w-[170px] h-[48px] bg-[#FFFFFF] ml-[31px] mt-[426px]'>
                                    <h2 className='w-[40px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-[64px] py-3'>MEN</h2>
                                </div>
                            </div>
                            <div className='w-[240px] h-[500px] bg-cover2 bg-no-repeat bg-cover bg-center bg-top'>
                                <div className='w-[136px] h-[48px] bg-[#FFFFFF] ml-[48px] mt-[426px] top-[434px] left-[21px]'>
                                    <h2 className='w-[69px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-[35px] py-3 pr-4'>WOMEN</h2>
                                </div>
                            </div>
                            <div className='w-[240px] h-[500px] flex flex-col gap-4'>
                                <div className='w-[240px] h-[242px] bg-cover3 bg-no-repeat bg-center bg-cover'>
                                    <div className='w-[170px] h-[48px] bg-white my-3 mx-6 mt-[171px] left-[14px]'>
                                        <h2 className='w-[118px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] py-3 ml-[25px]'>ACCESSORIES</h2>
                                    </div>
                                </div>
                                <div className='w-[240px] h-[242px] bg-cover4 bg-no-repeat bg-center bg-cover'>
                                    <div className='w-[120px] h-[48px] bg-white my-3 mx-6 mt-[176px] left-[18px] gap-[10px]'>
                                        <h2 className='w-[40px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] py-3 ml-[40px]'>KIDS</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-full h-[1652px] bg-[#FFFFFF] flex justify-center'>
                <div className='w-[1124px] h-[1652px] ml-[195px] py-20 gap-[80px] flex flex-col'>
                    <div className='w-[692px] h-[102px] ml-[150px]'>
                        <div className='w-[691px] h-[102px] gap-[10px] flex flex-col'>
                            <h2 className='w-[191px] h-[30px] font-montserrat text-xl font-normal tracking-[0.2px] text-[#737373] ml-[230px]'>Featured Products</h2>
                            <h3 className='w-[309px] h-[32px] font-montserrat font-bold text-2xl tracking-[0.1px] text-[#252B42] ml-[170px]'>BESTSELLER PRODUCTS</h3>
                            <p className='w-[347px] h-[20px] font-montserrat font-normal text-sm tracking-[0.2px] text-[#737373] ml-[155px]'>Problems trying to resolve the conflict between </p>
                        </div>
                    </div>


                    <div className='w-[1049px] h-[615px] bg-[#FFFFFF] transform -translate-x-10 flex flex-row gap-8'>
                        <div className='w-[238px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b1 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>

                        <div className='w-[241px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b2 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[240px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b3 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[240px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b4 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='w-[1049px] h-[615px] bg-[#FFFFFF] transform -translate-x-10 flex flex-row gap-8'>
                        <div className='w-[238px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b5 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>

                        <div className='w-[241px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b6 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[240px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b7 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[240px] h-[615px] bg-[#FFFFFF]'>
                            <div className='w-[239px] h-[427px] bg-b8 bg-no-repeat bg-cover bg-center flex flex-col items-end'></div>
                            <div className='w-[239px] h-[188px] pt-[25px] pb-[35px] pr-[25px] pl-[25px] gap-[10px] flex flex-col text-nowrap'>
                                <h5 className='w-[131px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#252B42] ml-5'>Graphic Design</h5>
                                <a className='w-[146px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] ml-3'>English Department</a>
                                <div className='w-[108px] h-[34px] py-1	px-1 flex flex-row gap-[5px] ml-6'>
                                    <h5 className='w-[52px] h-[24px] font-bold text-base tracking-[0.1px] text-[#BDBDBD]'>$16.48</h5>
                                    <h5 className='w-[45px] h-[24px] font-montserrat font-bold text-base tracking-[0.1px] text-[#23856D]'>$6.48</h5>
                                </div>
                                <div className='w-[82.33px] h-[16px] gap-[6.08px] flex flex-row ml-9'>
                                    <Circle className='w-[16px] h-[16px] text-[#23A6F0] fill-[#23A6F0]' />
                                    <Circle className='w-[16px] h-[16px] text-[#23856D] fill-[#23856D]' />
                                    <Circle className='w-[16px] h-[16px] text-[#E77C40] fill-[#E77C40]' />
                                    <Circle className='w-[16px] h-[16px] text-[#252B42] fill-[#252B42]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className="w-full h-[709px] border-[#FFFFFF] bg-[#23856D] rounded-[5px] border-solid">
                <div className='w-[1036px] h-[711px] pl-[232.5px] py-28 gap-[80px]'>
                    <div className='w-[1049px] h-[599px] gap-[30px] flex flex-row'>
                        <div className='w-[509px] h-[432px] mt-[60px] gap-[30px] text-[#FFFFFF]'>
                            <h5 className='w-[154px] h-[30px] font-montserrat text-xl font-normal text-[#FFFFFF]'>SUMMER 2020</h5>
                            <br></br>
                            <h1 className='w-[509px] h-[160px] font-montserrat font-bold leading-[80px] text-6xl'>Vita Classic Product</h1>
                            <br></br>
                            <br></br>
                            <h4 className='w-[341px] h-[40px] font-montserrat font-normal text-sm tracking-[0.2px]'>We know how large objects will act, We know how are objects will act, We know</h4>
                            <br></br>
                            <div className='w-[292px] h-[52px] gap-[34px] text-[#FFFFFF] flex flex-row items-baseline'>
                                <h5 className='w-[77px] h-[32px] font-montserrat font-bold text-2xl tracking-[0.1px]'>$16.48</h5>
                                <button className='bg-[#2DC071] w-[181px] h-[52px] rounded-[5px] py-4	px-10'>
                                    <p className='w-[101px] h-[22px] font-montserrat font-bold text-sm tracking-[0.2px] flex text-nowrap'>ADD TO CART</p>
                                </button>
                            </div>
                        </div>

                        <div className="w-[510px] h-[685px] overflow-hidden">
                            <img
                                src="/images/cr2.png"
                                alt="Product"
                                className="w-[450px] h-[597px] object-top rounded-[5px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[682px] bg-[#FFFFFF]'>
                <div className='w-full h-[682px] gap-[30px] flex flex-row'>
                    <div className='w-[704px] h-[682px]'>
                        <div className='w-[704px] h-[682px] mt-[2px] ml-[-37px] overflow-hidden'>
                            <div className='w-[632px] h-[491.99px] mt-[117px] ml-[36px]'>
                                <img src="/images/last1.png" alt="pr1" className='w-[725px] h-[774px] mt-[-211px] ml-[-10px] object-cover'></img>
                            </div>
                        </div>
                    </div>

                    <div className='w-[573px] h-[326px] gap-[30px] flex flex-col mt-[200px]'>
                        <h5 className='w-[122px] h-[24px] text-[#BDBDBD] font-montserrat font-bold text-base tracking-[0.1px] whitespace-nowrap'>SUMMER 2020</h5>
                        <h1 className='w-[389px] h-[100px] font-montserrat font-bold text-4xl tracking-[0.2px] text-[#252B42]'>Part of the Neural Universe</h1>
                        <h4 className='w-[376px] h-[60px] font-montserrat font-normal text-xl tracking-[0.2px] text-[#737373]'>We know how large objects will act,<br></br>but things on a small scale.</h4>
                        <div className='w-[339px] h-[52px] gap-[10px] flex flex-row items-baseline	'>
                            <button className='w-[151px] h-[52px] rounded-[5px] py-1 px-10 bg-[#2DC071] gap-[10px] text-white font-montserrat font-bold whitespace-nowrap'>BUY NOW</button>
                            <button className='w-[171px] h-[52px] border-solid rounded-[5px] py-4 px-10 border-[#2DC071] bg-white gap-[10px] font-montserrat font-bold text-[#2DC071] whitespace-nowrap'>READ MORE</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className='w-full h-[1044px] bg-[#FFFFFF]'>
                <div className='w-[1050px] h-[1044px] ml-[195px] mt-[112px] mb-[112px] gap-[80px] flex flex-col'>
                    <div className='w-[692px] h-[134px]'>
                        <div className='w-[691px] h-[134px] gap-[10px] flex flex-col ustify-center whitespace-nowrap '>
                            <h6 className='w-[114px] h-[24px] font-montserrat font-bold text-sm	tracking-[0.2px] text-main-blue ml-[400px]'>Practice Advice</h6>
                            <h3 className='w-[309px] h-[50px] font-montserrat font-bold text-4xl tracking-[0.2px] text-[#252B42] ml-[320px]'>Featured Posts</h3>
                            <p className='w-[469px] h-[40px] font-montserrat font-normal text-sm tracking-[0.2px] text-[#737373] ml-[220px] flex text-center'>Problems trying to resolve the conflict between<br></br>the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                    </div>

                    <div className='w-[1045px] h-[606px] gap-[30px] flex flex-row justify-center ml-1'>
                        <div className='w-[328px] h-[606px]'>
                            <div className='w-[348px] h-[606px] bg-[#FFFFFF] '>
                                <div className='w-[348px] h-[300px] bg-c1 bg-no-repeat bg-cover '>
                                    <div className='w-[56px] h-[26px] top-[20px] left-[20px] rounded-[3px] mr-[10px] ml-[10px] bg-[#E74040] text-white flex justify-center font-montserrat font-bold '>NEW</div>
                                </div>

                                <div className='w-[348px] h-[306px] pt-[25px] pr-[25px] pb-[35px] pl-[25px] gap-[10px] flex flex-col'>
                                    <div className='w-[160px] h-[16px] gap-[15px] flex flex-row'>
                                        <p className='w-[45px] h-[16px] font-montserrat font-normal text-[#8EC2F2] text-xs	tracking-[0.2px]'>Google</p>
                                        <p className='w-[56px] h-[16px] font-montserrat font-normal text-[#737373] text-xs	tracking-[0.2px]'>Trending</p>
                                        <p className='w-[29px] h-[16px] font-montserrat font-normal text-[#737373] text-xs	tracking-[0.2px]'>New</p>
                                    </div>
                                    <h4 className='w-[247px] h-[60px] font-montserrat font-normal text-xl tracking-[0.2px] text-[#252B42]'>Loudest à la Madison #1<br></br>(L'integral)</h4>
                                    <p className='w-[280px] h-[60px] font-montserrat font-normal text-sm tracking-[0.2px] text-[#737373]'>We focus on ergonomics and meeting<br></br>you where you work. It's only a<br></br>keystroke away.</p>
                                    <div className='w-[298px] h-[46px] flex justify-between	pt-[15px] pb-[15px]'>
                                        <div className='flex flex-row items-center gap-[5px] w-auto h-[16px]'>
                                            <div className='w-[16px] h-[16px] flex flex-row'>
                                                <Clock className='w-[12.94px] h-[13.14px] text-main-blue mt-[1.53px] ml-[1.53px]' />
                                            </div>
                                            <div className='w-[79px] h-[16px] font-montserrat font-normal text-xs tracking-[0.2px] text-[#737373]'>22 April 2021</div>
                                        </div>
                                        <div className='w-[105px] h-[16px] gap-[5px] flex flew-row'>
                                            <ChartArea className='w-[16px] h-[14.67px] text-[#23856D]' />
                                            <p className='font-montserrat font-normal w-[84px] h-[16px] tracking-[0.2px] text-[#737373] text-xs'>10 comments</p>
                                        </div>
                                    </div>

                                    <div className='w-[101px] h-[24px] gap-[10px] flex flex-row'>
                                        <h6 className='w-[82px] h-[24px] fon font-bold text-sm tracking-[0.2px] text-[#737373]'>Learn More</h6>
                                        <ChevronRight className='w-[12px] h-[18px] text-main-blue' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[328px] h-[606px]'>
                            <div className='w-[348px] h-[606px] bg-[#FFFFFF] '>
                                <div className='w-[348px] h-[300px] bg-c2 bg-no-repeat bg-cover '>
                                    <div className='w-[56px] h-[26px] top-[20px] left-[20px] rounded-[3px] mr-[10px] ml-[10px] bg-[#E74040] text-white flex justify-center font-montserrat font-bold '>NEW</div>
                                </div>

                                <div className='w-[348px] h-[306px] pt-[25px] pr-[25px] pb-[35px] pl-[25px] gap-[10px] flex flex-col'>
                                    <div className='w-[160px] h-[16px] gap-[15px] flex flex-row'>
                                        <p className='w-[45px] h-[16px] font-montserrat font-normal text-[#8EC2F2] text-xs	tracking-[0.2px]'>Google</p>
                                        <p className='w-[56px] h-[16px] font-montserrat font-normal text-[#737373] text-xs	tracking-[0.2px]'>Trending</p>
                                        <p className='w-[29px] h-[16px] font-montserrat font-normal text-[#737373] text-xs	tracking-[0.2px]'>New</p>
                                    </div>
                                    <h4 className='w-[247px] h-[60px] font-montserrat font-normal text-xl tracking-[0.2px] text-[#252B42]'>Loudest à la Madison #1<br></br>(L'integral)</h4>
                                    <p className='w-[280px] h-[60px] font-montserrat font-normal text-sm tracking-[0.2px] text-[#737373]'>We focus on ergonomics and meeting<br></br>you where you work. It's only a<br></br>keystroke away.</p>
                                    <div className='w-[298px] h-[46px] flex justify-between	pt-[15px] pb-[15px]'>
                                        <div className='flex flex-row items-center gap-[5px] w-auto h-[16px]'>
                                            <div className='w-[16px] h-[16px] flex flex-row'>
                                                <Clock className='w-[12.94px] h-[13.14px] text-main-blue mt-[1.53px] ml-[1.53px]' />
                                            </div>
                                            <div className='w-[79px] h-[16px] font-montserrat font-normal text-xs tracking-[0.2px] text-[#737373]'>22 April 2021</div>
                                        </div>
                                        <div className='w-[105px] h-[16px] gap-[5px] flex flew-row'>
                                            <ChartArea className='w-[16px] h-[14.67px] text-[#23856D]' />
                                            <p className='font-montserrat font-normal w-[84px] h-[16px] tracking-[0.2px] text-[#737373] text-xs'>10 comments</p>
                                        </div>
                                    </div>

                                    <div className='w-[101px] h-[24px] gap-[10px] flex flex-row'>
                                        <h6 className='w-[82px] h-[24px] fon font-bold text-sm tracking-[0.2px] text-[#737373]'>Learn More</h6>
                                        <ChevronRight className='w-[12px] h-[18px] text-main-blue' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[329px] h-[606px]'>
                            <div className='w-[348px] h-[606px] bg-[#FFFFFF] '>
                                <div className='w-[348px] h-[300px] bg-c3 bg-no-repeat bg-cover '>
                                    <div className='w-[56px] h-[26px] top-[20px] left-[20px] rounded-[3px] mr-[10px] ml-[10px] bg-[#E74040] text-white flex justify-center font-montserrat font-bold '>NEW</div>
                                </div>

                                <div className='w-[348px] h-[306px] pt-[25px] pr-[25px] pb-[35px] pl-[25px] gap-[10px] flex flex-col'>
                                    <div className='w-[160px] h-[16px] gap-[15px] flex flex-row'>
                                        <p className='w-[45px] h-[16px] font-montserrat font-normal text-[#8EC2F2] text-xs	tracking-[0.2px]'>Google</p>
                                        <p className='w-[56px] h-[16px] font-montserrat font-normal text-[#737373] text-xs	tracking-[0.2px]'>Trending</p>
                                        <p className='w-[29px] h-[16px] font-montserrat font-normal text-[#737373] text-xs	tracking-[0.2px]'>New</p>
                                    </div>
                                    <h4 className='w-[247px] h-[60px] font-montserrat font-normal text-xl tracking-[0.2px] text-[#252B42]'>Loudest à la Madison #1<br></br>(L'integral)</h4>
                                    <p className='w-[280px] h-[60px] font-montserrat font-normal text-sm tracking-[0.2px] text-[#737373]'>We focus on ergonomics and meeting<br></br>you where you work. It's only a<br></br>keystroke away.</p>
                                    <div className='w-[298px] h-[46px] flex justify-between	pt-[15px] pb-[15px]'>
                                        <div className='flex flex-row items-center gap-[5px] w-auto h-[16px]'>
                                            <div className='w-[16px] h-[16px] flex flex-row'>
                                                <Clock className='w-[12.94px] h-[13.14px] text-main-blue mt-[1.53px] ml-[1.53px]' />
                                            </div>
                                            <div className='w-[79px] h-[16px] font-montserrat font-normal text-xs tracking-[0.2px] text-[#737373]'>22 April 2021</div>
                                        </div>
                                        <div className='w-[105px] h-[16px] gap-[5px] flex flew-row'>
                                            <ChartArea className='w-[16px] h-[14.67px] text-[#23856D]' />
                                            <p className='font-montserrat font-normal w-[84px] h-[16px] tracking-[0.2px] text-[#737373] text-xs'>10 comments</p>
                                        </div>
                                    </div>

                                    <div className='w-[101px] h-[24px] gap-[10px] flex flex-row'>
                                        <h6 className='w-[82px] h-[24px] fon font-bold text-sm tracking-[0.2px] text-[#737373]'>Learn More</h6>
                                        <ChevronRight className='w-[12px] h-[18px] text-main-blue' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;