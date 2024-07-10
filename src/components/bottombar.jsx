
import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const BottomContainer = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="fixed" bottom="0" left="0" right="0" bg="gray.200" shadow="md">
      <IconButton
        icon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        onClick={onToggle}
        position="absolute"
        top="-30px"
        right="20px"
        bg="blue.500"
        color="white"
        _hover={{ bg: 'blue.600' }}
        borderRadius="full"
      />
      <Box
        height={isOpen ? '200px' : '0'}
        transition="height 0.3s ease"
        overflow="hidden"
        p={isOpen ? 4 : 0}
      >
        {/* Add your content here */}
        <p>This is the bottom container content</p>
      </Box>
    </Box>
  );
};

export default BottomContainer;
