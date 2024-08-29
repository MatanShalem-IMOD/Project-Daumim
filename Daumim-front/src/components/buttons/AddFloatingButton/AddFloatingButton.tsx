import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

import {theme} from '../../../context/themeContext';
interface props{
    handleOpen: () => void,
}

export const FloatingActionButton = ({handleOpen}:props) => {
    return (
           <WrappingButton theme={theme} onClick={handleOpen}>
                <AddIcon/>
           </WrappingButton>)
};


const WrappingButton = styled.button`
    position: fixed;
    border-radius: 100%;
    width: 5em;
    height: 5em;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    right: 40px;
    bottom: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};
`;