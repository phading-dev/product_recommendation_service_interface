import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PublisherDetail {
  accountId?: string,
  naturalName?: string,
  description?: string,
  avatarLargePath?: string,
}

export let PUBLISHER_DETAIL: MessageDescriptor<PublisherDetail> = {
  name: 'PublisherDetail',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarLargePath',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};
