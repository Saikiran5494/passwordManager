import './index.css'

const WebsiteItem = props => {
  const {websiteList, deleteIconClicked, isActive} = props
  const {name, password, website, id} = websiteList
  const firstLetter = website ? website[0].toUpperCase() : ''

  const deleteClicked = () => {
    deleteIconClicked(id)
  }

  return (
    <li className="list-container">
      <div className="profile-container">
        <div className="initial-letter">
          <p className="initial">{firstLetter}</p>
        </div>
        <div className="details-container">
          <p className="paragraph">{website}</p>
          <p className="paragraph">{name}</p>
          {isActive ? (
            <p className="paragraph">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={deleteClicked}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default WebsiteItem
