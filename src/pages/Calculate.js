import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

const Calculate = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 8 },
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#000", textAlign: "center" }}
      >
        House Construction Cost Calculator
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", marginBottom: 4 }}
      >
        Fill out the form below to get an estimate of house construction costs.
        Speak to our technical expert for a more accurate pricing.
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <Box component="span" sx={{ marginRight: 1 }}>
                  +91
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Location of your Plot"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Super Built Up Area (sq.ft)"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="No Of Car Parking (130 sq.ft/unit)"
            variant="outlined"
            defaultValue="01"
          >
            <MenuItem value="01">01</MenuItem>
            <MenuItem value="02">02</MenuItem>
            <MenuItem value="03">03</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Balcony & Utility Area (sq.ft)"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F42A40", // Your primary red color
            color: "white",
            padding: "12px 24px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#D13135", // Slightly darker shade for hover
            },
          }}
        >
          ESTIMATE COST →
        </Button>
      </Box>

      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: 4, color: "#666" }}
      >
        Disclaimer: The costs indicated are approximate costs for each resource.
        Actual cost estimates may vary for your city. Please check with our
        technical expert for more accurate pricing or visit our office for a
        custom cost estimate as per your requirement. This amount is an
        approximate amount for construction area & it does not include the
        compound wall area.
      </Typography>
    </Box>
  );
};

export default Calculate;
