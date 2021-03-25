export const GET_IMAGES_API = (pageNumber, searchText) =>
  `https://api.imgur.com/3/gallery/search/time/all/${pageNumber}?q=${searchText}&q_type=jpg`;
export const CLIENT_ID = "b067d5cb828ec5a";
