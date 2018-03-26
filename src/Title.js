import React from 'react'
import { connect } from 'react-redux'
import { updateTitleAction } from './utils/documentTitle'

const Title = props => {
	const { title, updateTitleAction } = props

	return (
		<div>
			<h1>{title}</h1>
			<input
				type="text"
				defaultValue={title}
				onChange={({ target }) => {
					updateTitleAction(target.value)
				}}
			/>
		</div>
	)
}

const mapStateToProps = state => ({
	title: state.title
})

export default connect(mapStateToProps, { updateTitleAction })(Title)
