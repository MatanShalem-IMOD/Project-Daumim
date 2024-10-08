import styled from "styled-components";
import {useState} from "react";
import {MainAppBar} from "../components/MainAppBar.tsx";
import {FloatingActionButton} from "../components/buttons/AddFloatingButton/AddFloatingButton.tsx";
import ProductList from "../components/ProductList/ProductList.tsx";
import { AddNewProductModal } from "../components/newProductModal/AddNewProdactModal.tsx";

export const MainPage = ()=> {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
    <>
        <MainAppBar/>
        <FloatingActionButton handleOpen={()=>setIsOpen(true)} />
        <AppContent>
            <ProductList/>
            <AddNewProductModal isOpen={isOpen} handleClose={()=>setIsOpen(false)} />
        </AppContent>
    </>)
}

const AppContent = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
`