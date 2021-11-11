import React from 'react'
import {
	Edit,
	TextInput,
	BooleanInput,
	DateInput,
	TabbedForm,
	FormTab,
	ReferenceManyField,
	TextField,
	EditButton,
	Datagrid,
	DateField,
	NumberField,
} from 'react-admin'
import { AvatarField } from './AvatarField'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

/*
interface Customer {
	first_name: string
	last_name: string
	avatar: string
}
*/

// eslint-disable-next-line
export const CustomerEdit = (props): ReactJSXElement => (
	<Edit title={<AvatarField record={props.source} />} {...props}>
		<TabbedForm>
			<FormTab label="Identity">
				<TextInput source="first_name" />
				<TextInput source="last_name" />
				<TextInput source="email" />
				<DateInput source="birthday" />
			</FormTab>
			<FormTab label="Address">
				<TextInput source="address" />
				<TextInput source="zipcode" />
				<TextInput source="city" />
			</FormTab>
			<FormTab label="Orders">
				<ReferenceManyField
					addLabel={false}
					reference="commands"
					source="customer_id"
					target="post_id"
				>
					<Datagrid>
						<DateField source="date" />
						<TextField source="reference" />
						<NumberField label="Nb items" source="basket.length" />
						<NumberField source="total" />
						<TextField source="status" />
						<EditButton />
					</Datagrid>
				</ReferenceManyField>
			</FormTab>
			<FormTab label="Reviews" />
			<FormTab label="Stats">
				<TextInput source="groups" />
				<BooleanInput source="has_newsletter" />
				<DateInput source="first_seen" />
				<TextInput source="latest_purchase" />
				<DateInput source="last_seen" />
			</FormTab>
		</TabbedForm>
	</Edit>
)
