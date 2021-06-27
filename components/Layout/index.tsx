import { Row, Spacer, Text, Link, Page, Toggle } from '@geist-ui/react'
import {useRouter} from 'next/dist/client/router'
import React, { ReactElement, useEffect, useState } from "react"

export interface LayoutProps {
	children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps): ReactElement | null {
	const router = useRouter()
	const route = router.route
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	})

	if (!mounted)  {
		return null
	}
	const links = [
		{ title: 'kndwin',	link: '/'}, 
		{ title: 'blog',		link: '/blog'},
		{ title: 'work',		link: '/work'},
	]
	return (
		<Page size='small'>
			<Page.Header style={{
				padding: '4em 0 1em 0', 
				display: 'flex', 
				justifyContent: 'center',
				}}>
				<Row style={{ alignItems: 'center'}}>
				{links.map( ({ title, link }) => (
					<Text style={{ marginRight: '1em'}} 
						type={ route == link ? 'success' : 'default'} 
						h4 
						key={title}>
						<Link href={link}>
							{title}
						</Link>
					</Text>
				))}
				</Row>
			</Page.Header>
			<Page.Content style={{ paddingTop: '0.5em'}}>
				{children}
			</Page.Content>
			<Page.Footer style={{ 
				display: 'flex', 
				justifyContent: 'center',
				padding: '1.5em 0'
			}}>
			</Page.Footer>
		</Page>
	)
}
