//
// export default {
// 	STARWARS_SEARCH_PEOPEL: 'STARWARS_SEARCH_PEOPEL',
// 	STARWARS_LOADED_SUCCESS: 'STARWARS_LOADED_SUCCESS',
// 	STARWARS_LOADED_FAIL: 'STARWARS_LOADED_FAIL',
// 	STARWARS_PERSON_DETAILS: 'STARWARS_PERSON_DETAILS',
// };


import { arrayToEnum } from '_helper/arrayHelper';

const actionTypes = [
	'STARWARS_SEARCH_PEOPEL',
	'STARWARS_LOADED_SUCCESS',
	'STARWARS_LOADED_FAIL',
	'STARWARS_PERSON_DETAILS',
];

export default arrayToEnum(actionTypes);
