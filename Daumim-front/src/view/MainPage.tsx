import styled from "styled-components";
<<<<<<< HEAD
import {MainAppBar} from "../components/MainAppBar.tsx";
import {FloatingActionButton} from "../components/buttons/AddFloatingButton/AddFloatingButton.tsx";
import ProductList from "../components/ProductList/ProductList.tsx";
import {useState} from "react";
import {AddNewProductModal} from "../components/newProductModal/AddNewProdactModal.tsx";

export const MainPage = ()=> {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <>
        <MainAppBar/>
        <FloatingActionButton handleOpen={handleOpen} />
        <AppContent>
            <ProductList/>
            <AddNewProductModal isOpen={isOpen} handleClose={handleClose}/>
        </AppContent>
    </>)
}

const AppContent = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
`
=======
import { FloatingActionButton } from "../components/buttons/AddFloatingButton/AddFloatingButton";
import ProductList from "../components/ProductList/ProductList";

export const MainPage = () => {
  return (
    <>
      <FloatingActionButton />
      <AppContent>
        <ProductList />
      </AppContent>
    </>
  );
};

const AppContent = styled.div`
  margin-top: 50px;
`;
>>>>>>> 302d22a208611da84ba60a32122dbe85d9da4ad2
