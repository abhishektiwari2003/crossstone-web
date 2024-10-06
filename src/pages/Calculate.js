import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import emailjs from "emailjs-com";

const Calculate = () => {
  const [userDetails, setUserDetails] = useState({
    mobile: "",
    name: "",
    location: "",
    area: "",
    parking: "01",
    balcony: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [costDetails, setCostDetails] = useState(null);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !userDetails.name ||
      !userDetails.mobile ||
      !userDetails.location ||
      !userDetails.area
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Calculate costs
    const area = parseFloat(userDetails.area);
    const budgetCost = area * 2250;
    const classicCost = area * 2420;
    const royaleCost = area * 2740;

    setCostDetails({ budgetCost, classicCost, royaleCost });
    setShowMessage(true);

    // Send email via EmailJS using the same logic as in Header.jsx
    const templateParams = {
      fullName: userDetails.name, // Match the field in your EmailJS template
      mobileNumber: userDetails.mobile, // Match the field in your EmailJS template
      location: userDetails.location, // Match the field in your EmailJS template
      area: userDetails.area, // Match the field in your EmailJS template
      budgetCost: budgetCost.toFixed(2), // Calculate and send
      classicCost: classicCost.toFixed(2), // Calculate and send
      royaleCost: royaleCost.toFixed(2), // Calculate and send
    };

    emailjs
      .send(
        "service_qkm6vm4", // Replace with your EmailJS service ID
        "template_fdndj8c", // Replace with your EmailJS template ID (use the one from Header.jsx)
        templateParams,
        "7wXDG87-JI82cyDDQ" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your consultation request has been sent!");
          setUserDetails({
            mobile: "",
            name: "",
            location: "",
            area: "",
            parking: "01",
            balcony: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("There was an error sending your request. Please try again.");
        }
      );
  };

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
            name="mobile"
            value={userDetails.mobile}
            onChange={handleChange}
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
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Location of your Plot"
            variant="outlined"
            name="location"
            value={userDetails.location}
            onChange={handleChange}
          >
            <MenuItem value="Gadag">Gadag</MenuItem>
            <MenuItem value="Hubli">Hubli</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
            <MenuItem value="Vijayanagar">Vijayanagar</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Super Built Up Area (sq.ft)"
            variant="outlined"
            name="area"
            value={userDetails.area}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="No Of Car Parking (130 sq.ft/unit)"
            variant="outlined"
            name="parking"
            value={userDetails.parking}
            onChange={handleChange}
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
            name="balcony"
            value={userDetails.balcony}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#F42A40",
            color: "white",
            padding: "12px 24px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#D13135",
            },
          }}
        >
          ESTIMATE COST →
        </Button>
      </Box>

      {showMessage && (
        <Box sx={{ marginTop: 4, textAlign: "center" }}>
          <CheckCircleIcon color="success" fontSize="large" />
          <Typography variant="h6" sx={{ color: "green", marginTop: 2 }}>
            Thank you for showing your interest! Our customer service team will
            contact you very soon.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            <strong>Budget Package:</strong> ₹
            {costDetails.budgetCost.toFixed(2)}
          </Typography>
          <Typography variant="body1">
            <strong>Classic Package:</strong> ₹
            {costDetails.classicCost.toFixed(2)}
          </Typography>
          <Typography variant="body1">
            <strong>Royale Package:</strong> ₹
            {costDetails.royaleCost.toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Calculate;
