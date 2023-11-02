const PetListItem = (props: any) => {
  const { id, name, breed, imageUrl, sex } = props.data;
  console.log(imageUrl);
  return (
    <li>
      <div
        style={{
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          marginBottom: "1rem",
          maxWidth: "25rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "2rem", marginLeft: "2rem" }}>
            <img
              src={imageUrl}
              alt={name}
              style={{
                maxWidth: "100px",
                paddingTop: "2rem",
              }}
            />
          </div>
          <div style={{ height: "auto" }}>
            <h3>Name: {name}</h3>
            <p>Breed: {breed}</p>
            <p>Sex: {sex}</p>
            <p>Id: {id}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PetListItem;
