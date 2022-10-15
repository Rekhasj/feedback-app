import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackClicked: false}

  onClickFeedback = () => {
    this.setState(prevState => ({
      isFeedbackClicked: !prevState.isFeedbackClicked,
    }))
  }

  feedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    // console.log(emojis)
    //  const {id, name, imageUrl} = emojis
    // console.log(emojis[0].id)

    return (
      <div className="card-container">
        <h1 className="feedback">
          How satisfied are you with our customer support performance?
        </h1>

        <div className="list-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emoji-list-container">
              <button
                type="button"
                className="emoji-button"
                onClick={this.onClickFeedback}
              >
                <img
                  className="emoji-image"
                  alt={eachEmoji.name}
                  src={eachEmoji.imageUrl}
                />
              </button>
              <p className="emoji-name">{eachEmoji.name}</p>
            </li>
          ))}
        </div>
      </div>
    )
  }

  thankyouFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <div className="card-container">
          <img src={loveEmojiUrl} alt="love emoji" className="thankyou-emoji" />
          <h1 className="thank-you">Thank You!</h1>
          <p className="details">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackClicked} = this.state

    return (
      <div className="home-container">
        <ul className="emoji-container">
          {isFeedbackClicked
            ? this.thankyouFeedback()
            : this.feedbackQuestion()}
        </ul>
      </div>
    )
  }
}

export default Feedback
