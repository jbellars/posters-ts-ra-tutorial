import React, { PropsWithChildren, ReactElement } from 'react'
import { List, Datagrid, TextField, ResourceComponentProps } from 'react-admin'
import { StaticContext } from 'react-router'

export const CategoryList = (
	props: PropsWithChildren<ResourceComponentProps<Record<string, never>, StaticContext, unknown>>
): ReactElement => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="name" />
		</Datagrid>
	</List>
)
