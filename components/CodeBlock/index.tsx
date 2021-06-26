import React from 'react'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const components = {
	code({node, inline, className, children, ...props}: any) {
		const match = /language-(\w+)/.exec(className || '')
		return !inline && match ? (
			<SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div"  {...props} >
				{String(children).replace(/\n$/, '')}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		)
	}
}
