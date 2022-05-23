import * as sendRequestCreators from './sendRequestActions';
import * as filterCreators from './filterByDateActions';
import * as searchCreators from './searchActions';
import * as contentCreators from './contentActions';

export default {
    ...sendRequestCreators,
    ...filterCreators,
    ...searchCreators,
    ...contentCreators,
};
