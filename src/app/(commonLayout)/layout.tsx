import Footer from '@/components/modules/shared/Footer';
import Navbar from '@/components/modules/shared/Navbar';
import React from 'react';

const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <main className="container mx-auto px-4 min-h-dvh">
            {children}
            </main>
            <Footer/>
        </div>
    );
};

export default CommonLayout;