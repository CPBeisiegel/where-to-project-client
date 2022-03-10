import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import apis from "../../apis/api";
import { Button, Container } from "react-bootstrap";
import { Cards } from "../../components/Card";
import "./UserHome.css";

function UserHome() {
  const { id } = useParams();
  const [profile, setProfile] = useState({
    _id: "",
    userName: "",
    email: "",
    userImage: "",
  });
  const [myStays, setMyStays] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apis.get(`/users/profile/${id}`);
        console.log(response.data);
        setProfile({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [id]);

  useEffect(() => {
    async function fetchMyStays() {
      try {
        const response = await apis.get("/stays/myStays");
        console.log("Esse", response.data);
        setMyStays([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMyStays();
  }, []);

  async function handleDelete() {
    try {
      await apis.delete(`/users/disable-account`);
      id.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mt-4 mb-4 d-flex flex-column justify-content-center align-items-center">
      <div
        className="card border-light mt-2 mb-4 bg-light"
        style={{ width: "98vw", maxWidth: "740px" }}
      >
        <div className="page-heading">
          <div className="d-flex justify-content-around align-items-center bg-light">
            <img
              src={profile.userImage}
              alt="User profile"
              className="rounded-circle mx-1 p-3 picUserPof"
              style={{
                height: "190px",
                width: "190px",
                objectFit: "cover",
              }}
            />
            <div>
              <h2 className="titleFont mt-4">{profile.userName}</h2>
              <p className=" subtitleFont ms-2 mt-3">{profile.email}</p>
            </div>

            <div className="btn-perfil">
              <Link to={`/users/profile/update/${profile._id}`}>
                <Button style={{ marginBottom: "10px" }} variant="outline-dark">
                  Editar Perfil{" "}
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`/login`}>
                <Button
                  variant="outline-danger"
                  type="button"
                  onClick={handleDelete}
                >
                  Deletar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="tab-block d-flex justify-content-around">
          <h2>Estadias Cadastradas</h2>
        </div>

        <div>
          <Link to={`/stays/create-stay`}>
            <Button variant="secondary"> Cadastrar uma estadia</Button>
          </Link>
        </div>
        <div className="cards" style={{ marginTop: "15px" }}>
          {myStays.map((currentStay) => {
            return (
              <Cards
                key={currentStay._id}
                id={currentStay._id}
                stayTitle={currentStay.stayTitle}
                stayCountry={currentStay.stayCountry}
                stayCity={currentStay.stayCity}
                stayType={currentStay.stayType}
                stayImage={currentStay.stayImage}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default UserHome;
