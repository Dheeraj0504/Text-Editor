import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorContainer,
  BannerLeftPart,
  TextEditorHeading,
  TextEditorImage,
  BannerRightPart,
  InputStylesContainer,
  ListItem,
  Button,
  Separator,
  TextEditorInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onChangeBoldStatus = () => {
    // console.log("Button Clicked")
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onChangeItalicStatus = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onChangeUnderlineStatus = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  // onChangeText = event => {
  //   // console.log(event.target.value)
  //   this.setState({textInputValue: event.target.value})
  // }

  render() {
    // const {isBoldActive, isItalicActive, isUnderlineActive, textInputValue} =
    // this.state
    const {isBold, isItalic, isUnderline} = this.state
    const boldIcon = isBold ? '#faff00' : '#f1f5f9'
    const italicIcon = isItalic ? '#faff00' : '#f1f5f9'
    const underlineIcon = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <TextEditorContainer>
          <BannerLeftPart>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </BannerLeftPart>
          <BannerRightPart>
            <InputStylesContainer>
              <ListItem>
                <Button
                  type="button"
                  data-testid="bold"
                  color={boldIcon}
                  onClick={this.onChangeBoldStatus}
                >
                  <VscBold size={30} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  data-testid="italic"
                  color={italicIcon}
                  onClick={this.onChangeItalicStatus}
                >
                  <GoItalic size={30} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  data-testid="underline"
                  color={underlineIcon}
                  onClick={this.onChangeUnderlineStatus}
                >
                  <AiOutlineUnderline size={30} />
                </Button>
              </ListItem>
            </InputStylesContainer>
            <Separator />
            <TextEditorInput
              type="text"
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </BannerRightPart>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
