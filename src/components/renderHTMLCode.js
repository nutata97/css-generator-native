import CSSStyles from '../CSSStyles';
import RGBAToHexA from './RGBAToHexA';
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components';

const HighlightCode = styled(SyntaxHighlighter)`
  overflow: unset;
  padding-bottom: 0px;
`;

function renderHTMLCode(selectedItems){
  if(selectedItems.includes(CSSStyles.TOUCHABLE_OPACITY)){
    return (
      <HighlightCode>
        {
`<TouchableOpacity>
  <Text>
    Ullamco aute dolore duis sint cillum ad sunt sunt culpa cupidatat sit minim. 
  </Text>
</TouchableOpacity>`
        }
      </HighlightCode>
    )
  }
  return (
    <HighlightCode>
      {
`<Text>
  Ullamco aute dolore duis sint cillum ad sunt sunt culpa cupidatat sit minim. 
</Text>`
      }
    </HighlightCode>
  )
  
}

export default renderHTMLCode;