import tweetResolvers from "./tweet-resolvers";

export default {
  Query: {
    getTweets: tweetResolvers.getTweets
  }
};
