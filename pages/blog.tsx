import { Col, Row, Link, Text } from "@geist-ui/react";
import {Layout} from "components";
import {GetStaticProps} from "next";
import {getSortedPostsData} from "utils/posts";

type AllPostData = {
	allPostsData: {
		date: string
		title: string
		id: string
	}[],
}

export default function BlogPage({ allPostsData }: AllPostData) {
	return (
		<Layout>
			{ allPostsData.map(({ id, date, title}) => (
				<Row key={id} justify='center' >
					<Col span={16} >
						<Row style={{ alignItems: 'center'}}>
							<Col span={8}>
								<Text >
									{new Date(date).toDateString()}
								</Text>		
							</Col>
							<Col>
								<Link style={{ fontWeight: 'bold'}} 
									block href={`/posts/${id}`}>
									{title}
								</Link>			
							</Col>
						</Row>
					</Col>
				</Row>
			))}
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData, 
		}
	}
}
