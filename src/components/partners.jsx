import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack,
    Button,
    Box,
    Heading,
  
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Partners() {
    const FormExample = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [location, setLocation] = useState('');
        const [budget, setBudget] = useState('');
        const navigate = useNavigate();

        const [touched, setTouched] = useState({
            name: false,
            email: false,
            location: false,
            budget: false,
        });

        const handleNameChange = (e) => setName(e.target.value);
        const handleEmailChange = (e) => setEmail(e.target.value);
        const handleLocationChange = (e) => setLocation(e.target.value);
        const handleBudgetChange = (e) => setBudget(e.target.value);

        const handleBlur = (field) => {
            setTouched({
                ...touched,
                [field]: true,
            });
        };

        const isNameError = name === '' && touched.name;
        const isEmailError = email === '' && touched.email;
        const isLocationError = location === '' && touched.location;
        const isBudgetError = budget === '' && touched.budget;
const Submit = ()=>{
    navigate("/find-partners");
}
        return (
            <Box
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="9"
                boxShadow="lg"
                bg="white"
                marginLeft={400}
                
                
            >
                <Heading as="h3" size="lg" mb="4" textAlign="center">
                    User Information
                </Heading>
                <VStack spacing={4} align="stretch">
                    <FormControl isInvalid={isNameError}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            onBlur={() => handleBlur('name')}
                        />
                        {!isNameError ? (
                            <FormHelperText>Enter your name.</FormHelperText>
                        ) : (
                            <FormErrorMessage>Name is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid={isEmailError}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={() => handleBlur('email')}
                        />
                        {!isEmailError ? (
                            <FormHelperText>
                                Enter the email 
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid={isLocationError}>
                        <FormLabel>Location</FormLabel>
                        <Input
                            type="text"
                            value={location}
                            onChange={handleLocationChange}
                            onBlur={() => handleBlur('location')}
                        />
                        {!isLocationError ? (
                            <FormHelperText>Enter your location.</FormHelperText>
                        ) : (
                            <FormErrorMessage>Location is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isInvalid={isBudgetError}>
                        <FormLabel>Budget</FormLabel>
                        <Input
                            type="number"
                            value={budget}
                            onChange={handleBudgetChange}
                            onBlur={() => handleBlur('budget')}
                        />
                        {!isBudgetError ? (
                            <FormHelperText>Enter your budget.</FormHelperText>
                        ) : (
                            <FormErrorMessage>Budget is required.</FormErrorMessage>
                        )}
                    </FormControl>

                    <Button colorScheme="teal" type="submit" onClick={Submit} isDisabled={isNameError || isEmailError || isLocationError || isBudgetError}>
                        Submit
                    </Button>
                </VStack>
            </Box>
        );
    };

    return (
       <div className='Partners'><FormExample /></div>
            
        
    );
}

export default Partners;
