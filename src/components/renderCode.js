import CSSStyles from '../CSSStyles';
import RGBAToHexA from './RGBAToHexA';
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components';

const HighlightCode = styled(SyntaxHighlighter)`
  overflow: unset;
  padding-bottom: 0px;
`;

function renderCode(state, selectedItems, props){
  return (
    <pre className='language-css' id='code-css-preview'
    ref={(code) => props.node = code}
    >
      { selectedItems.includes(CSSStyles.COLOR) ? 
      `${CSSStyles.COLOR}: ${ RGBAToHexA(state.color.r, state.color.g, state.color.b, state.color.a) };\n` : '' }

      { selectedItems.includes(CSSStyles.LINE_HEIGHT) ? 
      `${CSSStyles.LINE_HEIGHT}: ${state.lineHeight};\n` : '' }

      { selectedItems.includes(CSSStyles.LETTER_SPACING) ? 
      `${CSSStyles.LETTER_SPACING}: ${state.letterSpacing}px;\n` : '' }

      { selectedItems.includes(CSSStyles.TEXT_ALIGN) ? 
      `${CSSStyles.TEXT_ALIGN}: ${state.textAlign};\n` : '' }

      { selectedItems.includes(CSSStyles.TEXT_TRANSFORM) ? 
      `${CSSStyles.TEXT_TRANSFORM}: ${state.textTransform};\n` : '' }

      { selectedItems.includes(CSSStyles.FONT_SIZE) ? 
      `${CSSStyles.FONT_SIZE}: ${state.fontSize.value + state.fontSize.unit};\n` : '' }

      { selectedItems.includes(CSSStyles.FONT_WEIGHT) ? 
      `${CSSStyles.FONT_WEIGHT}: ${state.fontWeight};\n` : '' }

      { selectedItems.includes(CSSStyles.WORD_SPACING) ? 
      `${CSSStyles.WORD_SPACING}: ${state.wordSpacing}px;\n` : '' }
    </pre>
  )
}

export default renderCode;