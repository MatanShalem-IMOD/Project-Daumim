import styled from "styled-components";
import {MainAppBar} from "../components/MainAppBar.tsx";
import {FloatingActionButton} from "../components/buttons/AddFloatingButton/AddFloatingButton.tsx";


export const MainPage = ()=> {
    return (
    <MainDiv>
        <MainAppBar/>
        <FloatingActionButton/>
    </MainDiv>)
}

const MainDiv = styled.div`
`