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
    margin-top: 400px;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 40px;
    bottom: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};
`;