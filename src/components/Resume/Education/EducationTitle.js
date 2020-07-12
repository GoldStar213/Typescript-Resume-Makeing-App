import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
    paddingTop: 10,
    display: "flex",
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    opacity: 0.8,
    fontSize: 12,
    color: "#44318D",
    fontWeight: 600,
    marginBottom: 2
  },
  subtitle: {
    opacity: 0.6,
    fontSize: 10,
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});

function EducationTitle(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="left" className={classes.left}>
        <div id="title" className={classes.title}>
          {props.institute}
        </div>
        <div id="stream" className={classes.subtitle}>
          {props.stream} {props.grade ? `, ${props.grade}` : null}
        </div>
      </div>
      <div id="right" className={classes.right}>
        <div id="duration" className={classes.title}>
          {props.duration.start} - {props.duration.end}
        </div>
        <div id="location" className={classes.subtitle}>
          {props.location}
        </div>
      </div>
    </div>
  );
}
export default EducationTitle
