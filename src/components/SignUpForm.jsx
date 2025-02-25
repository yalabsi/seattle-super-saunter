import { Box, TextField, Button, Typography, Paper, Container, Alert, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { seattleColors } from '../styles/colors';
import { useState } from 'react';

const formURL =  "https://script.google.com/macros/s/AKfycbz_Yua2ZItqSTqVhKyg8LHJ0LgCHHntLLHb3EKtrrHnJHJA7LWBNTCVTwX4ZdKvhDjg/exec";

function SignUpForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [postSaunter, setPostSaunter] = useState('no');

    const handleSubmit = () => {
        setLoading(true);
        fetch(formURL, {
            method: 'POST',
            contentType: "application/json",
            body: JSON.stringify({
                date: new Date().toISOString(),
                firstName,
                lastName,
                email,
                postSaunter
            })
          })
          .then(() => {
            setLoading(false);
            setSuccess(true);
        });
    }

    const renderForm = () => {
        if (success) {
            return (
                <Box>
                    <Alert variant="filled" severity="success">Thank you for signing up!</Alert>
                </Box>
            )
        }

        return (<Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: seattleColors.white,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: seattleColors.green,
                    },
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: seattleColors.green,
                }
                }}
            />
            <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: seattleColors.white,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: seattleColors.green,
                    },
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: seattleColors.green,
                }
                }}
            />
            </Box>
            <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
                '& .MuiOutlinedInput-root': {
                backgroundColor: seattleColors.white,
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: seattleColors.green,
                },
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: seattleColors.green,
                }
            }}
            />

            <FormControl>
                <FormLabel sx={{ 
                    color: seattleColors.darkText,
                    mb: 1,
                    '&.Mui-focused': {
                        color: seattleColors.darkText
                    }
                }}>
                    Do you plan to attend the Post-saunter function?
                </FormLabel>
                <RadioGroup
                    row
                    value={postSaunter}
                    onChange={(e) => setPostSaunter(e.target.value)}
                >
                    <FormControlLabel 
                        value="yes" 
                        control={
                            <Radio 
                                sx={{
                                    color: seattleColors.green,
                                    '&.Mui-checked': {
                                        color: seattleColors.green,
                                    },
                                }}
                            />
                        } 
                        label="Yes" 
                    />
                    <FormControlLabel 
                        value="no" 
                        control={
                            <Radio 
                                sx={{
                                    color: seattleColors.green,
                                    '&.Mui-checked': {
                                        color: seattleColors.green,
                                    },
                                }}
                            />
                        } 
                        label="No" 
                    />
                </RadioGroup>
            </FormControl>
            <Button 
                disabled={loading}
                variant="contained" 
                size="large"
                sx={{ 
                    bgcolor: seattleColors.green,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                    bgcolor: `${seattleColors.green}CC`
                    }
                }}
                onClick={handleSubmit}
            >
            Sign Up
            </Button>
        </Box>);
    }

    return (
        <Box 
        id="signup"
        sx={{ 
            pt: 8,
            pb: 8,
            backgroundColor: seattleColors.white,
            borderTop: `1px solid ${seattleColors.gold}33` 
        }}
        >
        <Container maxWidth="lg">
            <Paper 
            elevation={0}
            sx={{ 
                p: 4,
                borderRadius: 4,
                backgroundColor: `${seattleColors.green}05`,
                border: '2px solid',
                borderColor: `${seattleColors.green}33`,
            }}
            >
            <Typography variant="h4" component="h2" sx={{ 
                mb: 6,
                fontWeight: 600,
                color: '#1B4B66',
                fontSize: { xs: '1.25rem', md: '2rem' },
                textAlign: 'center',
                position: 'relative',
                '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                backgroundColor: '#1B4B66',
                borderRadius: '2px'
                }
            }}> 
                Sign Up
            </Typography>
            {renderForm()}
            </Paper>
        </Container>
        </Box>
  );
}

export default SignUpForm; 