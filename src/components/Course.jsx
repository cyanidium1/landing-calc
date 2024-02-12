import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Course = ({ setCourse }) => {
    const [useUserInput, setUseUserInput] = useState(false);
    const [course, setCurrentCourse] = useState('40')

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();
                setCourse(data.rates.UAH)
                setCurrentCourse(data.rates.UAH)
            } catch (error) {
                console.error('Error fetching course:', error);
                setCourse('40');
                setCurrentCourse('40')
            }
        };

        fetchCourse();
    }, []);

    useEffect(() => {
        setCourse(course)
    }, [useUserInput]);

    const handleInputChange = (event) => {
        setCourse(event.target.value)
    };

    const handleSwitchChange = () => {
        setUseUserInput((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className='flex flex-col'>
                {useUserInput ? (
                    <input
                        className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-36 h-8"
                        type="number"
                        placeholder="Введіть курс"
                        onChange={handleInputChange}
                    />

                ) : (
                    <p className='h-8'>1 USD = {course} UAH</p>
                )}
                <FormControlLabel
                    control={<Switch checked={useUserInput} onChange={handleSwitchChange} />}
                    label="Ввести курс"
                />
            </div>
        </div>
    );
};

export default Course;
