import apis from "../../apis/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { Form, Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";
import { ErrorAlert } from "../../components/ErrorAlert";

export function UserEditProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [profile, setProfile] = useState({
    userName: "",
    email: "",
    password: "",
    userPhone: "",
    userImage: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apis.get(`/users/profile/${id}`);
        setProfile({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [id]);

  function handleChange(event) {
    if (event.target.files) {
      setProfile({ ...profile, [event.target.name]: event.target.files[0] });
      return;
    }
    setProfile({ ...profile, [event.target.name]: event.target.value });
  }

  async function handleUpload(file) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);

      const response = await apis.post("/users/pictures", uploadData);

      console.log(response.data.url);

      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const userImage = await handleUpload(profile.userImage);

      const result = await apis.patch(`/users/profile/update/${id}`, {
        ...profile,
        userImage: userImage,
      });
      console.log(result);
      setLoading(false);
      navigate("/user-home");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);

      if (error.result) {
        console.log(error);
        setError(error.response.data);
      } else {
        console.log(error.message);
        setError("Algo deu errado");
      }
    }
  }

  return (
    <Container>
      <h1>Editar o seu perfil</h1>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <FormField
          type="text"
          label="Nome Completo"
          id="userNameEdit"
          name="userName"
          value={profile.userName}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />
        <FormField
          type="email"
          label="E-mail"
          id="emailEdit"
          name="email"
          onChange={handleChange}
          value={profile.email}
          required={true}
          readOnly={loading}
        />

        <FormField
          type="number"
          label="Número de telefone"
          id="userPhoneEdit"
          name="userPhone"
          value={profile.userPhone}
          required={false}
          onChange={handleChange}
          readOnly={loading}
        />
        <FormField
          type="file"
          label="Foto"
          id="userImageEdit"
          name="userImage"
          onChange={handleChange}
          required={true}
          readOnly={loading}
        />
        <div style={{ marginTop: "15px" }}>
          <ButtonGlobal
            variant="outline-success"
            type="submit"
            disable={loading}
          >
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Editar"
            )}
          </ButtonGlobal>

          <Link style={{ textDecoration: "none" }} to={`/user-home`}>
            <ButtonGlobal variant="outline-light" className="btn-back">
              Voltar
            </ButtonGlobal>
          </Link>

          {error ? <ErrorAlert>{error}</ErrorAlert> : null}
        </div>
      </Form>
    </Container>
  );
}
