import { useState } from "react";
import { petsUpdateContextType, petType } from "../context/pets-context";
import ProfileForm from "../interface/ProfileForm";

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
  petId: number;
  onEdit: (pet: petType) => void;
  onDelete: () => void;
};

const PetProfile = (props: propsType) => {
  const [editProfile, setEditProfile] = useState(false);
  const pet = props.petUpdateCtx.getPetById(props.petId);

  const onEditProfileHandler = (petData: petType) => {
    props.onEdit(petData);
    setEditProfile(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      <div
        style={{
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          marginBottom: "1rem",
          maxWidth: "70%",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ padding: "1rem" }}>
            <img src={pet.image} alt={pet.name} style={{ maxWidth: "200px" }} />
          </div>
          <div style={{ padding: "3rem", fontSize: "1.25rem" }}>
            <div>
              <b>ID: </b>
              {pet.id}
            </div>
            <div>
              <b>Name: </b>
              {pet.name}
            </div>
            <div>
              <b>Breed: </b>
              {pet.breed}
            </div>
            <div>
              <b>Gender: </b>
              {pet.sex}
            </div>
          </div>
        </div>
        {editProfile ? (
          <ProfileForm onSubmitForm={onEditProfileHandler} defaultInput={pet} />
        ) : null}
        <div style={{ padding: "0.75rem", textAlign: "right" }}>
          <button
            onClick={() => {
              setEditProfile(!editProfile);
            }}
            style={ButtonStyle}
          >
            {editProfile ? "Cancel" : "Edit"}
          </button>
          <button onClick={props.onDelete} style={ButtonStyle}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default PetProfile;
