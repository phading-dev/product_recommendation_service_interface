import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherSnapshot {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let PUBLISHER_SNAPSHOT: MessageDescriptor<PublisherSnapshot> = {
  name: 'PublisherSnapshot',
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
