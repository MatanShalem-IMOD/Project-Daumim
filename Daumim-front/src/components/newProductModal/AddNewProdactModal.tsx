import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { DropdownSearch } from "../DropdownSearch"; // Correct import path
import { CustomTextField } from "../TextInput.tsx";
import { PhotoUploadButton } from "../buttons/FileUploadButton.tsx";
import { MultyLineTextField } from "../ProductList/MultyLineTextInput.tsx";
import { useLocations } from "../../hooks/hooks.ts";
import { useCategories } from "../../hooks/hooks.ts";
import {transformList} from "./NewProducModalUtils.ts";
import {ProductDataToDB} from "../../types/Product.ts";
import {AddProduct} from "../../api/api.ts";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}


const ModalContent = styled("div")`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #e1cdb5;
position: absolute;
top: 50%;
left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 10px;
  `;

  export const AddNewProductModal: React.FC<Props> = ({
  isOpen,
  handleClose,
}) => {
    const [productName, setProductName] = useState<string>("");
    const [productDescription, setProductDescription] = useState<string>("");
    const [productCategory, setProductCategory] = useState<string>("");
    const [cityName, setCityName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [photo, setPhoto] = useState<File>();
      
    const { data: locations } = useLocations();
    const { data: categories } = useCategories();

    function encodePhotoToBase64(file: File, callback: (base64String: string) => void) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result as string;
            callback(base64String);
        };
        reader.readAsDataURL(file);
    }

      function printFields() {
          if (!photo) {
              console.error('No photo selected');
              return;
          }

          encodePhotoToBase64(photo, (encodedBase64Photo) => {
              console.log(encodedBase64Photo)

              const product: ProductDataToDB = {
                  name: productName,
                  category: productCategory,
                  description: `${productDescription} ${phoneNumber}`,
                  location: cityName,
                  picture: encodedBase64Photo.split(',')[1] // Base64 string for the photo
              };

              // Now you can use the product object to make your POST request
              AddProduct(product).then(r =>console.log(r));
              // Call your function to send the data
              handleClose()
          });
      }
    

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <ModalTitle>הוספת מוצר</ModalTitle>
        <ProductInfoDiv>
          <DropdownSearch
            onInputChange={(s) => setProductCategory(s)}
            name={"Category"}
            options={transformList(categories) || []}
            placeHolder={"בחר קטגוריה"}
          />
          <CustomTextField
            placeholder={"שם המוצר"}
            onInputChange={setProductName}
          />
        </ProductInfoDiv>
        <MultyLineTextField
          placeholder={"תיאור מוצר"}
          onInputChange={setProductDescription}
        />
        <PhotoUploadButton
          onFileSelected={(file) => {
            if (file) setPhoto(file);
          }}
        />
        <ProductContactInfoDiv>
          <CustomTextField
            placeholder={"מספר טלפון"}
            isNumeric={true}
            onInputChange={setPhoneNumber}
          />

          <DropdownSearch
            onInputChange={(city) => setCityName(city)}
            name={"productName"}
            options={transformList(locations) || []}
            placeHolder={"בחר מיקום"}
          />
        </ProductContactInfoDiv>
        <SubmitButton onClick={printFields}>הוסף</SubmitButton>
      </ModalContent>
    </Modal>
  );
};

const ProductInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const ProductContactInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

const SubmitButton = styled("button")`
  background-color: #bd9c75;
  color: #fff;
  border: none;
  border-radius: 4px;
  height: 40px;
  cursor: pointer;
  width: 101%;
  text-align: center;
  font-size: large;
`;
