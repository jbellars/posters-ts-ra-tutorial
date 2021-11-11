import React from 'react'
import { useQuery, GET_LIST } from 'react-admin'

/** @jsxRuntime classic /
/* @jsx jsx */
import { css } from '@emotion/react'

// import { addDays, endOfMonth, startOfMonth } from 'date-fns'

import WelcomeFrame from './WelcomeFrame'
import PendingOrders from './PendingOrders'
import PendingReviews from './PendingReviews'
import NewCustomers from './NewCustomers'
import NewOrders from './NewOrders'
import MonthlyRevenue from './MonthlyRevenue'

const styles = {
	flexRow: css`
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	`,
	flexColumn: css`
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	`,

	leftItem: css`
		flex: 1 0 0;
		margin-right: 1em;
	`,
	rightItem: css`
		flex: 1 0 0;
		margin-left: 1em;
	`,
	singleItem: css`
		flex: 1 0 0;
		margin-top: 2em;
		margin-bottom: 2em;
	`,
}

//const today = Date.now()
const Dashboard: React.FC = () => {
	const { data: lastMonthOrders } = useQuery({
		type: GET_LIST,
		resource: 'commands',
		payload: {
			pagination: { page: 1, perPage: 10 },
			sort: { field: 'price', order: 'ASC' },
			filter: {
				status: 'delivered',
				// date_gte: startOfMonth(today),
				// date_lte: endOfMonth(today),
			},
		},
	})
	console.log('lastMonthOrders', lastMonthOrders)
	const { total: nbPendingOrders, data: pendingOrders } = useQuery({
		type: GET_LIST,
		resource: 'commands',
		payload: {
			pagination: { page: 1, perPage: 10 },
			sort: { field: 'price', order: 'ASC' },
			filter: { status: 'ordered' },
		},
	})

	const { data: newCustomers } = useQuery({
		type: GET_LIST,
		resource: 'customers',
		payload: {
			pagination: { page: 1, perPage: 7 },
			sort: { field: 'date', order: 'ASC' },
			filter: {
				has_ordered: true,
				// last_seen_gte: addDays(today, -3)
			},
		},
	})

	const { data: pendingReviews } = useQuery({
		type: GET_LIST,
		resource: 'reviews',
		payload: {
			pagination: { page: 1, perPage: 10 },
			sort: { field: 'date', order: 'DESC' },
			filter: { status: 'pending' },
		},
	})

	const totalAmount =
		lastMonthOrders && lastMonthOrders.reduce((acc, order) => acc + order.total, 0)

	return (
		<div data-css={styles.flexRow}>
			<div data-css={styles.leftItem}>
				<div data-css={styles.flexColumn}>
					<div data-css={styles.flexRow}>
						<div data-css={styles.leftItem}>
							{<MonthlyRevenue value={totalAmount ? totalAmount.toFixed(0) : '-'} />}
						</div>
						<div data-css={styles.rightItem}>
							{<NewOrders value={nbPendingOrders ? nbPendingOrders : 0} />}
						</div>
					</div>
					<div data-css={styles.singleItem}>{<WelcomeFrame />}</div>
					<div data-css={styles.singleItem}>
						{<PendingOrders orders={pendingOrders ? pendingOrders : []} />}
					</div>
				</div>
			</div>
			<div data-css={styles.rightItem}>
				<div data-css={styles.flexRow}>
					<div data-css={styles.leftItem}>
						{<PendingReviews reviews={pendingReviews ? pendingReviews : []} />}
					</div>
					<div data-css={styles.rightItem}>
						{<NewCustomers customers={newCustomers ? newCustomers : []} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
