import { Card, Spacer, Col, Row, Link, Text } from "@geist-ui/react";
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
      {allPostsData.map(({ id, date, title }) => (
        <Card key={id} style={{ margin: "1em 0 2em 0" }} hoverable>
          <Row style={{ alignItems: "center" }}>
            <Col>
              <Link
                style={{ fontWeight: "bold", fontSize: "1.5em" }}
                block
                href={`/posts/${id}`}
              >
                {title}
              </Link>
            </Col>
            <Col span={8}>
              <Text style={{ fontSize: "1.3em" }}>
                {new Date(date).toDateString()}
              </Text>
            </Col>
          </Row>
        </Card>
      ))}
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
