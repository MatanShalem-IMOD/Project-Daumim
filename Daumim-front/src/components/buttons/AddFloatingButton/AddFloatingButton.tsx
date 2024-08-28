import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

import {theme} from '../../../context/themeContext';
// Create a theme

export const FloatingActionButton = () => {
    return (
           <WrappingButton theme={theme}>
                <AddIcon/>
           </WrappingButton>)
};



const WrappingButton = styled.button`
    position: absolute;
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 40px;
    bottom: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};
`;