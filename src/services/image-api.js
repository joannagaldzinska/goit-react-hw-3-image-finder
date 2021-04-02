import axios from 'axios';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}&key=20692392-f670546c71115024111737049`,
  );
};

export default { fetchImages };
