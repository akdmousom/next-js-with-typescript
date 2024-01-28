import React from 'react';

const AboutBanner = (props:{title: String}) => {
    return (
        <div className='grid min-h-screen justify-center'>
            <h1 className='font-bold text-3xl'>{props.title}</h1>
        </div>
    );
};

export default AboutBanner;