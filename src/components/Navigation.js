import React from 'react';

const Navigation = () => {

    const items = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

    return (
        <div className="fixed navigation w-full py-0.5">
            <div className="h-10">
                <div className="container mx-auto h-full flex flex-wrap content-center">
                    <div className="block md:hidden flex-grow h-full">
                        <a href="/" className="h-full flex float-left md:float-none pl-4 md:pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="#fff" viewBox="0 0 24 24" height="20px" className="opacity-80 block m-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex-grow h-full">
                        <a href="/" className="h-full flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.008 560.035" fill="#f5f5f7" height="20px" className="opacity-80 block m-auto">
                                <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"/>
                            </svg>
                        </a>
                    </div>
                    {items.map((element) => {
                        return(
                            <div className="flex-grow h-full text-center hidden md:block" key={element}>
                                <a href="/" className="h-full flex">
                                    <p className="text-sm block m-auto font-light" style={{color: "#f5f5f7"}}>{element}</p>
                                </a>
                            </div>
                        );
                    })}
                    <div className="flex-grow h-full hidden md:block">
                        <a href="/" className="h-full flex">
                            <svg width="20px" fill="#f5f5f7" className="opacity-80 block m-auto">
                                <path d="M17.512,29.417l-4.786-4.788a7.068,7.068,0,1,0-.777.778l4.785,4.788a.55.55,0,1,0,.777-.777ZM1.427,20.054a5.946,5.946,0,1,1,5.946,5.954A5.957,5.957,0,0,1,1.427,20.054Z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex-grow h-full">
                        <a href="/" className="h-full flex float-right md:float-none pr-4 md:pr-0">
                            <svg width="20px" fill="#f5f5f7" className="opacity-80 block m-auto">
                                <path d="M14.5,14H12.712a4.227,4.227,0,0,0-8.424,0H2.5A2.5,2.5,0,0,0,0,16.5v11A2.5,2.5,0,0,0,2.5,30h12A2.5,2.5,0,0,0,17,27.5v-11A2.5,2.5,0,0,0,14.5,14Zm-6-2.875A3.243,3.243,0,0,1,11.712,14H5.288A3.243,3.243,0,0,1,8.5,11.125ZM16,27.5A1.5,1.5,0,0,1,14.5,29H2.5A1.5,1.5,0,0,1,1,27.5v-11A1.5,1.5,0,0,1,2.5,15h12A1.5,1.5,0,0,1,16,16.5Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;