import { Serializer as ComponentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-component';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ComponentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
