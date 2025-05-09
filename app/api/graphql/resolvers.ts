import { generateMockTweets } from '../../utils/mockdata';
import type { AggregatedSentiment } from '../../types/sentiment';

export const resolvers = {
  Query: {
    getBitcoinSentiment: async (): Promise<AggregatedSentiment> => {
      try {
        console.log('Resolving getBitcoinSentiment...');
        const sentimentData = generateMockTweets(20); // Generate 20 mock tweets
        console.log('Sentiment data:', JSON.stringify(sentimentData, null, 2));

        const overallSentiment =
          sentimentData.reduce((sum, item) => sum + item.sentiment, 0) /
          sentimentData.length;

        return {
          overallSentiment,
          sentimentData,
          timestamp: new Date().toISOString(),
        };
      } catch (error) {
        console.error('Error in getBitcoinSentiment:', error);
        throw new Error(
          `Error in getBitcoinSentiment: ${(error as Error).message}`
        );
      }
    },
  },
};
