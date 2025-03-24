import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
} from "graphql";

import _ from "lodash";

// Dummy data
var userData = [
  { id: 1, name: "Ishan", age: 14, profession: "Student" },
  { id: 2, name: "Ishika", age: 14, profession: "Student" },
  { id: 3, name: "Akhilesh", age: 50, profession: "Developer" },
  { id: 4, name: "Ashlesha", age: 43, profession: "Teacher" },
];

var hobbies = [
  {
    id: 1,
    userId: 1,
    title: "Guitar",
    description: "Playing acoustic and electric guitar.",
  },
  {
    id: 2,
    userId: 1,
    title: "Football",
    description: "Playing as a central midfielder and practicing long shots.",
  },
  {
    id: 3,
    userId: 3,
    title: "Gaming",
    description:
      "Playing FPS and open-world games like CS2, Fallout, and RDR2.",
  },
  {
    id: 4,
    userId: 4,
    title: "Gardening",
    description: "Taking care of a garden with over 90 plants.",
  },
  {
    id: 5,
    userId: 1,
    title: "Piano",
    description: "Playing at a grandmaster level with complex compositions.",
  },
];

var posts = [
  {
    id: 1,
    userId: 1,
    comment: "Just finished an intense CS2 match. My aim was on point! 🎯🔥",
  },
  {
    id: 2,
    userId: 1,
    comment: "Planted some new flowers in my garden today. Looks amazing! 🌿🌸",
  },
  {
    id: 3,
    userId: 3,
    comment: "Finally nailed that long shot in football practice. 🚀⚽",
  },
  {
    id: 4,
    userId: 4,
    comment: "Trying out a new guitar riff—sounds insane! 🎸🎶",
  },
  {
    id: 5,
    userId: 1,
    comment: "Got MVP again in CS2. My dad still calls me a sweat. 😂",
  },
];

// Define PostType first to avoid reference errors
const PostType = new GraphQLObjectType({
  name: "Post",
  description: "User posts",
  fields: () => ({
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    comment: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent) {
        return _.find(userData, { id: parent.userId });
      },
    },
  }),
});

// Define HobbyType
const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "User hobbies",
  fields: () => ({
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent) {
        return _.find(userData, { id: parent.userId });
      },
    },
  }),
});

// Define UserType
const UserType = new GraphQLObjectType({
  name: "User",
  description: "User information",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },

    posts: {
      type: new GraphQLList(PostType),
      resolve(parent) {
        return _.filter(posts, { userId: parent.id });
      },
    },

    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent) {
        return _.filter(hobbies, { userId: parent.id });
      },
    },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Queries for User, Hobby & Post types",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(userData, { id: args.id });
      },
    },
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(hobbies, { id: args.id });
      },
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return _.find(posts, { id: args.id });
      },
    },
  },
});

// Export Schema
export default new GraphQLSchema({
  query: RootQuery,
});
