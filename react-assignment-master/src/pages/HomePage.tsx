const HomePage = () => {
  return (
    <div>
      <h1>Welcome, Register a pet!</h1>
      <div style={{ display: "flex" }}>
        <div style={{ maxWidth: "65%" }}>
          <img
            src={require("../images/dog.jpg")}
            alt="dog police"
            style={{
              width: "70%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "1rem",
            }}
          />
        </div>
        <div style={{ maxWidth: "30%" }}>
          <p
            style={{
              textAlign: "justify",
              lineHeight: "25px",
            }}
          >
            The goal is to create a one-stop solution for pet owners to identify
            and register their pets within a global pet database, help return
            lost pets to their homes, organize travel, save pet documents and
            maintain health records, schedule vet visits, communicate, order
            favorite pet munchies and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
