import React from 'react';
import { X } from 'react-feather';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800  w-96 rounded-lg shadow-lg p-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 hover:bg-gray-200 p-1 rounded-full"
                >
                    <X size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
