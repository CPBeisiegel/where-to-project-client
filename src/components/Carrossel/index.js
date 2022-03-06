import { Carousel } from "react-bootstrap";

export function Carrossel() {
  return (
    <Carousel className="container">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/bd478462-cfac-4e27-9be2-d5faa1188523.jpg?im_w=960"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Where to... férias luxuosas?</h3>
          <p>
            Perto de Londres, casa costruída em 1710 para aristocracia inglesa
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg?im_w=960"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Where to... uma estadia excêntrica?</h3>
          <p>Em Bali, uma casa de bambu única que é uma obra de arte</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/a6b1bff2-6660-45f5-89df-37e3edf39bb9.jpg?im_w=960"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Where to... fim de semana no mar?</h3>
          <p>Em Lisboa, barco remodelado com todo o conforto para um casal. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
