import { Carousel } from "react-bootstrap";

export function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          style={{
            height: "30rem",
            width: "100%",
            objectFit: "cover",
          }}
          src="https://a0.muscache.com/im/pictures/8d79bde6-d636-4255-8ba1-e7b67553fded.jpg?im_w=960"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: "#6667AB" }}>
          <h3>Where to... férias luxuosas?</h3>
          <p>
            Perto de Londres, casa construída em 1710 para aristocracia inglesa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          style={{
            height: "30rem",
            width: "100%",
            objectFit: "cover",
          }}
          src="https://a0.muscache.com/im/pictures/220a7a21-6579-41e4-92df-b559fffe6776.jpg?im_w=1200"
          alt="Second slide"
        />
        <Carousel.Caption style={{ backgroundColor: "#6667AB" }}>
          <h3>Where to... uma estadia excêntrica?</h3>
          <p>Em Bali, uma casa de bambu única que é uma obra de arte.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          style={{
            height: "30rem",
            width: "100%",
            objectFit: "cover",
          }}
          src="https://a0.muscache.com/im/pictures/33f30e4f-31ff-49eb-9a3b-bd65f2ba38e5.jpg?im_w=1200"
          alt="Third slide"
        />
        <Carousel.Caption style={{ backgroundColor: "#6667AB" }}>
          <h3>Where to... fim de semana sobre a água?</h3>
          <p>
            Em Amsterdã, barco remodelado com todo o conforto para um casal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
