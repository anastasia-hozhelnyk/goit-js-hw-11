'use strict';

const API_KEY = '43812736-1272d84cdac6660be422ea1fc';
const BASE_URL = `https://pixabay.com/api/`;

export function fetchImg(q) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
