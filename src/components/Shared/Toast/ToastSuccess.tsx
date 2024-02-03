'use client'
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ToastSuccess = (props:{message:String}) => {
    console.log(props.message);
    console.log(props);
    
    
    if (props.message === 'success') {
        toast.success("Success")
    }
    return (
        <div>
            <Toaster/>
        </div>
    );
};

export default ToastSuccess;