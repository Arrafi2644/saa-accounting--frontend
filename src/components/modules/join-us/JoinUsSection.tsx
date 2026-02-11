"use client "
import JoinUsForm from './JoinUsForm';
import WhyRegister from './WhyRegister';

const JoinUsSection = () => {
    return (
        <div className='px-4 md:px-6 py-20 bg-[#FBFBFC]'>
            <div className=' flex flex-col lg:flex-row gap-6  container mx-auto  relative'>
                <div className=''>
                    <JoinUsForm />
                </div>
                <div className=''>
                    <WhyRegister />
                </div>
            </div>
        </div>
    );
};

export default JoinUsSection;