import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

export default async (_: NextApiRequest, res: NextApiResponse) => {
	const notion = new Client({
		auth: 'secret_Mn8jB00CbHhXw3goDmmNqTb6Ic8t5Ho0RpLHCT50uHH'
	})
	const { results } = await notion.databases.query({ database_id: '0d0164fa-ae60-4d7a-b679-efc0b077c31e'})
	const { properties } = await notion.pages.retrieve({ page_id: '4359f4e607ef414db3b7e393b66f8818'})
	const { results: block } = await notion.blocks.children.list({ block_id: '4359f4e607ef414db3b7e393b66f8818'})
	
	res.status(200).json({ results, properties, block })
}
