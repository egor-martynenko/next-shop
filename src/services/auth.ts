import { User } from '@prisma/client';
import { axiosInstance } from './instance';

export async function getMe(){
  const { data } = await axiosInstance.get<User>('/auth/me');

  if (!data){
    return
  }

  return data;
};