import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { petResolvers } from "./schema/pet";
import { petTypeDefs } from "./schema/pet.sdl";

const server = new ApolloServer({
  typeDefs: [petTypeDefs],
  resolvers: [petResolvers],
  context: createContext,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
