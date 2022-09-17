import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import SidebarWithNavbar from "./components/navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithNavbar children={undefined} />
  </ChakraProvider>
);
