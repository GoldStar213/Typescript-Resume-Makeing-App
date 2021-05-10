import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";
import Footer from "./Footer";

const Layout: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      minH="100vh"
      justifyContent="space-between"
    >
      <Box
        px={{ md: "4rem", lg: "7rem" }}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
