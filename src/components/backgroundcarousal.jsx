import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.webp";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpeg";
import food3 from "../assets/food3.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.jpg";
import food8 from "../assets/food8.avif";
import '../index.css'; 

const Gallery = () => {
  const items = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    food3,
    food6,
    food7,
    food8,
  ];

  const renderedItems = items.map((item, index) => (
    <img key={index} src={item} alt={`image-${index}`} className="gallery-image container-fluid" />
  ));

  return (
    <div className="gallery-container container-fluid">
      <AliceCarousel
        animationType="fadeout"
        animationDuration={5000}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
        autoPlay={true}
        mouseTracking={true}
        items={renderedItems}
      />
    </div>
  );
};

export default Gallery;
