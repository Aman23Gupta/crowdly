import tweetResolvers from "./tweet-resolvers";
import userResolvers from "./user-resolvers";

export default {
  Query: {
    getTweet: tweetResolvers.getTweet,
    getTweets: tweetResolvers.getTweets
  },
  Mutation: {
    createTweet: tweetResolvers.createTweet,
    updateTweet: tweetResolvers.updateTweet,
    deleteTweet: tweetResolvers.deleteTweet,
    signup: userResolvers.signup,
    login: userResolvers.login,
  }
};
