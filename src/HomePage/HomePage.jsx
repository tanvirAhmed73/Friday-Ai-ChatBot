import React from 'react';
import HomeLeftNavbar from '../HomeLeftNavbar/HomeLeftNavbar';
import HomeRightView from '../HomeRightView/HomeRightView';

const HomePage = () => {
    return (
        <div className='flex h-screen'>
            <div className='w-[30%]'>
                <HomeLeftNavbar />
            </div>
            <div className=" w-[70%] border-l-4 border-gray-900">
                <HomeRightView />
            </div>
        </div>
    );
};

export default HomePage;