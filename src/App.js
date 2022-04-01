import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import hljs from 'highlight.js';
import { Button, Card, Checkbox, Col, Row, Space, message, Dropdown } from 'antd';
// import css from 'highlight.js/lib/languages/css'
// import 'highlight.js/styles/base16/humanoid-dark.css'
import CSSStyles from './CSSStyles';
import renderCode from './components/renderCode';
import Color from './components/Color';
import LineHeight from './components/LineHeight';
import LetterSpacing from './components/LetterSpacing';
import TextAlign from './components/TextAlign';
import FontWeight from './components/FontWeight';
import FontSize from './components/FontSize';
import TextTransform from './components/TextTransform';
import WordSpacing from './components/WordSpacing';
import RGBAToHexA from './components/RGBAToHexA';
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { TouchableOpacity } from 'react-native-web';

// hljs.registerLanguage('css', css)

const initialState = {
  selectedItems: [],
    color : {
      hex: '#333',
      r: 51,
      g: 51,
      b: 51,
      a: 1,
    },
    lineHeight: '1.5',
    letterSpacing: '0',
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: {
      value: 14,
      unit: 'px'
    },
    textTransform: 'none',
    wordSpacing: '0',
    touchableOpacity: false,
};

class App extends React.Component {
  state = { ...initialState };
  handleReset = this.reset.bind(this);

  reset() {
    this.setState(initialState);
  };

  handleSelectItem = (value) => {
    this.setState({ selectedItems: value });
  };

  handleChangeColor = (color) => {
    this.setState({ color: color.rgb });
  };

  handleChangeLineHeight = (value) => {
    this.setState({ lineHeight: value });
  };

  handleChangeLetterSpacing = (value) => {
    this.setState({ letterSpacing: value });
  };

  handleChangeTextAlign = (value) => {
    this.setState({ textAlign: value });
  };

  handleChangeFontSize = (mode, value) => {
    if(mode === 'value'){
      this.setState({ fontSize: { ...this.state.fontSize, value: value } });
    }else{
      this.setState({ fontSize: { ...this.state.fontSize, unit: value } });
    }
  };

  handleChangeFontWeight = (value) => {
    this.setState({ fontWeight: value });
  };

  handleChangeTextTransform = (value) => {
    this.setState({ textTransform: value });
  };

  handleChangeWordSpacing = (value) => {
    this.setState({ wordSpacing: value });
  };

  handleChangeTouchableOpacity = (value) => {
    this.setState({ TouchableOpacity: value });
  };

  renderCodez(selectedItems){
    var styleCode = '';
    if(document.querySelector('.text-preview')){
      var element = document.querySelector('.text-preview').style.cssText;
      styleCode = element.replace(/; /g, ";\n") 
    }
    return(
      <code>
        { styleCode }
      </code>
      
    )
  }
  // componentDidUpdate(){
  //   hljs.highlightBlock(this.node)
  // }
  componentDidMount(){
    // hljs.highlightBlock(this.node)
  }

  copyToClipboard() {
    var from = document.getElementById('code-preview');
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    message.success('Code copied to clipboard!')
  }
  
  render(){
    var selectedItems = this.state.selectedItems;
    return (
      <div className="App">
        <header className="App-header">
          <Row gutter={[32, 32]} style={{maxWidth: 1350}}>
            <Col span={ 12 }>
              <Row gutter={[32, 32]}>
                <Col span={ 24 }>
                  Preview
                  <Card style={{}}>
                    {
                      selectedItems.includes(CSSStyles.TOUCHABLE_OPACITY) ?
                      <TouchableOpacity id='text-preview' className='text-preview' style={ { 
                          color: `${ RGBAToHexA(this.state.color.r, this.state.color.g, this.state.color.b, this.state.color.a) }`,
                          lineHeight: this.state.lineHeight,
                          letterSpacing: this.state.letterSpacing,         
                          textAlign: this.state.textAlign,         
                          fontSize: this.state.fontSize.value + this.state.fontSize.unit,         
                          fontWeight: this.state.fontWeight,         
                          textTransform: this.state.textTransform,         
                          wordSpacing: this.state.wordSpacing,         
                        } }>
                        Ullamco aute dolore duis sint cillum ad sunt sunt culpa cupidatat sit minim. 
                        Lorem cupidatat proident duis ad dolor ex. 
                        Ad occaecat cupidatat do irure Lorem reprehenderit reprehenderit est sint cupidatat. 
                        Sint voluptate ad tempor pariatur commodo eu laboris consectetur aliquip esse adipisicing. 
                        Cupidatat duis do nostrud proident eiusmod proident dolor dolor laboreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                      </TouchableOpacity>
                    :
                    <div id='text-preview' className='text-preview' style={ { 
                        color: `${ RGBAToHexA(this.state.color.r, this.state.color.g, this.state.color.b, this.state.color.a) }`,
                        lineHeight: this.state.lineHeight,
                        letterSpacing: this.state.letterSpacing,         
                        textAlign: this.state.textAlign,         
                        fontSize: this.state.fontSize.value + this.state.fontSize.unit,         
                        fontWeight: this.state.fontWeight,         
                        textTransform: this.state.textTransform,         
                        wordSpacing: this.state.wordSpacing,         
                      } }>
                      Ullamco aute dolore duis sint cillum ad sunt sunt culpa cupidatat sit minim. 
                      Lorem cupidatat proident duis ad dolor ex. 
                      Ad occaecat cupidatat do irure Lorem reprehenderit reprehenderit est sint cupidatat. 
                      Sint voluptate ad tempor pariatur commodo eu laboris consectetur aliquip esse adipisicing. 
                      Cupidatat duis do nostrud proident eiusmod proident dolor dolor laboreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.
                    </div>
                    }
                    
                  </Card>
                </Col>

                <Col span={ 24 }>
                  <Row style={{justifyContent: 'space-between', marginBottom: 5}}>
                    <Col>Code</Col>
                    <Col>
                      <Button 
                        type='primary' 
                        onClick={ this.copyToClipboard }
                        disabled={ selectedItems.length < 1 }
                      >
                        Copy to clipboard
                      </Button>
                    </Col>
                  </Row>
                  <Card style={{ backgroundColor: '#1b1b1b' }}>
                    {renderCode(this.state, selectedItems, this)}
                  </Card> 
                </Col>
              </Row>
            </Col>
            <Col span={ 12 }>
              <Row style={{justifyContent: 'space-between', marginBottom: 5}}>
                <Col>Options</Col>
                <Col>
                  <Button type='primary' onClick={ this.handleReset }>Reset</Button>
                </Col>
              </Row>
              <Card>
                <Checkbox.Group value={ selectedItems } onChange={ (value) => this.handleSelectItem(value) } style={{display: 'grid'}}>
                  <Checkbox value={ CSSStyles.TOUCHABLE_OPACITY }>Touchable Opacity</Checkbox>
                  {
                    selectedItems.includes(CSSStyles.TOUCHABLE_OPACITY) &&
                    <Checkbox value={ CSSStyles.BACKGROUND_COLOR } style={{paddingLeft: 20}}>Background Color</Checkbox>
                  }
                  <Checkbox value={ CSSStyles.COLOR }>Color</Checkbox>
                  <Dropdown 
                    placement='bottomRight'
                    overlay={<Color
                      color={ this.state.color }
                      onChange={ this.handleChangeColor }
                    />}>
                    
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Hover me 
                    </a>
                  </Dropdown>
                  { selectedItems.includes(CSSStyles.COLOR) && 
                    <Color
                      color={ this.state.color }
                      onChange={ this.handleChangeColor }
                    />
                  }

                  <Checkbox value={ CSSStyles.LINE_HEIGHT }>Line Height</Checkbox>
                  { selectedItems.includes(CSSStyles.LINE_HEIGHT) && 
                    <LineHeight
                      lineHeight={ this.state.lineHeight }
                      onChange={ this.handleChangeLineHeight }
                    />
                  }
                  
                  <Checkbox value={ CSSStyles.LETTER_SPACING }>Letter Spacing</Checkbox>
                  { selectedItems.includes(CSSStyles.LETTER_SPACING) && 
                    <LetterSpacing
                      letterSpacing={ this.state.letterSpacing }
                      onChange={ this.handleChangeLetterSpacing }
                    />
                  }
                  
                  <Checkbox value={ CSSStyles.TEXT_ALIGN }>Text Align</Checkbox>
                  { selectedItems.includes(CSSStyles.TEXT_ALIGN) && 
                    <TextAlign
                      textAlign={ this.state.textAlign }
                      onChange={ this.handleChangeTextAlign }
                    />
                  }

                  <Checkbox value={ CSSStyles.TEXT_TRANSFORM }>Text Transform</Checkbox>
                  { selectedItems.includes(CSSStyles.TEXT_TRANSFORM) && 
                    <TextTransform
                      textTransform={ this.state.textTransform }
                      onChange={ this.handleChangeTextTransform }
                    />
                  }

                  <Checkbox value={ CSSStyles.FONT_SIZE }>Font Size</Checkbox>
                  { selectedItems.includes(CSSStyles.FONT_SIZE) && 
                    <FontSize
                      fontSize={ this.state.fontSize }
                      onChange={ this.handleChangeFontSize }
                    />
                  }

                  <Checkbox value={ CSSStyles.FONT_WEIGHT }>Font Weight</Checkbox>
                  { selectedItems.includes(CSSStyles.FONT_WEIGHT) && 
                    <FontWeight
                      fontWeight={ this.state.fontWeight }
                      onChange={ this.handleChangeFontWeight }
                    />
                  }

                  <Checkbox value={ CSSStyles.WORD_SPACING }>Word Spacing</Checkbox>
                  { selectedItems.includes(CSSStyles.WORD_SPACING) && 
                    <WordSpacing
                      wordSpacing={ this.state.wordSpacing }
                      onChange={ this.handleChangeWordSpacing }
                    />
                  }
                  
                </Checkbox.Group>
              </Card>
            </Col>
          </Row>
         
        </header>
      </div>
    );
  }
  
}

export default App;
