import React from 'react'
import { List, Datagrid, TextField, NumberField, DateField, ReferenceField } from 'react-admin'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

// eslint-disable-next-line
export const ReviewList = (props): ReactJSXElement => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<DateField source="date" />
			<TextField source="status" />
			<ReferenceField source="command_id" reference="commands">
				<TextField source="id" />
			</ReferenceField>
			<ReferenceField source="product_id" reference="products">
				<TextField source="id" />
			</ReferenceField>
			<ReferenceField source="customer_id" reference="customers">
				<TextField source="id" />
			</ReferenceField>
			<NumberField source="rating" />
			<TextField source="comment" />
		</Datagrid>
	</List>
)
