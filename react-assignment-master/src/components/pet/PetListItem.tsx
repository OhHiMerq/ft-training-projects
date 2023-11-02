import { useNavigate } from "react-router-dom";
import { petsUpdateContextType, petType } from "../context/pets-context";

const ButtonStyle = {
  padding: "0.25rem 1rem",
  borderRadius: "4px",
  border: "1px solid #348bd1",
  color: "white",
  backgroundColor: "#348bd1",
  marginLeft: "0.5rem",
};

type propsType = {
  petUpdateCtx: petsUpdateContextType;
  pet: petType;
};

const PetListItem = (props: propsType) => {
  const navigate = useNavigate();
  const petUpdateCtx = props.petUpdateCtx;
  return (
    <li>
      <div
        style={{
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          marginBottom: "1rem",
          maxWidth: "50%",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "2rem", marginLeft: "2rem" }}>
            <img
              src={props.pet.image}
              alt={props.pet.name}
              style={{
                maxWidth: "100px",
                paddingTop: "2rem",
              }}
            />
          </div>
          <div style={{ height: "auto" }}>
            <h3>Name: {props.pet.name}</h3>
            <p>Breed: {props.pet.breed}</p>
            <p>Sex: {props.pet.sex}</p>
            <p>Id: {props.pet.id}</p>
          </div>
        </div>
        <div style={{ padding: "0.75rem", textAlign: "right" }}>
          <button
            onClick={() => {
              navigate("/profile", { replace: true, state: props.pet });
            }}
            style={ButtonStyle}
          >
            profile
          </button>
          <button
            onClick={() => {
              petUpdateCtx.deletePet(props.pet.id);
            }}
            style={ButtonStyle}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default PetListItem;
