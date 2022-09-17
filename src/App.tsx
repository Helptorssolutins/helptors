import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import SidebarWithNavbar from "./components/navbar";
import ProductSimple from "./components/card";

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithNavbar children={undefined} />
    <ProductSimple />
  </ChakraProvider>
);
