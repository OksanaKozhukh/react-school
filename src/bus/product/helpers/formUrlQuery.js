import qs from 'query-string';

import history from 'utils/history';

export const formUrlQuery = (data) => {
  // eslint-disable-next-line no-undef
  const params = qs.parse(window.location.search.substr(1));
  const newParams = { ...params, ...data };
  const searchString = qs.stringify(newParams);
  history.push({ search: `?${searchString}` });
};
