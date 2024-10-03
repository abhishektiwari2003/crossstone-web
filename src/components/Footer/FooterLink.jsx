import { Link } from "@mui/material";
import React from "react";

const FooterLink = ({ text }) => {
  return (
    <Link
      href="https://www.google.com/maps/dir//Hudco+Colony,+Gadag-Betageri,+Gadag-Betigeri,+Karnataka+582103/@15.4169928,75.5394367,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bb8f975489a46d1:0x28aeae0869aa27e9!2m2!1d75.6218385!2d15.417008?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D"
      variant="p"
      target="_blank"
      component="a"
      sx={{
        fontSize: "0.9rem",
        fontWeight: "400",
        textDecoration: "underline",
        color: "white",
        textTransform: "capitalize",
        "&:hover": {
          color: "white",
        },
      }}
    >
      {text}
    </Link>
  );
};

export default FooterLink;
