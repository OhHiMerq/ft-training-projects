import { GraphQLContext } from "../context";

const info = () => {
  return `The goal is to create a one-stop solution for pet owners to 
    identify and register their pets within a global pet database, help return
    lost pets to their homes, organize travel, save pet documents and maintain
    health records, schedule vet visits, communicate, order favorite pet
    munchies and more!`;
};

const pets = async (parent: unknown, args: {}, context: GraphQLContext) => {
  return context.prisma.pet.findMany();
};

const createPet = async (
  parent: unknown,
  args: { name: string; breed: string; imageUrl: string; sex: string },
  context: GraphQLContext
) => {
  const newPet = await context.prisma.pet.create({
    data: {
      name: args.name,
      breed: args.breed,
      imageUrl: args.imageUrl,
      sex: args.sex,
    },
  });
  return newPet;
};

const updatePet = async (
  parent: unknown,
  args: {
    id: number;
    name: string;
    breed: string;
    imageUrl: string;
    sex: string;
  },
  context: GraphQLContext
) => {
  const newPet = await context.prisma.pet.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
      breed: args.breed,
      imageUrl: args.imageUrl,
      sex: args.sex,
    },
  });
  return newPet;
};

const deletePet = async (
  parent: unknown,
  args: { id: number },
  context: GraphQLContext
) => {
  const deletedPet = await context.prisma.pet.delete({
    where: {
      id: args.id,
    },
  });
  return deletedPet;
};

export const petResolvers = {
  Query: { info, pets },
  Mutation: { createPet, updatePet, deletePet },
};
