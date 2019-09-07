import React from 'react';
import axios from 'axios';

const webkitSpeechRecognition = window.webkitSpeechRecognition
const SpeechRecognition = webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.autoStart = false
recognition.interimResults = true
recognition.lang = 'en-US'

class DeckCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recognition: recognition,
      transcript: 'Start by saying something'
    };

    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)

    this.state.recognition.onresult = this.handleListen
    
    this.state.recognition.onend = function(event) {
      recognition.start();
    };
  }

  toggleListen() {
    recognition.start();
  }
  
  handleListen(event) {
    console.log(event.results[0][0].transcript);
    console.log(event.results[0][0]);
    if (event.results[0][0].confidence > 0.90) {
      console.log(event.results[0][0].transcript);
  
      axios.post('/api/record', {
        transcript: event.results[0][0].transcript
      });
    }
    else if (event.results[0][0].confidence > 0.80) {
      this.setState({
        transcript: event.results[0][0].transcript
      });
    }
  }

  componentDidMount() {
    this.toggleListen();
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <div id="google-slides">
          
        </div>
        <div id="live-speech">
          <p>{this.state.transcript}</p>
        </div>
      </div>
    );
  }
}

export default DeckCreator;
