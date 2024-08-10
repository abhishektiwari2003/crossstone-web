import React from "react";
import {
  Box,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp } from "@mui/icons-material";
import footerBg from "../../assets/footerBg.svg";
import crossstone2 from "../../assets/crossstone2.svg";

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundImage: `url(${footerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "500px", // Adjust this height based on your image dimensions
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
      zIndex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 8, // You can adjust the padding as needed
        px: 2,
      }}
    >
      <Box
        component="img"
        src={crossstone2}
        alt="Crossstone Logo"
        width={256}
        height={162}
        onClick={"/"}
        marginLeft={isMobile ? 0 : 16}
      />
      <Stack sx={{ flexDirection: isMobile ? "column" : "row", mt: 10 }}>
        <StackColumn sx={{ zIndex: 2 }}>
          <FooterTitle text={"Office Address"} />
          <FooterLink
            text={"123 Anywhere St.Any City, ST 12345 (PWD parking available)"}
          />
          <Link href="tel:(123) 456-7890">(123) 456-7890</Link>
          <Link href="mailto:hello@reallygreatsite.com">
            hello@reallygreatsite.com
          </Link>
        </StackColumn>

        <StackColumn sx={{ zIndex: 2, mt: isMobile ? 2 : 0 }}>
          <FooterTitle text={"Office Hours"} />
          <Typography sx={{ color: "white" }}>
            Monday to Friday <br /> 9:00 am to 5:00 pm <br /> Weekends by
            appointment
          </Typography>
        </StackColumn>

        <StackColumn sx={{ zIndex: 2, mt: isMobile ? 2 : 0 }}>
          <FooterTitle text={"Stay Connected"} />
          <Stack
            direction="row"
            width="70px"
            maxWidth="100%"
            justifyContent="center"
            spacing={2}
          >
            <Link
              href="#"
              variant="body2"
              sx={{
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <WhatsApp />
            </Link>
          </Stack>
        </StackColumn>
      </Stack>
    </BoxRow>
  );
};

export default Footer;
