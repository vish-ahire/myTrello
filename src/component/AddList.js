import React, { useState } from 'react';
import { X, Plus } from 'react-feather';

const AddList = ({ getlist, placeholder = "Enter list Title..." }) => {
    const [list, setlist] = useState('');
    const [show, setShow] = useState(false);

    const savelist = () => {
        if (!list.trim()) {
            alert("List title cannot be empty."); 
            return;
        }
        getlist(list.trim());
        setlist('');
        setShow(false);
    };

    const closeBtn = () => {
        setlist('');
        setShow(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") savelist();
        if (e.key === "Escape") closeBtn();
    };

    return (
        <div>
            <div className="flex flex-col h-fit flex-shrink-0 mr-3 w-60 rounded-md p-2 bg-black shadow-md hover:shadow-lg transition-shadow duration-300  ">
                {show ? (
                    <div className="transition-all duration-300 ease-in-out">
                        <textarea
                            value={list}
                            onChange={(e) => setlist(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900"
                            

                            placeholder={placeholder}
                            autoFocus
                        />
                        <div className="flex p-1">
                            <button
                                onClick={savelist}
                                className="p-1 rounded bg-sky-600 text-white mr-2 hover:bg-sky-500"
                            >
                                Add list
                            </button>
                            <button
                                onClick={closeBtn}
                                className="p-1 rounded hover:bg-gray-600"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setShow(true)}
                        className="flex p-1 w-full justify-center rounded items-center mt-1 hover:bg-gray-500 h-8"
                    >
                        <Plus size={16} /> Add a list
                    </button>
                )}
            </div>
        </div>
    );
};

export default AddList;
