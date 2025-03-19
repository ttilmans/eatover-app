import React from 'react';
import Link from 'next/link';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {
    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 p-6 flex flex-col items-center'>
            <LanguageSelector />
            <h1 className='text-4xl font-bold mt-6'>Welcome to Eatover</h1>
            <p className='text-lg mt-2'>Discover amazing home dining experiences.</p>
            <div className='flex gap-4 mt-6'>
                <Link href='/meals' className='px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700'>Explore Meals</Link>
                <Link href='/bookings' className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700'>Your Bookings</Link>
            </div>
        </div>
    );
}