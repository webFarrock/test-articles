import { urls } from "~/api/config";
import type { IUserResponse } from "~/typing/api/users";

export default () => {
  const requestUser = (id: number) => {
    return useTransport<IUserResponse, IUserResponse>(
      `${urls.users.item}${id}`,
    );
  };

  return {
    requestUser,
  };
};
