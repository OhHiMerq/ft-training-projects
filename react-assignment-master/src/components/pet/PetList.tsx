import { useContext } from "react";
import PetListItem from "./PetListItem";
import { PetsContext, PetsUpdateContext } from "../context/pets-context";

const PetList = () => {
  const petUpdateCtx = useContext(PetsUpdateContext);
  const pets = useContext(PetsContext).registered;

  let content;
  if (pets.length > 0) {
    content = (
      <ul style={{ listStyle: "none" }}>
        {pets.map((pet) => (
          <PetListItem key={pet.id} petUpdateCtx={petUpdateCtx} pet={pet} />
        ))}
      </ul>
    );
  } else {
    content = <div>-- No Pet Here --</div>;
  }
  return content;
};

export default PetList;
