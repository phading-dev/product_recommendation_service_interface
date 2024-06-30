import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface ContinueEpisode {
  episodeId?: string,
  name?: string,
/* In seconds. */
  length?: number,
/* In seconds. */
  publishedTime?: number,
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
    {
      name: 'length',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'publishedTime',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface SeasonOverview {
  seasonId?: string,
  name?: string,
  coverImagePath?: string,
/* Small number means low quality and price. */
  grade?: number,
  continueEpisode?: ContinueEpisode,
  publisher?: PublisherSummary,
}

export let SEASON_OVERVIEW: MessageDescriptor<SeasonOverview> = {
  name: 'SeasonOverview',
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
      messageType: PUBLISHER_SUMMARY,
    },
  ]
};
