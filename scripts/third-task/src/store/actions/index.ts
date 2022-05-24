import * as sendRequestCreators from './sendRequestActions';
import * as searchCreators from './searchActions';
import * as contentCreators from './contentActions';
import * as filterByDateFlagCreators from './filterByDateFlagActions';

export default {
    ...sendRequestCreators,
    ...searchCreators,
    ...contentCreators,
    ...filterByDateFlagCreators,
};
