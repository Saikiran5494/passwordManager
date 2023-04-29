import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import WebsiteItem from '../WebsiteItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    passwordInput: '',
    usernameInput: '',
    isActive: false,
    websiteList: [],
    searchInput: '',
  }

  searchClicked = event => {
    this.setState({searchInput: event.target.value})
  }

  checkboxClicked = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  deleteIconClicked = id => {
    const {websiteList} = this.state
    const updatedList = websiteList.filter(eachItem => eachItem.id !== id)
    this.setState({websiteList: updatedList})
  }

  websiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  passwordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  usernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  addButtonClicked = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newWebsite = {
      id: uuidv4(),
      website: websiteInput,
      name: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      websiteList: [...prevState.websiteList, newWebsite],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  renderImage = () => (
    <div className="noPassword-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-pass-image"
      />
      <p className="heading">No Passwords</p>
    </div>
  )

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      websiteList,
      isActive,
      searchInput,
    } = this.state
    const searchResults = websiteList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = searchResults.length
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-icon"
          />
          <div className="password-container">
            <h1 className="heading">Add New Password</h1>
            <form className="form" onSubmit={this.addButtonClicked}>
              <div className="inputs-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  onChange={this.websiteInput}
                  value={websiteInput}
                />
              </div>
              <div className="inputs-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input"
                  onChange={this.usernameInput}
                  value={usernameInput}
                />
              </div>
              <div className="inputs-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={this.passwordInput}
                  value={passwordInput}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="bottom-container">
          <div className="count-search-container">
            <div className="count-para">
              <h1 className="yours">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icon"
              />
              <input
                type="search"
                placeholder="Search"
                className="input"
                onChange={this.searchClicked}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox"
              onClick={this.checkboxClicked}
            />
            <label htmlFor="checkbox" className="label">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            this.renderImage()
          ) : (
            <ul className="unordered-list-container">
              {searchResults.map(eachItem => (
                <WebsiteItem
                  websiteList={eachItem}
                  key={eachItem.id}
                  isActive={isActive}
                  deleteIconClicked={this.deleteIconClicked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
