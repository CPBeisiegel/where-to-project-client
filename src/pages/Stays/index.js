import { Cards } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { Container } from "react-bootstrap";
import "./Stays.css";
/* import { InternalNavbar } from "../../components/InternalNavbar"; */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apis from "../../apis/api";

export function Stays(props) {
  /*  const navigate = useNavigate(); */
  const params = useParams();

  const [stays, setStays] = useState([]);
  const [render, setRender] = useState(true);

  useEffect(() => {
    async function fetchStays() {
      try {
        const response = await apis.get("/stays/list-stays");
        setStays([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStays();
    setRender(false);
  }, [render]);

  return (
    <Container>
      <div className="search mb-3" style={{ marginTop: "30px" }}>
        <SearchBar />
      </div>

      {/*   <InternalNavbar /> */}
      <div className="cards" style={{ marginTop: "15px" }}>
        {stays
          .filter((currentStay) => {
            return currentStay.id === params.id;
          })
          .map((currentStay) => {
            return (
              <Cards
                key={currentStay.id}
                setRerender={setRender}
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
  );
}
