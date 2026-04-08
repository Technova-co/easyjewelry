// components/icons/BrandLogo.tsx
import * as React from "react";
import { IconProps } from "./types";

const BrandLogo: React.FC<IconProps> = () => (
  <img
    src="/images/logo.png"
    alt="Logo"
    width={150}
    height={35}
    style={{ display: "block" }}
  />
);

export default BrandLogo;
