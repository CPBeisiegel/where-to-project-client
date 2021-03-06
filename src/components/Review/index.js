import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import apis from "../../apis/api";
import { Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";
import { convertDate } from "../../assets/functions/concertDate";

export function Review() {
  const { id } = useParams();
  console.log("ID", id);

  const { loggedInUser } = useContext(AuthContext);
  console.log("loggedInUser", loggedInUser.user);

  const [currentReview, setCurrentReview] = useState({
    review: "",
  });

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await apis.get(`/reviews/${id}/reviews`);
        setReviews([...response.data]);

        console.log("aqui estão os reviews das casas", response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchReviews();
  }, []);

  function handleChange(event) {
    setCurrentReview({
      ...currentReview,
      [event.target.name]: event.target.value,
    });
    //console.log(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await apis.post(`/reviews/${id}/create-review`, {
        ...currentReview,
        userId: loggedInUser.user._id,
      });
      console.log("Esse é o response", response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Container>
        <h5 className="mt-4 " style={{ color: "#6667AB" }}>
          Escreva um comentário para o proprietário:
        </h5>
        <form onSubmit={handleSubmit}>
          <FormField
            type="text"
            placeholder="Escreva aqui"
            id="createReview"
            name="review"
            onChange={handleChange}
            value={currentReview.review}
            required={true}
          />

          <div className="mt-4 mb-4">
            <ButtonGlobal type="submit">Publicar</ButtonGlobal>
          </div>
        </form>

        {!reviews.length ? null : <h5 className="mt-4 mx-4">Comentários</h5>}
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-start align-items-center ms-3 mt-3 mb-3"
            >
              <div className="d-flex justify-content-start align-items-start ms-3">
                <div className="w-100">
                  <h4
                    className=" mt-2 px-1"
                    style={{
                      fontSize: "18px",
                      width: "33vw",
                      maxWidth: "480px",
                    }}
                  >
                    {review.userId.userName}
                  </h4>
                  <p
                    className="textsFonts text-secondary mt-1 ps-1"
                    style={{
                      fontSize: "12px",
                      width: "33vw",
                      maxWidth: "480px",
                    }}
                  >
                    {convertDate(review.date)}
                  </p>
                  <p
                    className="textsFonts ps-1"
                    style={{
                      fontSize: "14px",
                      width: "33vw",
                      maxWidth: "480px",
                    }}
                  >
                    {review.review}
                  </p>
                </div>
                {review.userId._id === loggedInUser.user._id ? (
                  <div className="container d-flex flex-column">
                    <i className="fas fa-trash p-2 text-dark"></i>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
