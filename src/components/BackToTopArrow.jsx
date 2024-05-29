import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTopArrow = () => {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`fixed bottom-10 right-10 ${showArrow ? 'block' : 'hidden'}`}>
            <FaArrowCircleUp size={40} onClick={scrollToTop} className="cursor-pointer text-blue-500 hover:text-blue-700" />
        </div>
    );
};

export default BackToTopArrow;
