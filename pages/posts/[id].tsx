import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Layout } from 'components'
import { getAllPostIds, getPostData } from 'utils/posts'
import { Breadcrumbs, Link, Text} from '@geist-ui/react'
import { components } from 'components'
import styles from './markdown.module.scss'

type PostData = {
  postData: {
    title: string
    date: string
    fileContents: string
  }
}

export default function Post({ postData } : PostData) {
  return (
    <Layout>
      <Head>
				<title>{postData.title}</title>
			</Head>
			<Breadcrumbs >
				<Link href="/blog">
					<Breadcrumbs.Item>Blog</Breadcrumbs.Item>
				</Link>
				<Breadcrumbs.Item>{postData.title}</Breadcrumbs.Item>
			</Breadcrumbs>
      <article style={{ margin: '2em 0'}}>
				<Text h1>
					{postData.title}
				</Text>
				<ReactMarkdown
					className={styles.markdown}
					plugins={[gfm]}
					components={components}
				>
					{postData.fileContents}
				</ReactMarkdown>
      </article>
			<Link href='#' block>
					Back to top	⬆
			</Link>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}
