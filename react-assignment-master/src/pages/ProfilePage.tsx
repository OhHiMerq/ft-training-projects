import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PetsUpdateContext, petType } from "../components/context/pets-context";
import PetProfile from "../components/pet/PetProfile";

const ProfilePage = () => {
  const petUpdateCtx = useContext(PetsUpdateContext);
  const navigate = useNavigate();
  const pet: any = useLocation().state;

  const onDelete = () => {
    petUpdateCtx.deletePet(pet.id);
    navigate("/pet-records", { replace: true });
  };

  const onEditProfileHandler = (petData: petType) => {
    petData.id = pet.id;
    petUpdateCtx.editPet(petData);
  };

  return (
    <PetProfile
      onDelete={onDelete}
      onEdit={onEditProfileHandler}
      petId={pet.id}
      petUpdateCtx={petUpdateCtx}
    />
  );
};
export default ProfilePage;
