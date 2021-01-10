import React, { Component } from 'react'

class SearchBar extends Component {
	state = { term: '' }

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form'>
					<div className='field'>
						<label htmlFor='imageSearch'>Image Search</label>
						<div className='ui icon input'>
							<input
								type='text'
								placeholder='Search Images...'
								value={this.state.term}
								onChange={(e) => this.setState({ term: e.target.value })}
							/>
							<i className='search icon'></i>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
