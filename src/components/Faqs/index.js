import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <div className="questions">
          <ul className="unordered-list">
            {faqsList.map(eachItem => (
              <FaqItem faqsDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs
