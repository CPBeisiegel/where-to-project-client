import { Cards } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
/* import { InternalNavbar } from "../../components/InternalNavbar"; */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apis from "../../apis/api";

export function Stays(props) {
  /*  const navigate = useNavigate(); */
  const params = useParams();

  const [stays, setStays] = useState([]);

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
  }, []);

  console.log("ESSE AQUI");

  return (
    <div className="cards">
      <SearchBar />

      {/*   <InternalNavbar /> */}

      {stays
        .filter((currentStay) => {
          return currentStay.id === params.id;
        })
        .map((currentStay) => {
          return (
            <Cards
              key={currentStay.id}
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
  );
}
