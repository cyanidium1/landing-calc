import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
// import Course from './Course';
import img from '../images/girl.png'
import text from '../images/sticker.webp'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Contacts from './Contacts';

const ShippingCalculator = () => {
    const [weight, setWeight] = useState('');
    const [tarif, setTarif] = useState('');
    const [shippingCost, setShippingCost] = useState(0);
    const COURSE = 40;

    const handleChange = (event) => {
        setTarif(event.target.value);
    };


    const calculateShippingCost = () => {
        if (weight && tarif) {
            const cost = parseFloat(weight) * COURSE * tarif
            setShippingCost(cost);
        }
        else { setShippingCost(0) }
    };

    useEffect(() => {
        calculateShippingCost()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weight, tarif, shippingCost]);

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    return (
        <>
            <div className='relative bg-yellow-50 flex justify-center'>
                <div className=' min-h-[50vh] w-96' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-[-2px] left-0 w-screen min-h-[50vh] bg-gradient-to-b from-transparent via-transparent to-pink-400'>

                    </div>
                </div>
            </div>
            <div className="p-8 h-[50vh] flex flex-col items-center w-full bg-gradient-to-t from-pink-200 via-pink-300 to-pink-400">
                <img src={text} alt="Калькулятор доставки" />
                <p className="mb-4 text-center font-medium">Прорахуйте вартість доставки<br />вказавши вагу у віконечку &#x1F60A;

                </p>
                <form className="space-y-4 flex flex-col max-w-72">
                    <TextField
                        color="secondary"
                        label="Вага"
                        placeholder='в кг'
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        InputProps={{ className: 'text-gray-700 bg-white' }}
                        InputLabelProps={{ className: 'text-gray-700' }}
                        variant="filled"
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Тариф</InputLabel>
                        <Select
                            color="secondary"

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tarif}
                            label="Тариф"
                            onChange={handleChange}
                        >
                            <MenuItem value={19}>Авіа</MenuItem>
                            <MenuItem value={8}>Морем</MenuItem>
                            <MenuItem value={25}>Міжнародна</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                {shippingCost > 0 && (
                    <p className="mt-4">Приблизна ціна доставки: <b>{shippingCost}</b>  грн</p>
                )}
                <Contacts />
            </div>
        </>
    );
};

export default ShippingCalculator;
