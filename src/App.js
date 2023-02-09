import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {TextInput, Button} from './components/StyledComponents/styledComponents'
import './App.css'

class App extends Component {
  state = {
    inputText: '',
    fontWeight: false,
    fontStyle: false,
    textDecoration: false,
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeFontWeight = () => {
    const {fontWeight} = this.state
    if (fontWeight) {
      this.setState({fontWeight: false})
    } else {
      this.setState({fontWeight: true})
    }
  }

  onChangeFontStyle = () => {
    const {fontStyle} = this.state
    if (fontStyle) {
      this.setState({fontStyle: false})
    } else {
      this.setState({fontStyle: true})
    }
  }

  onChangeTextDecoration = () => {
    const {textDecoration} = this.state
    if (textDecoration) {
      this.setState({textDecoration: false})
    } else {
      this.setState({textDecoration: true})
    }
  }

  render() {
    const {inputText, fontWeight, fontStyle, textDecoration} = this.state

    return (
      <div className="bg-container">
        <div className="body-container">
          <div className="left-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="right-container">
            <ul className="list">
              <li className="item">
                <Button
                  color={fontWeight}
                  type="button"
                  onClick={this.onChangeFontWeight}
                  data-testid="bold"
                >
                  <VscBold className="icon" />
                </Button>
              </li>
              <li className="item">
                <Button
                  color={fontStyle}
                  type="button"
                  onClick={this.onChangeFontStyle}
                  data-testid="italic"
                >
                  <GoItalic className="icon" />
                </Button>
              </li>
              <li className="item">
                <Button
                  color={textDecoration}
                  type="button"
                  onClick={this.onChangeTextDecoration}
                  data-testid="underline"
                >
                  <AiOutlineUnderline className="icon" />
                </Button>
              </li>
            </ul>
            <TextInput
              color="#f1f5f9"
              type="text"
              cols="10"
              rows="50"
              italic={fontStyle}
              underline={textDecoration}
              bold={fontWeight}
              onChange={this.onChangeInputText}
              value={inputText}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
