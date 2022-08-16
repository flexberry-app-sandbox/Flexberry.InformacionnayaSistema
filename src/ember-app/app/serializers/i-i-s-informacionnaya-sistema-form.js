import { Serializer as FormSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-form';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(FormSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
