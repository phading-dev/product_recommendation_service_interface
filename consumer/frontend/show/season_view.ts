import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PublisherSnapshot, PUBLISHER_SNAPSHOT } from '../publisher_snapshot';

export interface ContinueEpisode {
  episodeId?: string,
  name?: string,
}

export let CONTINUE_EPISODE: MessageDescriptor<ContinueEpisode> = {
  name: 'ContinueEpisode',
  fields: [
    {
      name: 'episodeId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SeasonView {
  seasonId?: string,
  name?: string,
  coverImagePath?: string,
/* Small number means low quality and price. */
  grade?: number,
  continueEpisode?: ContinueEpisode,
  publisher?: PublisherSnapshot,
}

export let SEASON_VIEW: MessageDescriptor<SeasonView> = {
  name: 'SeasonView',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'coverImagePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'grade',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'continueEpisode',
      messageType: CONTINUE_EPISODE,
    },
    {
      name: 'publisher',
      messageType: PUBLISHER_SNAPSHOT,
    },
  ]
};
