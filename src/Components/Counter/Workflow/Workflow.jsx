import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-blue-700 mt-36'>
            <div className='container mx-auto text-center p-26 text-white'>
                <h2 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p className='text-gray-200 mt-3 mb-6'>Join thousands of professionals who are already using Digital tools to work smarter. <br /> Start your free trial today.</p>
               <div className='flex gap-3 justify-center items-center '>
                 <button className='btn text-blue-900 rounded-full'>Explore Products</button>
                <button className='btn  text-white bg-transparent rounded-full'>View Pricing</button>
               </div>
                <p className='text-gray-300 pt-5'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;