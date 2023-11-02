import { createContext, useState } from "react";

export type petType = {
  id: number;
  name: string;
  breed: string;
  sex: string;
  image: string;
};

export type petsContextType = {
  registered: petType[];
  recordCount: number;
};

export type petsUpdateContextType = {
  addPet: (pet: petType) => void;
  deletePet: (petId: number) => void;
  editPet: (pet: petType) => void;
  getPetById: (petId: number) => petType;
};

export const PetsContext = createContext<petsContextType>({
  registered: [],
  recordCount: 0,
});

export const PetsUpdateContext = createContext<petsUpdateContextType>({
  addPet: (pet: petType) => {},
  deletePet: (petId: number) => {},
  editPet: (pet: petType) => {},
  getPetById: (petId: number) => {
    const pet: petType = { id: 0, name: "", breed: "", sex: "", image: "" };
    return pet;
  },
});

export const PetsContextProvider = (props: any) => {
  const [registeredPet, setRegisteredPet] = useState<petType[]>([]);

  const addPetHandler = (pet: petType) => {
    pet.id =
      registeredPet.length > 0
        ? registeredPet[registeredPet.length - 1].id + 1
        : 1;
    setRegisteredPet((prevPets) => {
      return prevPets.concat(pet);
    });
  };

  const deletePetHandler = (petId: number) => {
    setRegisteredPet((prevPets) => {
      return prevPets.filter((pet) => pet.id !== petId);
    });
  };

  const editPetHandler = (pet: petType) => {
    setRegisteredPet((prevPets) => {
      const petIndex = prevPets.findIndex((pet_) => pet_.id === pet.id);
      prevPets[petIndex] = pet;
      return prevPets;
    });
  };

  const getPetByIdHandler = (petId: number) => {
    const petIndex = registeredPet.findIndex((pet) => pet.id === petId);
    return registeredPet[petIndex];
  };

  const petContext = {
    registered: registeredPet,
    recordCount: registeredPet.length,
  };
  const petUpdateContext = {
    addPet: addPetHandler,
    deletePet: deletePetHandler,
    editPet: editPetHandler,
    getPetById: getPetByIdHandler,
  };

  return (
    <PetsContext.Provider value={petContext}>
      <PetsUpdateContext.Provider value={petUpdateContext}>
        {props.children}
      </PetsUpdateContext.Provider>
    </PetsContext.Provider>
  );
};
