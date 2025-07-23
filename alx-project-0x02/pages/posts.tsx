/* eslint-disable @typescript-eslint/no-explicit-any */
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostPageProps, PostProps } from "@/interfaces";

const Posts: React.FC<PostPageProps> = ({posts}) => {

  
  return (
    <div className="w-full min-h-[80vh]">
      <Header />
      <h1 className="my-4 text-2xl font-bold">Posts Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.title + post.userId}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async() => {
  let posts: PostProps[]=[]
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        posts = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));

      } catch (error) {
        console.log(error);
      }

      return {
        props:{
          posts
        }
      }
    };


export default Posts;
