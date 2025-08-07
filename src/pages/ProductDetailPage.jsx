import React from 'react';
import { Circle } from 'lucide-react';

import 'flowbite';


const ProductDetailPage = () => {
    return (
        <div>
            <div className='w-fit h-[92px] pt-[24px] pb-[24px] bg-[#FAFAFA]'>
                <div className='w-[1033px] h-[44px] gap-[30px]'>
                    <div className='w-[509px] h-[44px] gap-[5px] flex flex-row'>
                        <div className='w-[119px] h-[44px] pt-[10px] pb-[10px] gap-[15px] flex ml-[135px]'>
                            <a href="/" className='w-[43px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#252B42]'>Home</a>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z" fill="#BDBDBD" />
                            </svg>
                            <h6 className='w-[37px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#BDBDBD]'>Shop</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[598px] bg-[#FAFAFA]'>
                <div className='w-[1050px] h-[598px] ml-[195px] pb-[48px]'>
                    <div className='w-[1050px] h-[550px] gap-[30px] flex flex-row'>
                        <div className='w-[510px] h-[550px] border-none'>

                            <div id="default-carousel" className="relative w-full" data-carousel="slide">

                                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                    {/* Slide 1 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img
                                            src="/images/a10.jpg"
                                            className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            alt="Product 1"
                                        />
                                    </div>

                                    {/* Slide 2 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <img
                                            src="/images/b3.jpg"
                                            className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            alt="Product 2"
                                        />
                                    </div>
                                </div>

                                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                </div>

                                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                        <svg className="w-4 h-4 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </button>

                                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                        <svg className="w-4 h-4 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>

                        </div>

                        <div className='w-[510px] h-[471px] flex flex-col'>
                            <h4 className='w-[200px] h-[30px] mt-[11px] ml-[24px] font-montserrat font-normal text-xl text-[#252B42] tracking-[0.2px] flex'>Floating Phone</h4>

                            <div className='w-[221.07px] h-[24px] mt-[15px] ml-[24px] gap-[10px] flex flex-row'>
                                <div className='w-[130.07px] h-[22px] gap-[5px] flex flex-row '>
                                    <div className='w-[22.01px] h-[22.01px]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.1308 7.41927C19.0732 7.24946 18.967 7.10025 18.8256 6.99006C18.6841 6.87987 18.5134 6.81353 18.3347 6.79922L13.1055 6.38371L10.8427 1.3747C10.7706 1.21337 10.6534 1.07634 10.5052 0.980156C10.357 0.883971 10.1841 0.832739 10.0074 0.832642C9.83069 0.832545 9.65774 0.883587 9.50941 0.979609C9.36109 1.07563 9.24372 1.21253 9.17148 1.37378L6.90867 6.38371L1.67951 6.79922C1.50382 6.81314 1.33586 6.87738 1.19572 6.98425C1.05559 7.09113 0.949205 7.23612 0.88931 7.40187C0.829415 7.56762 0.818541 7.74712 0.857988 7.91889C0.897436 8.09066 0.985535 8.24743 1.11175 8.37044L4.97605 12.1375L3.60937 18.0555C3.56788 18.2347 3.58118 18.4221 3.64755 18.5936C3.71392 18.7651 3.8303 18.9127 3.98159 19.0172C4.13288 19.1217 4.31208 19.1783 4.49596 19.1797C4.67983 19.1811 4.85988 19.1272 5.01274 19.025L10.0071 15.6955L15.0014 19.025C15.1577 19.1288 15.3419 19.1822 15.5294 19.1781C15.7169 19.1739 15.8986 19.1125 16.0502 19.002C16.2017 18.8916 16.3158 18.7373 16.3771 18.5601C16.4383 18.3828 16.4438 18.1911 16.3929 18.0106L14.7152 12.1403L18.8758 8.39612C19.1482 8.15031 19.2482 7.7669 19.1308 7.41927Z" fill="#F3CD03" />
                                        </svg>
                                    </div>
                                    <div className='w-[22.01px] h-[22.01px]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.1308 7.41927C19.0732 7.24946 18.967 7.10025 18.8256 6.99006C18.6841 6.87987 18.5134 6.81353 18.3347 6.79922L13.1055 6.38371L10.8427 1.3747C10.7706 1.21337 10.6534 1.07634 10.5052 0.980156C10.357 0.883971 10.1841 0.832739 10.0074 0.832642C9.83069 0.832545 9.65774 0.883587 9.50941 0.979609C9.36109 1.07563 9.24372 1.21253 9.17148 1.37378L6.90867 6.38371L1.67951 6.79922C1.50382 6.81314 1.33586 6.87738 1.19572 6.98425C1.05559 7.09113 0.949205 7.23612 0.88931 7.40187C0.829415 7.56762 0.818541 7.74712 0.857988 7.91889C0.897436 8.09066 0.985535 8.24743 1.11175 8.37044L4.97605 12.1375L3.60937 18.0555C3.56788 18.2347 3.58118 18.4221 3.64755 18.5936C3.71392 18.7651 3.8303 18.9127 3.98159 19.0172C4.13288 19.1217 4.31208 19.1783 4.49596 19.1797C4.67983 19.1811 4.85988 19.1272 5.01274 19.025L10.0071 15.6955L15.0014 19.025C15.1577 19.1288 15.3419 19.1822 15.5294 19.1781C15.7169 19.1739 15.8986 19.1125 16.0502 19.002C16.2017 18.8916 16.3158 18.7373 16.3771 18.5601C16.4383 18.3828 16.4438 18.1911 16.3929 18.0106L14.7152 12.1403L18.8758 8.39612C19.1482 8.15031 19.2482 7.7669 19.1308 7.41927Z" fill="#F3CD03" />
                                        </svg>
                                    </div>
                                    <div className='w-[22.01px] h-[22.01px]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.1308 7.41927C19.0732 7.24946 18.967 7.10025 18.8256 6.99006C18.6841 6.87987 18.5134 6.81353 18.3347 6.79922L13.1055 6.38371L10.8427 1.3747C10.7706 1.21337 10.6534 1.07634 10.5052 0.980156C10.357 0.883971 10.1841 0.832739 10.0074 0.832642C9.83069 0.832545 9.65774 0.883587 9.50941 0.979609C9.36109 1.07563 9.24372 1.21253 9.17148 1.37378L6.90867 6.38371L1.67951 6.79922C1.50382 6.81314 1.33586 6.87738 1.19572 6.98425C1.05559 7.09113 0.949205 7.23612 0.88931 7.40187C0.829415 7.56762 0.818541 7.74712 0.857988 7.91889C0.897436 8.09066 0.985535 8.24743 1.11175 8.37044L4.97605 12.1375L3.60937 18.0555C3.56788 18.2347 3.58118 18.4221 3.64755 18.5936C3.71392 18.7651 3.8303 18.9127 3.98159 19.0172C4.13288 19.1217 4.31208 19.1783 4.49596 19.1797C4.67983 19.1811 4.85988 19.1272 5.01274 19.025L10.0071 15.6955L15.0014 19.025C15.1577 19.1288 15.3419 19.1822 15.5294 19.1781C15.7169 19.1739 15.8986 19.1125 16.0502 19.002C16.2017 18.8916 16.3158 18.7373 16.3771 18.5601C16.4383 18.3828 16.4438 18.1911 16.3929 18.0106L14.7152 12.1403L18.8758 8.39612C19.1482 8.15031 19.2482 7.7669 19.1308 7.41927Z" fill="#F3CD03" />
                                        </svg>
                                    </div>
                                    <div className='w-[22.01px] h-[22.01px]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.1308 7.41927C19.0732 7.24946 18.967 7.10025 18.8256 6.99006C18.6841 6.87987 18.5134 6.81353 18.3347 6.79922L13.1055 6.38371L10.8427 1.3747C10.7706 1.21337 10.6534 1.07634 10.5052 0.980156C10.357 0.883971 10.1841 0.832739 10.0074 0.832642C9.83069 0.832545 9.65774 0.883587 9.50941 0.979609C9.36109 1.07563 9.24372 1.21253 9.17148 1.37378L6.90867 6.38371L1.67951 6.79922C1.50382 6.81314 1.33586 6.87738 1.19572 6.98425C1.05559 7.09113 0.949205 7.23612 0.88931 7.40187C0.829415 7.56762 0.818541 7.74712 0.857988 7.91889C0.897436 8.09066 0.985535 8.24743 1.11175 8.37044L4.97605 12.1375L3.60937 18.0555C3.56788 18.2347 3.58118 18.4221 3.64755 18.5936C3.71392 18.7651 3.8303 18.9127 3.98159 19.0172C4.13288 19.1217 4.31208 19.1783 4.49596 19.1797C4.67983 19.1811 4.85988 19.1272 5.01274 19.025L10.0071 15.6955L15.0014 19.025C15.1577 19.1288 15.3419 19.1822 15.5294 19.1781C15.7169 19.1739 15.8986 19.1125 16.0502 19.002C16.2017 18.8916 16.3158 18.7373 16.3771 18.5601C16.4383 18.3828 16.4438 18.1911 16.3929 18.0106L14.7152 12.1403L18.8758 8.39612C19.1482 8.15031 19.2482 7.7669 19.1308 7.41927Z" fill="#F3CD03" />
                                        </svg>
                                    </div>
                                    <div className='w-[22.01px] h-[22.01px]'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.03166 12.1377L3.66498 18.0557C3.62266 18.2349 3.63536 18.4227 3.70143 18.5945C3.7675 18.7664 3.88387 18.9143 4.03533 19.0191C4.18679 19.1238 4.36631 19.1804 4.55043 19.1814C4.73456 19.1825 4.91474 19.1281 5.06743 19.0252L10.0618 15.6956L15.0561 19.0252C15.2123 19.1289 15.3966 19.1823 15.5841 19.1782C15.7716 19.1741 15.9533 19.1127 16.1049 19.0022C16.2564 18.8917 16.3705 18.7375 16.4317 18.5602C16.493 18.383 16.4985 18.1912 16.4476 18.0107L14.7699 12.1404L18.9305 8.39628C19.0638 8.27629 19.1589 8.11988 19.2042 7.94638C19.2495 7.77289 19.243 7.58992 19.1854 7.4201C19.1278 7.25029 19.0217 7.10107 18.8802 6.99091C18.7388 6.88075 18.5681 6.81448 18.3893 6.80029L13.1602 6.38386L10.8974 1.37485C10.8252 1.21356 10.7079 1.0766 10.5597 0.980493C10.4114 0.88439 10.2385 0.833252 10.0618 0.833252C9.88508 0.833252 9.71216 0.88439 9.56389 0.980493C9.41561 1.0766 9.29832 1.21356 9.22617 1.37485L6.96335 6.38386L1.7342 6.79937C1.55851 6.81329 1.39055 6.87753 1.25041 6.98441C1.11027 7.09128 1.00389 7.23627 0.943998 7.40202C0.884102 7.56777 0.873228 7.74727 0.912676 7.91904C0.952123 8.09081 1.04022 8.24758 1.16643 8.37059L5.03166 12.1377ZM7.64853 8.16972C7.81225 8.15682 7.96948 8.10012 8.10375 8.00555C8.23802 7.91098 8.34438 7.78203 8.41167 7.63222L10.0618 3.98071L11.7119 7.63222C11.7792 7.78203 11.8855 7.91098 12.0198 8.00555C12.1541 8.10012 12.3113 8.15682 12.475 8.16972L16.1183 8.45865L13.118 11.159C12.8575 11.3938 12.7539 11.7552 12.8492 12.0927L13.9985 16.1148L10.5718 13.83C10.4213 13.729 10.2443 13.6751 10.0631 13.6751C9.882 13.6751 9.70495 13.729 9.55454 13.83L5.97366 16.2175L6.93675 12.0478C6.97207 11.8944 6.96733 11.7346 6.92299 11.5836C6.87866 11.4326 6.79621 11.2955 6.6836 11.1856L3.89704 8.46874L7.64853 8.16972Z" fill="#F3CD03" />
                                        </svg>
                                    </div>

                                    <h6 className='w-[81px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373] flex'>10 Reviews</h6>
                                </div>
                            </div>

                            <h5 className='w-[108px] h-[32px] mt-[30px] ml-[24px] font-montserrat font-bold text-2xl tracking-[0.1px] text-[#252B42] '>$1,139.33</h5>

                            <div className="w-[161px] h-[24px] mt-[15px] ml-[24px] gap-[5px] flex">
                                <h6 className='w-[94px] h-[24px] font-montserrat font-bold text-sm tracking-[0.2px] text-[#737373]'>Availability :</h6>
                                <h6 className='w-[62px] h-[24px] font-montserrat font-bold text-sm tracking-[0.1px] text-[#23A6F0]'> In Stock</h6>
                            </div>

                            <p className='w-[464px] h-[60px] mt-[40px] ml-5 font-montserrat font-normal text-[#858585] text-sm	tracking-[0.2px]'>Met minim Mollie non desert Alamo est sit cliquey dolor
                                do met sent. RELIT official consequent door ENIM RELIT Mollie.
                                Excitation venial consequent sent nostrum met.</p>

                            <hr className='w-[464px] h-[0px] mt-[20px] ml-[25px] border-[1px] border-[#BDBDBD]'></hr>

                            <div className='w-[150px] h-[30px] gap-[10px] flex flex-row ml-[24px] mt-[20px]'>
                                <Circle className='w-[30px] h-[30px] text-[#23A6F0] fill-[#23A6F0]' />
                                <Circle className='w-[30px] h-[30px] text-[#23856D] fill-[#23856D]' />
                                <Circle className='w-[30px] h-[30px] text-[#E77C40] fill-[#E77C40]' />
                                <Circle className='w-[30px] h-[30px] text-[#252B42] fill-[#252B42]' />
                            </div>

                            <div className='w-[298px] h-[44px] mt-[30px] ml-[24px] gap-[10px]'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
