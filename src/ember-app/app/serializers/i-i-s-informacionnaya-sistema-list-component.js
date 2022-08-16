import { Serializer as ListComponentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-component';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ListComponentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
