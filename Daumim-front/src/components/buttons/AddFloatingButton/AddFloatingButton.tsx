import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import styled from 'styled-components';

// const StyledFab = styled(Fab)`
//   position: absolute;
// `;

const fabStyle = {
    position: 'absolute',

};

export const FloatingActionButton = () => {
    return (
            <Fab color="primary" aria-label="add" style={fabStyle}>
                <AddIcon/>
            </Fab>
    );
};

// import { Theme } from "@mui/material";
// import { css } from "@emotion/css";
//
// export const getClasses = (theme: Theme) => ({
//     Fab: css({
//         position: 'absolute',
//     }),
// });