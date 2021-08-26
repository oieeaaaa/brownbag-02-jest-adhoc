import ApiService from './apiService';

export const getHomonyms = async (soundsLike, limit) => {
  const dataMuse = new ApiService('https://api.datamuse.com');

  const rawData = await dataMuse.query('/words', `sl=${soundsLike}&max=${limit}`);
  const data = await rawData.json();

  return data;
};
