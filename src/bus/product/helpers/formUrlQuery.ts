import qs from 'query-string';

import history from 'utils/history';

export const getParams = () => qs.parse(window.location.search.substr(1));

export const formUrlQuery = (data: object) => {
  // eslint-disable-next-line no-undef
  const params = getParams();
  const newParams = { ...params, ...data };
  const searchString = qs.stringify(newParams);
  return history.push({ search: `?${searchString}` });
};

export const clearUrlQuery = () => history.push({ search: '' });
