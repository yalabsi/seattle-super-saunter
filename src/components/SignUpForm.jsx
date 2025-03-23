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
    const [errors, setErrors] = useState({});

    const handleSubmit = () => {
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = 'First name is required';
        if (!lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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
            <div class="klaviyo-form-UAKyYq"></div>
            </Paper>
        </Container>
        </Box>
  );
}

export default SignUpForm; 