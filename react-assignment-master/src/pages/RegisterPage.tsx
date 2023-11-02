import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PetsUpdateContext, petType } from "../components/context/pets-context";
import ProfileForm from "../components/interface/ProfileForm";

const RegisterPage = () => {
  const petCtx = useContext(PetsUpdateContext);
  const navigation = useNavigate();

  const registerPetHandler = (petData: petType) => {
    petCtx.addPet(petData);
    navigation("/pet-records", { replace: true });
  };

  return (
    <div>
      <h1>Pet Registration</h1>
      <ProfileForm onSubmitForm={registerPetHandler} defaultInput={null} />
    </div>
  );
};

export default RegisterPage;
