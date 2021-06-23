import { Page } from '@geist-ui/react'
import React, { ReactElement } from "react"

export interface LayoutProps {
	children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps): ReactElement | null {
	return (
		<Page size='small'>
			<Page.Header style={{
				paddingTop: '2em', 
				display: 'flex', 
				justifyContent: 'center',
				}}>
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
