import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedCountry: countryAndCapitalsList[0].id}

  changeSelectedCountry = event => {
    this.setState({selectedCountry: event.target.value})
  }

  render() {
    const {selectedCountry} = this.state

    const SelectedItem = countryAndCapitalsList.filter(
      eachItem => eachItem.id === selectedCountry,
    )

    const {country} = SelectedItem[0]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select-list"
              name="country"
              onChange={this.changeSelectedCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="selected-item"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is Capital of Which Country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
