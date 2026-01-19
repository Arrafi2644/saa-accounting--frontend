import ReduxProvider from '@/providers/ReduxProvider';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' w-full flex items-center justify-center min-h-dvh'>
            <ReduxProvider>
                {children}
            </ReduxProvider>
        </div>
    );
};

export default AuthLayout;