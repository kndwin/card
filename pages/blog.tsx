import { Card, Link, Text } from "@geist-ui/react";
import clsx from "clsx";
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
      <div className="flex flex-col items-start w-full h-full">
        {allPostsData.map(({ id, date, title }) => (
          <div className={clsx("flex flex-col mb-4")} key={id}>
            <Link href={`/posts/${id}`}>
							<span className="text-2xl font-bold" >
              {title}
							</span>
            </Link>
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
