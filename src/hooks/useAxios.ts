import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import from React Router
import { useStore } from '../store/store';


const useAxios = () => {
  const {clearStore} = useStore();
  const navigate = useNavigate(); // Use useNavigate instead of useRouter

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      console.error('Axios error:', error);
      if (error.response && error.response.status === 401) {
        navigate('/login'); // Use navigate instead of router.push
        clearStore();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
