import { useCallback } from 'react';
import axios from 'axios';

const studentAPI = axios.create({});

studentAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await studentAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await studentAPI.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentAPI.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getGroups,
    getStudentsByGroup,
    findStudents,
    getStudentById,
  };
};
