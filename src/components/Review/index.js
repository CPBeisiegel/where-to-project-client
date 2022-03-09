import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import apis from "../../apis/api";
import { Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";

export function Review() {
  const { id } = useParams();
  //console.log("ID", id);
  const navigate = useNavigate();

  const { loggedInUser } = useContext(AuthContext);
  //console.log("loggedInUser", loggedInUser);

  const [currentReview, setCurrentReview] = useState({
    userId: "",
    review: "",
    stayReview: "",
  });

  const [reviews, setReviews] = useState([]);
  //const [stayId, setStayId] = useState("");

  /* useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await apis.get(`/stays/user-stay/${id}"`);
        setReviews([...response.data.review]); //?????
        setStayId = 
      } catch (error) {
        console.error(error);
      }
    }
  });
 */

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
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Container>
        <h1>Comentar</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            type="text"
            label="Deixe seu comentário"
            id="createReview"
            name="review"
            onChange={handleChange}
            value={currentReview.review}
            required={true}
          />

          <div style={{ marginTop: "15px" }}>
            <ButtonGlobal type="submit">Publicar</ButtonGlobal>
          </div>
        </form>

        <h5>Comentários</h5>
        {reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-start align-items-start ms-3"
            >
              <div className="w-100">
                <h4
                  className="mt-2 px-1"
                  style={{ fontSize: "18px", width: "33vw", maxWidth: "480px" }}
                >
                  {review.userId.userName}
                </h4>
                <p
                  className="textsFonts ps-1"
                  style={{ fontSize: "14px", width: "33vw", maxWidth: "480px" }}
                >
                  {review.review}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}