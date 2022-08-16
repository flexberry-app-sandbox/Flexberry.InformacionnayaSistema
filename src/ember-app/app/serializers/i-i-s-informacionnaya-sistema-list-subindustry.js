import { Serializer as ListSubindustrySerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-subindustry';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ListSubindustrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
