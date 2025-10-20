import "./index.css" 

const GalleryItem = (props) => {
  const { imageDetails, displayImage, isActive } = props
  const { thumbnailUrl, thumbnailAltText, id } = imageDetails

  const onClickImage = () => {
    displayImage(id)
  }

  // Add a dynamic class for active state
  const activeClassName = isActive ? "active-thumbnail" : ""

  return (
    <li className={`list-item-container ${activeClassName}`}>
      <button className="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="gallery-image"
        />
      </button>
    </li>
  )
}

export default GalleryItem
