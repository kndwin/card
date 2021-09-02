import { Card, Link, Text } from "@geist-ui/react";
import { Layout } from "components";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "utils/posts";

type AllPostData = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

export default function BlogPage({ allPostsData }: AllPostData) {
  return (
    <Layout>
			<div className='flex flex-col items-center justify-center w-full h-full'>
      {allPostsData.map(({ id, date, title }) => (
        <div
					key={id}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "40em",
          }}
        >
          <Link
            style={{ fontWeight: "bold", fontSize: "1.5em" }}
            block
            href={`/posts/${id}`}
          >
            {title}
          </Link>
          <Text style={{ fontSize: "1.3em" }}>
            {new Date(date).toDateString()}
          </Text>
        </div>
      ))}
			</div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
