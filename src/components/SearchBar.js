import React, { Component } from 'react'

class SearchBar extends Component {
	render() {
		return (
			<div className='ui segment'>
				<form className='ui form'>
					<div className='field'>
						<label htmlFor='imageSearch'>Image Search</label>
						<div className='ui icon input'>
							<input type='text' placeholder='Search Images...' />
							<i className='search icon'></i>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
