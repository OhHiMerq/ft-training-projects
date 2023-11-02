import { useQuery, gql } from "@apollo/client";
import PetListItem from "./PetListItem";

const GET_PETS = gql`
  query Query {
    pets {
      id
      name
      breed
      imageUrl
      sex
    }
  }
`;

const PETS_SUBSCRIPTION = gql`
  subscription Subscription($petAddedId: Int!) {
    petAdded(id: $petAddedId) {
      id
      name
      breed
      imageUrl
      sex
    }
  }
`;

const PetList = () => {
  const { loading, error, data } = useQuery(GET_PETS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <>
      <div>
        <ul>
          {data.pets.map(
            (pet: {
              id: number;
              name: string;
              breed: string;
              imageUrl: string;
              sex: string;
            }) => (
              <PetListItem key={pet.id} data={pet} />
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default PetList;
