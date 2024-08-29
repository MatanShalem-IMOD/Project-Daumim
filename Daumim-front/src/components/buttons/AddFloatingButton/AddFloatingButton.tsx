import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

import {theme} from '../../../context/themeContext';

export const FloatingActionButton = () => {
    return (
           <WrappingButton theme={theme}>
                <AddIcon/>
           </WrappingButton>)
};


const WrappingButton = styled.button`
    position: fixed;
    border-radius: 100%;
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 40px;
    bottom: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};
`;