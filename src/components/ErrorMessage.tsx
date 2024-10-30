import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "#f44336", mb: 2 }}>
        {message}
      </Typography>
      <Button variant="contained" color="primary" href="/login">
        Login sahifasiga qaytish
      </Button>
    </Box>
  );
};

export default ErrorMessage;
