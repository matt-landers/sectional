type Post = {
  id?: string;
  title: string;
  content: string;
  author?: Author;
  published?: Date;
  revisions?: Array<Post>;
};
