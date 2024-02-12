import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contacts = () => {
    return (
        <div className="flex space-x-8 my-4">
            <a href="https://t.me/dunataobao" target="_blank" rel="noopener noreferrer">
                <TelegramIcon fontSize="large" className="text-pink-500" />
            </a>
            <a href="https://www.instagram.com/duna_dream/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" className="text-pink-500" />
            </a>
        </div>
    );
};

export default Contacts;
