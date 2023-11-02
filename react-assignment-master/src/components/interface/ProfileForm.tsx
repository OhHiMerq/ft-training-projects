import { useState } from "react";
import { petType } from "../context/pets-context";

const LabelStyle = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const InputStyle = {
  borderRadius: "4px",
  border: "1px solid #ccc",
  padding: "0.25rem",
  width: "100%",
};

type propsType = {
  defaultInput: petType | null;
  onSubmitForm: (petDataHolder: petType) => void;
};

const ProfileForm = (props: propsType) => {
  const [nameInput, setNameInput] = useState<string>(
    props.defaultInput ? props.defaultInput.name : ""
  );
  const [breedInput, setBreedInput] = useState<string>(
    props.defaultInput ? props.defaultInput.breed : ""
  );
  const [sexInput, setSexInput] = useState<string>(
    props.defaultInput ? props.defaultInput.sex : "male"
  );
  const [imageInput, setImageInput] = useState<string>(
    props.defaultInput ? props.defaultInput.image : ""
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const petDataHolder: petType = {
      id: 0,
      name: nameInput,
      breed: breedInput,
      sex: sexInput,
      image: imageInput,
    };
    props.onSubmitForm(petDataHolder);
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
          defaultValue={nameInput}
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
        <input
          type="text"
          required
          id="breed"
          defaultValue={breedInput}
          onChange={(event) => {
            setBreedInput(event.target.value);
          }}
          style={InputStyle}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label htmlFor="sex" style={LabelStyle}>
          Sex:{" "}
        </label>
        <select
          id="sex"
          defaultValue={sexInput}
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
          defaultValue={imageInput}
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
