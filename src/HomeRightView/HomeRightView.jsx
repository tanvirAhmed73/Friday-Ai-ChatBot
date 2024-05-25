import React, { useEffect, useRef, useState } from 'react';
import { IoSendOutline } from "react-icons/io5";

const HomeRightView = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleMessageSubmit = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents adding a newline in the textarea
            handleMessageSubmit();
        }
    };

    return (
        <div className="flex flex-col h-full">
        <div className="bg-gray-900 text-white text-2xl font-bold p-4">
            Welcome Back
        </div>
        <div className="border-l-4 border-white flex-grow p-4 overflow-y-auto">
            <div>
                {messages.map((message, index) => (
                    <div className='flex text-left items-center gap-3 mb-8' key={index}>
                        <div>
                            <img className='w-[40px]' src="https://i.ibb.co/7tnW80F/images-removebg-preview.png" alt="" />
                        </div>
                        <div className="text-white w-2/3" style={{ wordWrap: 'break-word'}}>{message}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
        <div className="w-full bg-gray-900 p-4 flex justify-center items-center">
            <textarea
                className="w-full input input-bordered input-sm"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            ></textarea>
            <button
                className="btn btn-sm text-2xl ml-2"
                onClick={handleMessageSubmit}
            >
                <IoSendOutline />
            </button>
        </div>
    </div>
    );
};

export default HomeRightView;