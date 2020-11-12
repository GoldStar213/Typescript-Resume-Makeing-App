/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ColoredLine from "../utils/Line";
import skillsInfo from "../../Data/SkillsInfo";
import SkillSet from "./Skills/SkillSet";

const useStyles = makeStyles({
  title: {
    fontSize: "1.5em",
  },
});

function Skills() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      className={classes.root}
    >
      <Typography color="primary" variant="h1" id="title" className={classes.title}>
        Skills
      </Typography>
      <ColoredLine color="#44318D" opacity="0.5" />
      {skillsInfo.map((item) => (
        <SkillSet key={item.id} title={item.title} skillList={item.skillList} />
      ))}
    </Box>
  );
}

export default Skills;
