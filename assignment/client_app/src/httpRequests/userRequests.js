import { callApi } from "../apiUtils/CallApis";
import endPoints from "../apiUtils/EndPoints";

export const httpRegisterUser = async (payload) =>
  await callApi({
    uriEndPoint: {
      ...endPoints.register,
    },
    body: payload,
  });

export const httpListUsers = async (payload) =>
  await callApi({
    uriEndPoint: {
      ...endPoints.users,
    },
  });

export const httpEditUser = async ({ pathParams, body }) => {
  return await callApi({
    uriEndPoint: {
      ...endPoints.edit,
    },
    body,
    pathParams,
  });
};

export const httpDeleteUser = async ({ pathParams }) =>
  await callApi({
    uriEndPoint: {
      ...endPoints.delete,
    },
    pathParams,
  });
