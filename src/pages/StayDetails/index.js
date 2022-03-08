import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apis from "../../apis/api";
import { ButtonGlobal } from "../../components/Button";
import { Container } from "react-bootstrap";

export function StayDetails() {
  const [stayDetail, setStayDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchStayDetail() {
      try {
        const result = await apis.get(`/stays/user-stay/${id}`);
        console.log(result.data);
        setStayDetail({ ...result.data[0] });
      } catch (error) {
        console.log(error);
      }
    }

    fetchStayDetail();
  }, [id]);

  return (
    <Container className="detail" key={stayDetail._id}>
      <img
        src={stayDetail.image}
        alt={stayDetail.stayTitle}
        className="detailImg"
      />

      <div className="detailStay">
        <h1>{stayDetail.stayTitle}</h1>

        {/*  <p>{stayDetail.stayDetails}</p> */}

        <span className="price">Preço: {stayDetail.perNight}</span>

        <article>Descrição: {stayDetail.description}</article>

        <Link style={{ textDecoration: "none" }} to={`/stays`}>
          <ButtonGlobal variant="outlined">Voltar</ButtonGlobal>
        </Link>
      </div>
    </Container>
  );
}
