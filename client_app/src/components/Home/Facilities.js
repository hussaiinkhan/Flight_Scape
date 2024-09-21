import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
const Facilities = () => {
    return (
        <div className='hidden lg:flex flex-col justify-evenly  h-full px-4 mx-auto'>
            {/* Facilities Card */}
            <div className='rounded-xl relative min-w-[200px] max-w-[300px]'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-end pb-4'>
                    <p className='font-bold text-2xl px-2'>
                        <DirectionsCarIcon />
                    </p>
                    <p className='px-2'>CAR RENTALS</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3999194/pexels-photo-3999194.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Car Rentals" />
            </div>

            {/* Facilities Card */}
            <div className='rounded-xl relative min-w-[200px] max-w-[300px]'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-end pb-4'>
                    <p className='font-bold text-2xl px-2'>
                        <HouseIcon />
                    </p>
                    <p className='px-2'>HOTELS</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/8725595/pexels-photo-8725595.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Hotels" />
            </div>
            {/* Facilities Card */}
            <div className='rounded-xl relative min-w-[200px] max-w-[300px]'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-end pb-4'>
                    <p className='font-bold text-2xl px-2'>
                        <BeachAccessIcon />
                    </p>
                    <p className='px-2'>TRAVEL PACKAGES</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3278939/pexels-photo-3278939.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Travel Packages" />
            </div>
            {/* Facilities Card */}
            <div className='rounded-xl relative min-w-[200px] max-w-[300px]'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-end pb-4'>
                    <p className='font-bold text-2xl px-2'>
                        <DirectionsCarIcon />
                    </p>
                    <p className='px-2'>CAR RENTALS</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3999194/pexels-photo-3999194.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Car Rentals" />
            </div>
            {/* Facilities Card */}
            <div className='rounded-xl relative min-w-[200px] max-w-[300px]'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-end pb-4'>
                    <p className='font-bold text-2xl px-2'>
                        <HouseIcon />
                    </p>
                    <p className='px-2'>HOTELS</p>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/8725595/pexels-photo-8725595.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Hotels" />
            </div>
        </div>
    )
}

export default Facilities