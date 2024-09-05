import React, { useState } from 'react';
import { MenuItem, FormControl, Select, styled } from '@mui/material';

const currencies = [
    {
        value: '0.05',
        label: 'Private Sale',
    },
    {
        value: '0.10',
        label: 'Pre-Sale',
    },
    {
        value: '0.20',
        label: 'Public Sale',
    },
];

interface Props {
    onSelect: any;
    onLabel: any;
}

const StyledFormControl = styled(FormControl)({
    width: '200px',
    margin: '16px 0',
});

const StyledSelect = styled(Select)({
    backgroundColor: '#00ffff',
    '&:hover': {
        backgroundColor: '#00ffff',
    },
    '& .MuiSelect-select': {
        padding: '15px 10px',
    },
    '& .MuiList-root': {
        backgroundColor: '#00ffff',
    },
    '& .MuiMenu-list': {
        padding: '10px',
        backgroundColor: '#00ffff',
    },
});

const Dropdown = ({ onSelect, onLabel }: Props) => {
    const [selectedCurrency, setSelectedCurrency] = useState('0.05');
    

    const handleChange = (event: { target: { value: any } }) => {
        const value = event.target.value;
        setSelectedCurrency(value);
        onSelect(value);
        onLabel(
            currencies.filter((item)=>item.value===value)[0].label
            )

    };

    return (
        <StyledFormControl>
            <StyledSelect
                value={selectedCurrency}
                onChange={handleChange}
                displayEmpty
                MenuProps={{
                    MenuListProps: {
                        sx: {
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            color: '#fff',
                        },
                    },
                }}
            >
                <MenuItem value="" disabled>
                    {/* Placeholder */}
                </MenuItem>
                {currencies.map((currency) => (
                    <MenuItem key={currency.value} value={currency.value}>
                        {currency.label}
                    </MenuItem>
                ))}
            </StyledSelect>
        </StyledFormControl>
    );
};

export default Dropdown;
