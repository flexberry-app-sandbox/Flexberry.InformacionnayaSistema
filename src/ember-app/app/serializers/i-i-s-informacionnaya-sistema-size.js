import { Serializer as SizeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-size';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SizeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
