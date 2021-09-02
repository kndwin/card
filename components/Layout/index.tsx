import { Twitter, Github, FileText } from '@geist-ui/react-icons'
import { Button, Text, Link, Page } from '@geist-ui/react'
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
	}, [])

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
				<div style={{ justifyContent: 'center', width: '100%', display: 'flex'}}>
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
				</div>
			</Page.Header>
			<Page.Content className="h-full" style={{ paddingTop: '0.5em'}}>
				{children}
			</Page.Content>
			<Page.Footer style={{ 
				display: 'flex', 
				justifyContent: 'center',
				padding: '1.5em 0'
			}}>
				<a href="https://github.com/kndwin">
					<Button icon={<Github/>} 
						auto size="small" 
						style={{ margin: '0 0.5em'}}
						ghost type="secondary" 
					>
						Github
					</Button>
				</a>
				<a href="https://twitter.com/kndwindev">
					<Button icon={<Twitter color='twitter'/>} 
						auto size="small" 
						ghost type="success" 
						style={{ margin: '0 0.5em'}}
					>
						Twitter
					</Button>
				</a>
				<a href="/KevinNguyen.pdf">
					<Button icon={<FileText color='twitter'/>} 
						auto size="small" 
						type="secondary" 
						style={{ margin: '0 0.5em'}}
					>
						Resume
					</Button>
				</a>
			</Page.Footer>
		</Page>
	)
}
