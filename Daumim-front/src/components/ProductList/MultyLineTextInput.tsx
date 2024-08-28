import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// Define the interface for the props
interface CustomTextFieldProps {
    width?: number;
    height?: number;
    placeholder: string;
    onInputChange: (input: string) => void;
    isNumeric?: boolean;
}

// Create a styled version of the TextField with default background color
const StyledTextField = styled(TextField)`
    backgroundColor: 'white'
`

export const MultyLineTextField: React.FC<CustomTextFieldProps> = ({
                                                                    width = 400,
                                                                    height = 100,
                                                                    placeholder,
                                                                    onInputChange,
                                                                    isNumeric=false
                                                                }) => {

    // Function to handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (isNumeric) {
            event.target.value = value.replace(/[^0-9]/g, '');
            onInputChange(event.target.value);
        } else {
            onInputChange(value);
        }
    };

    return (
        <StyledTextField
            id="outlined-multiline-flexible"
            maxRows={3}
            variant="outlined"
            placeholder={placeholder}
            multiline
            onChange={handleChange}
            InputProps={{
                style: {
                    width: width,
                    height: height,
                    backgroundColor: 'white',
                    direction:'rtl'
                },
            }}
        />
    );
};