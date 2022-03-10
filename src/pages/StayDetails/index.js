import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apis from "../../apis/api";
import { ButtonGlobal } from "../../components/Button";
import { Container, Button } from "react-bootstrap";
import { Review } from "../../components/Review";
import { AuthContext } from "../../contexts/authContext";
import "./StayDetails.css";

export function StayDetails() {
  const { loggedInUser } = useContext(AuthContext);
  const [stayUser, setStayUser] = useState({
    userName: "",
    email: "",
    password: "",
    userPhone: "",
    userImage: "",
  });
  const [stayDetail, setStayDetail] = useState({
    stayTitle: "",
    stayCountry: "",
    stayCity: "",
    stayType: "",
    perNight: null,
    description: "",
    stayDetails: {
      guests: 0,
      bedroom: 0,
      bathroom: 0,
    },
    amenities: [],
    stayImage: "",
    userId: {
      userName: "",
      email: "",
      password: "",
      userPhone: "",
      userImage: "",
    },
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apis.get(`/users/profile/${id}`);
        console.log(response.data);
        setStayUser({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [id]);

  useEffect(() => {
    async function fetchStayDetail() {
      try {
        const result = await apis.get(`/stays/user-stay/${id}`);
        console.log("ESEE", result.data[0]);
        setStayDetail({ ...result.data[0] });
      } catch (error) {
        console.log(error);
      }
    }

    fetchStayDetail();
  }, [id]);

  async function handleDelete() {
    try {
      await apis.delete(`/stays/user-stay/delete/${id}`);
      id.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container className="detail" key={stayDetail._id}>
      <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card border-light mt-2 mb-4"
          style={{ width: "98vw", maxWidth: "740px" }}
        >
          <img
            src={stayDetail.stayImage}
            alt={stayDetail.stayTitle}
            className="detailImg"
          />
          <div>
            <h1 className="titleFont mx-3 mt-4 mb-5">{stayDetail.stayTitle}</h1>
          </div>
          <div className="detailStay">
            <div className="container d-flex flex-row bd-highlight mb-3 mx-2 flex-wrap justify-content-start">
              <h3 className="smallTitle mt-2 ms-1 me-3">Espaço:</h3>

              <button
                className="btn btn-outline-dark btn-sm"
                style={{
                  cursor: "default",
                  borderRadius: "30px",
                  marginRight: "3px",
                  marginLeft: "3px",
                }}
              >
                Hospedes: {stayDetail.stayDetails.guests}
              </button>
              <button
                className="btn btn-outline-dark btn-sm"
                style={{
                  cursor: "default",
                  borderRadius: "30px",
                  marginRight: "3px",
                  marginLeft: "3px",
                }}
              >
                Quartos: {stayDetail.stayDetails.bedroom}
              </button>
              <button
                type="radio"
                className="btn btn-outline-dark btn-sm"
                style={{
                  cursor: "default",
                  borderRadius: "30px",
                  marginRight: "3px",
                  marginLeft: "3px",
                }}
              >
                Banheiros: {stayDetail.stayDetails.bathroom}
              </button>
            </div>
            <div>
              <h3 className="smallTitle mb-3 mt-1 mx-4">Disponibilidade</h3>
              <p className="textsFonts mx-4"> Março a Agosto</p>
              <h3 className="smallTitle my-3 mx-4">Valor por noite:</h3>
              <p className="textsFonts mx-4">{stayDetail.perNight}</p>
              <h3 className="smallTitle my-3 mx-4">Descrição do Local:</h3>
              <article className="textsFonts mx-4">
                {stayDetail.description}
              </article>
              <h3 className="smallTitle my-3 mx-4">Comodidades</h3>
              <p className="textsFonts mx-4">{stayDetail.amenities}</p>
            </div>{" "}
            {/* PEGANDO AS INFORMAÇÕES  DO USUARIO */}
            <div className="container mt-1 d-flex justify-content-center">
              <div
                className="card p-0 px-0 my-3 py-2 adv-first-card border-light"
                style={{
                  width: "98vw",
                  maxWidth: "600px",
                  backgroundColor: "#CCD6E6 ",
                }}
              >
                <div className="first"></div>
                <div className="second d-flex mt-0 p-2 align-items-center justify-content-center">
                  <div className="image ms-3 me-0 d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={stayDetail.userId.userImage}
                      alt="profile"
                      className="rounded-circle profPicAd"
                      width="90px"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="d-flex flex-column align-items-center">
                      <p className="mb-2 ms-0 mt-2">Entre em contato</p>
                      {/* CONTATO */}

                      <a href={`mailto:${stayDetail.userId.email}`}>
                        <i
                          className="fas fa-envelope icon-style text-dark fa-lg mt-0 ms-0"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                  {/* Primera parte do card 1 - Nome e foto do usuário / localização */}
                  <div className="text-center">
                    <div className="">
                      <p className="localizationFont my-0 mx-4 fw-bolder">
                        Proprietário
                      </p>
                      <p className="localizationFont my-2 mx-4 text-dark">
                        {stayDetail.userId.userName}
                      </p>
                      <p className="localizationFont my-0 mx-4 text-dark fst-italic">
                        {stayDetail.stayCity}, {stayDetail.stayCountry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-details">
              <div>
                <Link style={{ textDecoration: "none" }} to={`/stays`}>
                  <ButtonGlobal variant="outline-light" className="btn-back">
                    Voltar
                  </ButtonGlobal>
                </Link>
              </div>
              <div className="btn-buttons">
                {stayDetail.userId === loggedInUser.user._id && (
                  <>
                    <Link
                      style={{ marginRight: "10px" }}
                      to={`/stays/user-stay/update/${id}`}
                    >
                      <Button variant="outline-success">Editar</Button>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/stays`}>
                      <ButtonGlobal
                        variant="outline-danger"
                        type="button"
                        onClick={handleDelete}
                      >
                        Deletar
                      </ButtonGlobal>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review />
    </Container>
  );
}
