import styled from "styled-components";
import {MainAppBar} from "../components/MainAppBar.tsx";
import {FloatingActionButton} from "../components/buttons/AddFloatingButton/AddFloatingButton.tsx";
import ProductList from "../components/ProductList/ProductList.tsx";


export const MainPage = ()=> {
    return (
    <MainDiv>
        <MainAppBar/>
            <FloatingActionButton />
            <ProductList/>
    </MainDiv>)
}

const MainDiv = styled.div`
`