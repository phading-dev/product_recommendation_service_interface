import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PublisherSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SUMMARY: MessageDescriptor<PublisherSummary> = {
  name: 'PublisherSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallPath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
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
  fields: [{
    name: 'episodeId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'length',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'publishedTime',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
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
  fields: [{
    name: 'seasonId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'coverImagePath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'grade',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'continueEpisode',
    index: 5,
    messageType: CONTINUE_EPISODE,
  }, {
    name: 'publisher',
    index: 6,
    messageType: PUBLISHER_SUMMARY,
  }],
};
