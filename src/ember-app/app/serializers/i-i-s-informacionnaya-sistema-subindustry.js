import { Serializer as SubindustrySerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-subindustry';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SubindustrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
