// Write your code here.

import {Component} from 'react'

import './index.css'

class FagItem extends Component {
  state = {active: false}

  renderAnswer = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails

    const {active} = this.state

    if (active) {
      return (
        <div>
          <hr className="horizantal-line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleButton = () => {
    const {active} = this.state
    this.setState(prevState => ({
      active: !prevState.active,
    }))
    console.log(active)
  }

  renderImage = () => {
    const {active} = this.state

    const image =
      active === false
        ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const altText = active ? 'minus' : 'pluse'

    return (
      <button type="button" className="button" onClick={this.onToggleButton}>
        <img alt={altText} src={image} />
      </button>
    )
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="listed-items">
        <div className="question-container">
          <h1>{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FagItem
