import { gql } from "apollo-server";

export const petTypeDefs = gql`
  type Pet {
    id: ID!
    name: String!
    breed: String!
    imageUrl: String!
    sex: String!
  }

  type Query {
    info: String!
    pets: [Pet!]!
  }

  type Mutation {
    createPet(
      name: String!
      breed: String!
      imageUrl: String!
      sex: String!
    ): Pet!
    updatePet(
      id: Int!
      name: String!
      breed: String!
      imageUrl: String!
      sex: String!
    ): Pet!
    deletePet(id: Int!): Pet!
  }
  type Subscription {
    petAdded(id: Int!): Pet!
  }
`;
