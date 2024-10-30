// src/Login.js
import React, { useEffect, useState } from "react";
import { Button, Paper, Typography, Box, CircularProgress } from "@mui/material";
import { Telegram } from "@mui/icons-material";
import { io } from "socket.io-client";
import { useStore } from "../store/store"; // Adjust import as needed
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { setToken, setRole } = useStore();
    const [loginUrl, setLoginUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const socket = io('ws://localhost:3000/login');
        console.log('Setting up socket connection');

        socket.on('connect', () => {
            console.log('Socket connected:', socket.id);
            setLoginUrl(`https://t.me/arabify_bot?start=${socket.id}`);
            setIsLoading(false);
        });

        socket.on('disconnect', () => {
            console.log('Socket disconnected');
            setLoginUrl('');
            setIsLoading(true);
        });

        socket.on('permission', async (res) => {
            if (res?.type === "success") {
                const token = res.data.token;
                localStorage.setItem('token', token);
                setToken(token);
                const role = res?.data?.role;
                localStorage.setItem('role', role);
                setRole(role);
                navigate(`/dashboard`);
            }
        });

        return () => {
            console.log('Disconnecting socket');
            socket.disconnect();
        };
    }, [setToken, setRole, navigate]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            sx={{
                padding: 2,
                overflow: "hidden",
                backgroundColor: "#121212", // Dark background
            }}
        >
            <Paper elevation={4} sx={{ padding: 4, maxWidth: 400, width: "100%", textAlign: 'center', backgroundColor: 'white' }}>
                <Typography variant="h5" component="h1" gutterBottom sx={{ color: "#333" }}>
                    Telegram bilan tizimga kirish
                </Typography>

                {isLoading ? (
                    <CircularProgress color="primary" />
                ) : (
                    loginUrl && (
                        <a href={loginUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ marginTop: 2 }}
                            >
                                <Telegram sx={{ marginRight: 1 }} /> Kirish
                            </Button>
                        </a>
                    )
                )}
            </Paper>
        </Box>
    );
};

export default Login;
