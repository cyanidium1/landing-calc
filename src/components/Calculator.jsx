import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import img from '../images/girlHD.png'


import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Contacts from './Contacts';
import Text from './Text';

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
                <div className='absolute top-4 right-4 md:right-1/3 flex flex-col'>
                    <Text size={'20'} text={'D'} />
                    <Text size={'20'} text={'U'} />
                    <Text size={'20'} text={'N'} />
                    <Text size={'20'} text={'A'} />
                    <Text size={'20'} text={'D'} />
                    <Text size={'20'} text={'R'} />
                    <Text size={'20'} text={'E'} />
                    <Text size={'20'} text={'A'} />
                    <Text size={'20'} text={'M'} />
                </div>
                <div className='min-h-[50vh] w-96' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='absolute bottom-[-2px] left-0 w-screen lg:w-[98vw] min-h-[50vh] bg-gradient-to-b from-transparent via-transparent to-pink-300'>

                    </div>
                </div>
            </div >
            <div className="p-8 pb-2 flex flex-col items-center w-full bg-gradient-to-t from-pink-100 via-pink-200 to-pink-300">
                <Text text={'Калькулятор доставки'} />
                <p className="mb-4 text-center font-medium italic">Прорахуйте вартість доставки<br />вказавши вагу у віконечку <span className='not-italic'>&#x1F60A;</span>

                </p>
                <form className="space-y-4 flex flex-col max-w-72">
                    <TextField
                        color="secondary"
                        label="Вага"
                        placeholder='в кг'
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        InputProps={{ className: 'text-gray-700 bg-rose-200' }}
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
