interface IUser {
  user_uid: string;
  user_email: string;
  user_goal: string;
  user_nickname: string;
  create_date: Date;
  update_date: Date;
  user_exp: number;
}

export type { IUser };
