import AppBar from '../components/appbar';
import "../index.css";
import { FaSearch, FaPeopleArrows } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import Gallery from '../components/backgroundcarousal';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <AppBar />
      <div className='MainPagebody'>
        <Food1 />
      </div>
      <Greycontainer />
      <Info />
      <Data/>
    </div>
  );
}

export default MainPage;

function Food1() {
  return (
    <div className="image-container ">
      <Gallery />
      <div className="text-overlay container-fluid">
        <h1 className='container-fluid'>Life is Too Short For<br /> Boring food</h1>
        <h6 className='container-fluid'>Eat Something Great Everyday In Your Budget</h6>
      </div>
    </div>
  );
}

function Greycontainer() {
  return (
    <div className="grey-container container-fluid">
      <div>
        <Link to="/explore">
          <FaSearch size={30} />
          <div className="spacer"></div>
          <div>Explore</div>
        </Link>
      </div>
      <div>
        <Link to="/partners">
          <FaPeopleArrows size={30} />
          <div className="spacer"></div>
          <div>Partners</div>
        </Link>
      </div>
      <div>
        <Link to="/menu">
          <MdRestaurantMenu size={30} />
          <div className="spacer"></div>
          <div>See Menu</div>
        </Link>
      </div>
    </div>
  );
}

function Info() {
  const templateColumns = useBreakpointValue({
    base: "repeat(auto-fit, minmax(100px, 1fr))",
    md: "repeat(4, 1fr)"
  });
  const templateRows = useBreakpointValue({
    base: "repeat(4, auto)",
    md: "repeat(2, 1fr)"
  });
  const colSpanLarge = useBreakpointValue({ base: 1, md: 2 });
  const rowSpanLarge = useBreakpointValue({ base: 1, md: 2 });

  return (
    <div className='info'>
      <Grid
        width="100%"
        h="auto"
        templateRows={templateRows}
        templateColumns={templateColumns}
        gap={4}
        className='container-fluid'
      >
        <GridItem className="grid-item container-fluid" rowSpan={rowSpanLarge} colSpan={colSpanLarge}>
          <Link to="/starters" className="image-box">
            <img src='src/assets/c1.jpg' alt='starters' className='grid-image1' />
            <div className="overlay-text1">Starters</div>
          </Link>
        </GridItem>
        <GridItem className="grid-item" colSpan={1} rowSpan={1}>
          <Link to="/main-course" className="image-box">
            <img src='src/assets/c4.webp' alt='main course' className='grid-image' />
            <div className="overlay-text1">Main Course</div>
          </Link>
        </GridItem>
        <GridItem className="grid-item" colSpan={1} rowSpan={1}>
          <Link to="/desserts" className="image-box">
            <img src='src/assets/food6.jpg' alt='Desserts' className='grid-image' />
            <div className="overlay-text1">Desserts</div>
          </Link>
        </GridItem>
        <GridItem className="grid-item" colSpan={colSpanLarge} rowSpan={1}>
          <Link to="/drinks" className="image-box">
            <img src='src/assets/kobby-mendez-xBFTjrMIC0c-unsplash.jpg' alt='Drinks' className='grid-image' />
            <div className="overlay-text1">Drinks</div>
          </Link>
        </GridItem>
      </Grid>
    </div>
  );
}

function Data(){
  return (<><div className='data'>data</div></>)
}
