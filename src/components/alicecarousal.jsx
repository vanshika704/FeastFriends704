import { Card, CardBody, Image, Stack, Heading, Text, Box } from '@chakra-ui/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import { Link } from 'react-router-dom';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function Cards() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    {
      imageSrc: 'src/assets/1image.jpg',
      title: 'Find One Partner',
      description: 'Want to have an affordable yet delicious meal? Find a Partner who shares your tastes and split the bill for a more economical dining experience.',
      link: '/find-one-partner'  // Specify the link for each card
    },
    {
      imageSrc: 'src/assets/image2.jpg',
      title: '2-4 Partners',
      description: 'Dining with a small group? Enjoy a variety of dishes and share the cost. Perfect for a cozy get-together or a double date.',
      link: '/2-4-partners'  // Specify the link for each card
    },
    {
      imageSrc: 'src/assets/image3.webp',
      title: 'More Than 4 Partners',
      description: 'Planning a feast with a larger group? Our platform helps you coordinate and manage contributions for a fun and memorable dining event.',
      link: '/more-than-4-partners'  ,
    },
  ];

  return (
    <div className='cards' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          mouseTracking
          disableDotsControls
          infinite
          disableButtonsControls
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {items.map((item, index) => (
            <Box key={index} mx={1} className="Cards"> 
              <Link to={item.link}>
                <Card maxW='sm' maxH='sm' width="100%" height="50%" backgroundColor='rgb(248, 202, 102)'>
                  <CardBody>
                    <Image
                      src={item.imageSrc}
                      borderRadius='lg'
                      width={300}
                      height={100}
                      onDragStart={handleDragStart}
                    />
                    <Stack mt='4' spacing='4'>
                      <Heading size='md'>{item.title}</Heading>
                      <Text fontSize='15px'>
                        {item.description}
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </Link>
            </Box>
          ))}
        </AliceCarousel>
      </ChakraProvider>
    </div>
  );
}

export default Cards;
