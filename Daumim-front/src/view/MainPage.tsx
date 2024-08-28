import styled from "styled-components";
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
