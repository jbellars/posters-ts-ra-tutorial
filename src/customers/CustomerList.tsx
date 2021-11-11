import React from 'react'
import { List, Datagrid, NumberField, DateField, BooleanField, EditButton } from 'react-admin'

import { AvatarField } from './AvatarField'
import { ChipsField } from '../ChipsField'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

// eslint-disable-next-line
export const CustomerList = (props): ReactJSXElement => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<AvatarField />
			<DateField source="last_seen" />
			<NumberField label="Orders" source="nb_commands" />
			<NumberField source="total_spent" />
			<DateField source="latest_purchase" />
			<BooleanField label="News" source="has_newsletter" />
			<EditButton />
			<ChipsField source="groups" />
		</Datagrid>
	</List>
)
