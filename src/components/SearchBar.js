import React, { Component } from 'react'

class SearchBar extends Component {
	render() {
		return (
			<div className='ui segment'>
				<form className='ui form'>
					<div className='field'>
						<label htmlFor='imageSearch'>Image Search</label>
						<input
							type='text'
							name='imageSearch'
							id='imageSearch'
							placeholder='hey search here'
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
