/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Karla",
    // backgroundColor: theme.palette.contrast.main,
    color: theme.palette.text.primary,
    "@media (min-width:1280px)": {
      margin: "4.2rem",
      marginTop: "1rem",
      marginBottom: 0,
    },
  },
  logo: {
    fontWeight: 700,
    paddingRight: "0.5rem",
    letterSpacing: "-0.25rem",
    fontFamily: "Karla",
    border: "solid",
    borderColor: theme.palette.contrast.main,
    borderWidth: "0.1rem",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
      p={1}
      m={1}
      mt={2}
      mb={0}
    >
      <Typography
        id="logo"
        variant="h4"
        className={classes.logo}
        color="primary"
      >
        Re
      </Typography>
      <IconButton>
        <Avatar>VN</Avatar>
      </IconButton>
    </Box>
  );
}

export default Header;
