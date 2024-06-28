import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PublisherDetail {
  accountId?: string,
  naturalName?: string,
  description?: string,
  avatarLargePath?: string,
}

export let PUBLISHER_DETAIL: MessageDescriptor<PublisherDetail> = {
  name: 'PublisherDetail',
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
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarLargePath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
