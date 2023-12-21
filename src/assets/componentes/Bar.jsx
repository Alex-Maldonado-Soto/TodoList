import { Box, Container, TextField, Typography } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import React from "react";
import { Theme } from "../Theme";

export default function Decoration() {
  return (
    <Container component="nav" sx={{padding: "0px"}}>
      <Box
        display="flex"
        sx={{
            margin:"none",
          alignItems: "center",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontWeight: "bold",
          }}
        >
          TODO
        </Typography>
        <WbSunnyOutlinedIcon />
      </Box>
      <Box
        backgroundColor={Theme.palette.background.default}
        sx={{
          width: "100%",
          borderRadius: "10px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        <Brightness1OutlinedIcon />
        <TextField
          id="createTodo"
          type="text"
          placeholder="Create a new todo..."
          variant="outlined"
          size="small"
        />
      </Box>
    </Container>
  );
}
