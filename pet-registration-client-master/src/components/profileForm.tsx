import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const LabelStyle = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const InputStyle = {
  borderRadius: "4px",
  border: "1px solid #ccc",
  padding: "0.25rem",
  width: "35rem",
};

const CREATE_PET = gql`
  mutation Mutation(
    $name: String!
    $breed: String!
    $imageUrl: String!
    $sex: String!
  ) {
    createPet(name: $name, breed: $breed, imageUrl: $imageUrl, sex: $sex) {
      id
      name
      breed
      imageUrl
      sex
    }
  }
`;

const petBreeds = {
  dog: {
    id: "dog",
    name: "Dog",
    subBreed: ["Husky", "Beagle", "Labrador", "Poodle"],
  },
  cat: {
    id: "cat",
    name: "Cat",
    subBreed: ["Persian", "Siamese", "Himalayan", "Sphynx"],
  },
};

const ProfileForm = () => {
  const [createPet, { loading, error }] = useMutation(CREATE_PET);

  const [nameInput, setNameInput] = useState<string>("");
  const [breedInput, setBreedInput] = useState<string>(petBreeds.cat.id);
  const [subBreedInput, setSubBreedInput] = useState<string>(
    (petBreeds as any)[breedInput].subBreed[0]
  );
  const [sexInput, setSexInput] = useState<string>("male");
  const [imageInput, setImageInput] = useState<string>("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(subBreedInput);
    createPet({
      variables: {
        name: nameInput,
        breed: subBreedInput,
        imageUrl: imageInput,
        sex: sexInput,
      },
    });
  };

  return (
    <form onSubmit={submitHandler} style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "0.5rem" }}>
        <label htmlFor="name" style={LabelStyle}>
          Name:{" "}
        </label>
        <input
          type="text"
          required
          id="name"
          onChange={(event) => {
            setNameInput(event.target.value);
          }}
          style={InputStyle}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label htmlFor="breed" style={LabelStyle}>
          Breed:{" "}
        </label>
        <select
          value={breedInput}
          id="breed"
          onChange={(e) => {
            setBreedInput(e.target.value);
          }}
          style={InputStyle}
        >
          {Object.keys(petBreeds).map((key) => (
            <option key={key} value={key}>
              {(petBreeds as any)[key].name}
            </option>
          ))}
        </select>
        <select
          id="subBreed"
          value={subBreedInput}
          onChange={(e) => {
            setSubBreedInput(e.target.value);
          }}
          style={InputStyle}
        >
          {(petBreeds as any)[breedInput].subBreed.map((key: string) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label htmlFor="sex" style={LabelStyle}>
          Sex:{" "}
        </label>
        <select
          id="sex"
          onChange={(event) => {
            setSexInput(event.target.value);
          }}
          style={InputStyle}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label htmlFor="image" style={LabelStyle}>
          Image URL:{" "}
        </label>
        <input
          type="url"
          required
          id="image"
          onChange={(event) => {
            setImageInput(event.target.value);
          }}
          style={InputStyle}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ProfileForm;
