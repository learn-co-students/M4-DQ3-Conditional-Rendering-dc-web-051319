import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleClick = (event) => {
    props.changeSelected(event.target.id)
  }

  const pages = [
    {name: "profile", icon: "user large icon"}, 
    {name: "photo", icon: "photo large icon"}, 
    {name: "cocktail", icon: "cocktail large icon"}, 
    {name: "pokemon", icon: "themeisle large icon"}
  ]

  return (
    <div className="ui four item menu">

      {
        pages.map(page => {
          return (
            <a className={"item " + (props.selected === page.name ? "active" : null)} 
              id={page.name}
              onClick={handleClick}>
              <i className={page.icon} id={page.name}/>
            </a>
          )
        })
      }
    </div>
  )

}

export default MenuBar
