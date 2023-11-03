import * as React from "react";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function About() {
  return (
    <React.Fragment>
      <Typography variant="h3">Jommi's Hamburgers</Typography>
      <Rating value={4} readOnly />
      <Typography variant="body1">
        The best Philly-style cheesesteaks in town!
      </Typography>
    </React.Fragment>
  );
}
