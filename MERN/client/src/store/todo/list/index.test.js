import { getTodo } from './index';

it('passes dispatch and getState', () => {
    const { fetchStoreData } = getTodo();
    fetchStoreData((dispatch, startLoading) => {
      dispatch('TEST DISPATCH')
      startLoading()
    })
  })
