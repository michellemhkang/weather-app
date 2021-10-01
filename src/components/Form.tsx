import React, { Component } from 'react';
import icon from './weathericon.jpeg';

class Form extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
      iconMoved: false,
      dataExists: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    this.setState({ iconMoved: true });
  }

  handleChange(e: any) {
    this.setState({ input: e.target.value });
  }

  handleKeyDown(e: any) {
    if (e.key === 'Enter') {
      const { setZip } = this.props;
      const { input } = this.state;
      setZip(input);
      this.setState({ dataExists: true });
    }
  }

  render() {

    const { iconMoved, dataExists } = this.state;

    // Opening page of app 
    if (!iconMoved && !dataExists) {
      return (
        <img className="icon" onClick={() => this.handleClick()} src={icon} alt={'Sun and Cloud Icon'} />
      )
    // User entered app 
    } else if (iconMoved && !dataExists) {
      return (
        <div>
          <div>
            <p>Enter your zip code below to see your weather.</p>
            <input
              placeholder="ZIP Code"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </div>
          <img className="movedIcon" src={icon} alt={'Sun and Cloud Icon'} />
        </div>
      )
    // User entered zip code input
    } else if (iconMoved && dataExists) {
      return (
        <div>
          <input
            placeholder="ZIP Code"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
      )
    }
  }
}

export default Form;

// export default function Header() {
//   return (

//   );
// }
