import React from "react";
import '../src/App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Ouarab Khadidja',
      bio: 'Biographie',
      imgSrc: './src/avatar.jpg',
      profession: 'Engineer',
      time: 0,
      show: false,
      montrerClass: 'cacher',
      buttonValue: 'Show Profile'
    };
    this.show = this.show.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }
  show() {
    if (this.state.buttonValue == 'Show Profile') {
      this.state.montrerClass = 'montrer'
      this.state.buttonValue = 'Hide Profile'
    } else {
      this.state.montrerClass = 'cacher'
      this.state.buttonValue = 'Show Profile'
    }
  }
  render() {
    return (
      <div>
        <div className="part1">
          <h1>The component has mounted</h1>
          <p> {this.state.time}</p>
          <button onClick={this.show}>{this.state.buttonValue}</button>
        </div>
        <div className={this.state.montrerClass}>
          <img src={this.state.imgSrc} />
          <div className="ShowRow">
          <h2>{this.state.fullName}</h2>
          <p>{this.state.bio}</p>
          <p>{this.state.profession}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;