import tweetResolvers from "./tweet-resolvers";

export default {
  Query: {
    getTweet: tweetResolvers.getTweet,
    getTweets: tweetResolvers.getTweets
  },
  Mutation: {
    createTweet: tweetResolvers.createTweet,
    updateTweet: tweetResolvers.updateTweet,
    deleteTweet: tweetResolvers.deleteTweet,
  }
};
