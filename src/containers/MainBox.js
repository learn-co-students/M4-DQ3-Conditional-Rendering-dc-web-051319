import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selectedMenuItem: ""
  }

  handleClick = (event) => {
    let item = event.target.id

    switch (item) {
      case "profile":
        this.setState({selectedMenuItem: item})
        break;
      case "photo":
        this.setState({selectedMenuItem: item})
        break;
      case "cocktail":
        this.setState({selectedMenuItem: item})
        break;
      case "pokemon":
        this.setState({selectedMenuItem: item})
        break;
    }
  }

  displayItem = () => {
    switch (this.state.selectedMenuItem) {
      case "profile":
        return Profile()
      case "photo":
        return Photos()
      case "cocktail":
        return Cocktails()
      case "pokemon":
        return < Pokemon />
    }
  }

  render() {

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        { this.displayItem() }
      </div>
    )
  }

}

export default MainBox
