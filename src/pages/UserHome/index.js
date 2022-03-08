import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import apis from "../../apis/api";
import { Button } from "react-bootstrap";

function UserHome() {
  const { id } = useParams();
  const [profile, setProfile] = useState({
    _id: "",
    userName: "",
    email: "",
    userImage: "",
  });

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

  return (
    <>
      <h1>{`Meu nome: ${profile.userName}. Meu email: ${profile.email}. Meu id: ${profile._id}`}</h1>
      <img src={profile.userImage} alt="Minha foto" />
      <Link to={`/users/profile/update/${profile._id}`}>
        <Button variant="primary">Editar </Button>
      </Link>
    </>
  );
}

export default UserHome;
