import styled from "styled-components";
import {MainAppBar} from "../components/MainAppBar.tsx";
import {FloatingActionButton} from "../components/buttons/AddFloatingButton/AddFloatingButton.tsx";
import ProductList from "../components/ProductList/ProductList.tsx";


export const MainPage = ()=> {
    return (
    <>
        <MainAppBar/>
        <FloatingActionButton />
        <AppContent>
            <ProductList/>
        </AppContent>
    </>)
}

const AppContent = styled.div`
    margin-top: 50px;
`