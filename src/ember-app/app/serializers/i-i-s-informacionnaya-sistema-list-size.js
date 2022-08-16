import { Serializer as ListSizeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-size';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ListSizeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
