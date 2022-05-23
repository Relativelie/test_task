import * as sendRequestCreators from './sendRequestActions';
import * as searchCreators from './searchActions';
import * as contentCreators from './contentActions';
import * as filterByStatusCreators from './filterByStatusActions';
import * as filterByDateFlagCreators from './filterByDateFlagActions';

export default {
    ...sendRequestCreators,
    ...searchCreators,
    ...contentCreators,
    ...filterByStatusCreators,
    ...filterByDateFlagCreators,
};
