import React, { PropsWithChildren, ReactElement } from 'react'
import { CoreLayoutProps, Layout } from 'react-admin'
import MyAppBar from './MyAppBar'

/* eslint-disable  @typescript-eslint/no-explicit-any */
const MyLayout = (props: PropsWithChildren<CoreLayoutProps>): ReactElement => (
	<Layout {...props} appBar={MyAppBar} />
)

export default MyLayout
