import React, { Component } from 'react'
import withSizes from '../utils/Sizes'
import mergeStyles from '../utils/StyleMerge'

function getLineBreaks(node) {
  // we only deal with TextNodes
  if(!node || !node.parentNode || node.nodeType !== 3)
    return [];
  // our Range object form which we'll get the characters positions
  const range = document.createRange();
  // here we'll store all our lines
  const lines = [];
  // begin at the first char
  range.setStart(node, 0);
  // initial position
  let prevBottom = range.getBoundingClientRect().bottom;
  let str = node.textContent;
  let current = 1; // we already got index 0
  let lastFound = 0;
  let bottom = 0;
  // iterate over all characters
  while(current <= str.length) {
    // move our cursor
    range.setStart(node, current);
    if(current < str.length -1)
      range.setEnd(node, current+1);
    bottom = range.getBoundingClientRect().bottom;
    if(bottom > prevBottom) { // line break
      lines.push(
        str.substr(lastFound , current - lastFound) // text content
      );
      prevBottom = bottom;
      lastFound = current;
    }
    current++;
  }
  // push the last line
  lines.push(str.substr(lastFound));

  return lines;
}

class SplitWrappedLines extends Component {
  state = {
    lines: []
  }

  splitWrappedLinesRef = React.createRef()

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.onResize)
  }

  onResize = () => {
    setTimeout(() => {
      const lines = getLineBreaks(this.splitWrappedLinesRef.current.childNodes[0])

      this.setState({
        lines
      })

      console.log(lines)
    }, 10)
  }

  render() {
    const { getStyle, styles, text } = this.props
    const { lines } = this.state

    return (
      <div style={{position: 'relative'}}>
        <div ref={this.splitWrappedLinesRef} className={'split-wrapped-lines'}
              style={{...getStyle(styles.line), position: 'absolute', whiteSpace: 'wrap', opacity: 0}}>{text}</div>
        {lines.map((line, subIndex) =>
          <div key={subIndex} style={getStyle(styles.line)}>{line}</div>
        )}
      </div>
    )
  }
}

SplitWrappedLines.defaultProps = {
  text: '',
}

const defaultStyles = {
  line: {

  },
}

export default mergeStyles(defaultStyles)(withSizes(SplitWrappedLines))
