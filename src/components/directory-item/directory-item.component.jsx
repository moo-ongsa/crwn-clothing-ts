import React from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const MenuItem = ({ category }) => {
  let navigate = useNavigate();
  const { title, imageUrl, route } = category;
  return (
    <DirectoryItemContainer
      onClick={() => {
        navigate(route);
      }}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>SHOPNOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default MenuItem;
