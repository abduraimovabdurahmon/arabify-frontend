import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Modal, IconButton, Button, FormControl, Select, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; // Ensure to install @mui/icons-material

const BACKGROUND_IMAGES = Array.from({ length: 25 }, (_, index) => `${index + 1}.jpeg`);
const CARD_TYPES = ['visa', 'mastercard', 'troy', 'amex', 'diners', 'discover', 'unionpay']; // Add other types as necessary

const CardComponent: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState<string>('/card-background/1.jpeg');
    const [selectedCardType, setSelectedCardType] = useState<string>('visa');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const savedBackground = localStorage.getItem('backgroundImage');
        const savedCardType = localStorage.getItem('cardType');
        if (savedBackground) {
            setBackgroundImage(savedBackground);
        }
        if (savedCardType) {
            setSelectedCardType(savedCardType);
        }
    }, []);

    const handleBackgroundChange = (image: string) => {
        setBackgroundImage(`/card-background/${image}`);
    };

    const handleCardTypeChange = (type: string) => {
        setSelectedCardType(type);
    };

    const handleSaveChanges = () => {
        localStorage.setItem('backgroundImage', backgroundImage);
        localStorage.setItem('cardType', selectedCardType);
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: 4,
                perspective: '1000px',
            }}
        >
            <Card
                sx={{
                    width: 345,
                    minHeight: 200,
                    borderRadius: 2,
                    position: 'relative',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    color: 'white',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <IconButton
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                    }}
                    onClick={() => setOpen(true)}
                >
                    <EditIcon fontSize="small" />
                </IconButton>
                <CardContent sx={{ padding: '20px' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <img src="/chip.png" alt="Chip" style={{ width: 40 }} />
                        <img src={`/card-type/${selectedCardType}.png`} alt={selectedCardType} style={{ width: 50 }} />
                    </Box>
                    <Typography variant="h5" sx={{ marginTop: 4, marginLeft: 1,
                        fontFamily: 'monospace',
                        fontSize: '1.5rem',
                        letterSpacing: '0.1rem',
                        backdropFilter: 'blur(5px)',
                        width: "inherit",
                        display: "inline-block",

                    }}>
                        {'7348884625'}
                    </Typography>
                </CardContent>
            </Card>

            <Modal open={open} onClose={() => setOpen(false)}
                sx={{
                    overflow: 'scroll',
                }}
              >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 24,
                }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>Karta fonini va turini tanlang</Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2 }}>
                        {BACKGROUND_IMAGES.map((image) => (
                            <Box
                                key={image}
                                sx={{
                                    width: 80,
                                    height: 50,
                                    backgroundImage: `url(/card-background/${image})`,
                                    backgroundSize: 'cover',
                                    margin: 1,
                                    border: '2px solid transparent',
                                    '&:hover': { border: '2px solid blue', cursor: 'pointer' },
                                }}
                                onClick={() => handleBackgroundChange(image)}
                            />
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2 }}>
                        {CARD_TYPES.map((type) => (
                            <Box
                                key={type}
                                sx={{
                                    width: 80,
                                    height: 50,
                                    backgroundImage: `url(/card-type/${type}.png)`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    margin: 1,
                                    border: selectedCardType === type ? '2px solid blue' : '2px solid transparent',
                                    '&:hover': { border: '2px solid blue', cursor: 'pointer' },
                                }}
                                onClick={() => handleCardTypeChange(type)}
                            />
                        ))}
                    </Box>

                    <Button variant="contained" onClick={handleSaveChanges}>
                      O'zgarishlarni saqlash
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default CardComponent;
