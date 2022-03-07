import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

import apis from "../../apis/api";

function InternalNavbar() {
  const [stayTypes, setStayTypes] = useState([]);

  /* criar uma função que vai pegar o nome da navlink e vai percorrer a api e retornar somente os objetos que incluem 
.filter
.includes
 */
  useEffect(() => {
    async function fetchStayTypes() {
      try {
        const result = await apis.get("/stays/list-stays");
        setStayTypes([...result.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStayTypes();
  }, []);

  /*  function filterStayTypes(event) {
    const name = event.target.name;

   const filterTypes = stayTypes.filter((currentStay) => {
      if (currentStay.stayType === name) {
        return currentStay;
      }
    }); 

     setStayTypes(filterTypes);  

    return filterTypes;
  }
  */

  console.log(stayTypes);
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="houseFilter" name="House">
            House
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="apartamentFilter" name="Apartament">
            Apartament
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="motorhomeFilter" name="Motorhome">
            Motorhome
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export { InternalNavbar };
