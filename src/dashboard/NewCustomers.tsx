import React from 'react'

import CardValue from './CardValue'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

type Customer = {
	id: number
	first_name: string
	last_name: string
	avatar: string
}

const NewCustomers: React.FC<{ customers: Customer[] }> = ({ customers }) => {
	return (
		<Card>
			<CardValue title="New Customers" value={customers.length.toString()} />
			<Divider />
			<List>
				{}
				{customers.map(({ id, first_name, last_name, avatar }) => (
					<ListItem key={id}>
						<ListItemAvatar>
							<Avatar src={avatar} />
						</ListItemAvatar>
						{}
						<ListItemText primary={`${first_name} ${last_name}`} />
					</ListItem>
				))}
			</List>
		</Card>
	)
}

export default NewCustomers
