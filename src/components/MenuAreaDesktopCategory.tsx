interface Icon {
  categoryIcon: string
}

function MenuAreaDesktopCategory({categoryIcon}:Icon) {
  return (
    <div>
      <div className="category-icon-container">
        <img src={categoryIcon} alt="" />
      </div>
    </div>
  )
}

export default MenuAreaDesktopCategory