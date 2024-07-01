// /components/CustomModal.js
"use client"
import { useState, Fragment, useEffect, Children } from 'react';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

const Modal = ({ isOpen, closeModal, title, content, backdropType ,children  , description =""}) => {
    const [backdropStyle, setBackdropStyle] = useState('');

    const backdropStyles = {
        opaque: 'bg-opacity-100 bg-white',
        blur: 'bg-opacity-50 backdrop-blur-sm bg-gray-500',
        transparent: 'bg-opacity-0'
    };


    return (
        <Transition appear show={isOpen}  className="" >
            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                <div className="fz-50 backdrop-blur-md backdrop-saturate-150 bg-overlay/30 w-screen h-screen fixed inset-0">
                    <div className="flex min-h-full items-center justify-center p-4  border">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md rounded-xl  p-6 bg-background border">
                                <DialogTitle as="h3" className="text-base/7 font-medium text-foreground">
                                {title}
                                </DialogTitle>
                                <p className='text-xs'>{description || ""}</p>
                                <div className="">
                                    {children}
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
