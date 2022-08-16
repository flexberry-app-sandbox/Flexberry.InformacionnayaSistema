import { Serializer as ListInvestmentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-investment';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ListInvestmentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
