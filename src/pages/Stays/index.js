import { useState, useEffect } from "react";
import apis from "../../apis/api";
import { Cards } from "../../components/Card";
import Search from "../../components/Search/index";
import { Container } from "react-bootstrap";
import "./Stays.css";

export function Stays() {
  /*  const navigate = useNavigate(); */

  const [stays, setStays] = useState([]);
  const [render, setRender] = useState(true);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    async function fetchStays() {
      try {
        const response = await apis.get("/stays/list-stays");
        setStays([...response.data]);
        setBackup([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStays();
    setRender(false);
  }, [render]);

  // Essa é a função responsavel por filtrar o state
  function filterStays(searchParams) {
    if (searchParams === "") {
      setStays([...backup]);
      return;
    }
    console.log(stays);
    const filtered = stays.filter(
      (currentStay) =>
        currentStay.stayTitle
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentStay.stayCountry
          .toLowerCase()
          .includes(searchParams.toLowerCase()) ||
        currentStay.stayCity.toLowerCase().includes(searchParams.toLowerCase())
    );

    setStays(filtered);
  }

  return (
    <Container>
      <div className="search mb-3" style={{ marginTop: "30px" }}>
        <Search filterAPI={filterStays} />
      </div>

      <div className="cards" style={{ marginTop: "15px" }}>
        {stays.map((currentStay) => {
          return (
            <Cards
              key={currentStay._id}
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
