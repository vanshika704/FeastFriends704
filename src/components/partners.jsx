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
    useBreakpointValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';// import the constant you made in firebase.js
import { collection, addDoc } from 'firebase/firestore';// importing the collection and adddoc from firestore , it is provided by them only , is not a self made function.

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

        const [isPristine, setIsPristine] = useState(true); // Track form pristine state

        const handleNameChange = (e) => {
            setName(e.target.value);
            setIsPristine(false); // Mark form as not pristine on first change
        };
        const handleEmailChange = (e) => {
            setEmail(e.target.value);
            setIsPristine(false); // Mark form as not pristine on first change
        };
        const handleLocationChange = (e) => {
            setLocation(e.target.value);
            setIsPristine(false); // Mark form as not pristine on first change
        };
        const handleBudgetChange = (e) => {
            setBudget(e.target.value);
            setIsPristine(false); // Mark form as not pristine on first change
        };

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

        const Submit = async () => {
            try {
                await addDoc(collection(db, "users"), {
                    name: name,
                    email: email,
                    location: location,
                    budget: budget
                });
                navigate("/find-partners");
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        };

        const boxWidth = useBreakpointValue({ base: "100%", sm: "90%", md: "70%", lg: "50%" });

        return (
            <Box
                maxW={boxWidth}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="6"
                boxShadow="lg"
                bg="white"
                mx="auto"
                mt={{ base: 4, md: 8 }}
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
                            <FormHelperText>Enter the email.</FormHelperText>
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

                    <Button
                        colorScheme="teal"
                        type="submit"
                        onClick={Submit}
                        isDisabled={
                            isPristine || isNameError || isEmailError || isLocationError || isBudgetError
                        }
                    >
                        Submit
                    </Button>
                </VStack>
            </Box>
        );
    };

    return (
        <Box className='Partners' p={{ base: 2, md: 4 }}>
            <FormExample />
        </Box>
    );
}

export default Partners;
