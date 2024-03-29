import { ReactNode } from "react";

export type ChildrenPropsType = {
  children: ReactNode;
} & LowerPropsType;

export type LowerPropsType = {
  lower?: boolean;
};

export type TitlePropsType = {
  title: string | number;
};

export type ZennArticleType = {
  id: number;
  title: string;
  body_letters_count: number;
  body_updated_at: string | null;
  comments_count: number;
  emoji: string;
  is_suspending_private: boolean;
  liked_count: number;
  path: string;
  post_type: string;
  publication: string | null;
  published: boolean;
  published_at: string;
  slug: string;
  source_repo_updated_at: string | null;
  user: {
    id: number;
    name: string;
    avatar_small_url: string;
    username: string;
  };
};
