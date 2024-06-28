import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherOverview {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_OVERVIEW: MessageDescriptor<PublisherOverview> = {
  name: 'PublisherOverview',
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

export interface SeasonOverview {
  seasonId?: string,
  name?: string,
  coverImagePath?: string,
/* Small number means low quality and price. */
  grade?: number,
  continueEpisode?: ContinueEpisode,
  publisher?: PublisherOverview,
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
      messageType: PUBLISHER_OVERVIEW,
    },
  ]
};
