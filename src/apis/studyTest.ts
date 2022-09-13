import { QueryClient } from 'react-query';
import axios, { AxiosError } from "axios";

const INTERNAL_SERVER_ERROR = 500;
const NETWORK_ERROR = 444;

interface StudyErrorResponse {
  data: { errorCode: number };
}


const studyErrorHandler = (error: AxiosError) => {
  const { data: { errorCode } } = error?.response as StudyErrorResponse;

  if (errorCode === INTERNAL_SERVER_ERROR){
    throw{
      code: INTERNAL_SERVER_ERROR,
      message: 'INTERNAL_SERVER_ERROR'
    }
  }
  if (errorCode === NETWORK_ERROR){
    throw{
      code: NETWORK_ERROR,
      message: 'NETWORK_ERROR'
    }
  }
}

const defaultQueryClientOptions = {
  
}

const getStudy = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data.data);
    return data.data;
}

export default getStudy;

