import reducerReducers from 'reduce-reducers';
import todoReducer from './list/index';
import commonReducer from './common/index';

export * from './crete';
export * from './list';
export * from './update';
export * from './delete';

export default reducerReducers(
    {
        todo: [],
        isLoading: false,
        error: null,
    },
    todoReducer,
    commonReducer
)