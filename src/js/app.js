import React from 'react/addons';
import ReactForms from 'react-forms';

let Form = ReactForms.Form
let FormFor = ReactForms.FormFor
let Schema = ReactForms.schema.Schema
let List = ReactForms.schema.List
let Property = ReactForms.schema.Property

class App extends React.Component {
  render() {
    return (
        <Card name="Your Card"/>
    )
  }
};

class Card extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    };

  }

  handleChange() {
    let card = React.findDOMNode(this.refs.card);
    this.setState({value: card.value});
  };

  render() {
    let value = this.state.value;

    let card = <DefaultCard
      ref="card"
      type="text"
      id="cc-num"
      placeholder='XXXXXXXXXXXX'
      value={value}
      handleChange={this.handleChange.bind(this)}
    />

    // check for MasterCard
    if (/^5[1-5]/.test(value))
    {
      card = <MasterCard ref="card" value={value} />
    }

    // check for Visa
    else if (/^4/.test(value))
    {
      card = <Visa ref="card" value={value} />
    }

    // check for AmEx
    else if (/^3[47]/.test(value))
    {
      card = <AmEx ref="card" value={value} />
    }

    // check for Discover
    else if (/^60/.test(value))
    {
      card = <Discover ref="card" value={value} />
    }

    // check for Maestro
    else if (/^5018/.test(value))
    {
      card = <Maestro ref="card" value={value} />
    }

    // check for JCB
    else if (/^35/.test(value))
    {
      card = <JCB ref="card" value={value} />
    }

    // check for Union Pay
    else if (/^62/.test(value))
    {
      card = <UnionPay ref="card" value={value} />
    }

    // check for Diners Club
    else if (/^38/.test(value))
    {
      card = <DinersClub ref="card" value={value} />
    }

    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        {card}
      </div>
    )
  };

};

class DefaultCard extends React.Component {
  render() {
    return (
      <input
        type="text"
        id="cc-num"
        placeholder='XXXXXXXXXXXX'
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    )
  }
}

class Visa extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class MasterCard extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class AmEx extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class Maestro extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class JCB extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class Discover extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class UnionPay extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

class DinersClub extends React.Component {
  render() {
    return (
      <div className="visa">
        <input id="cc1" defaultValue={this.props.value}/>
        <input id="cc2"/>
        <input id="cc3"/>
        <input id="cc4"/>
        <input id="month"/>
        <input id="year"/>
        <input id="visa-name"/>
        <img src="#"/>
      </div>

    )
  };
};

React.render(<App/>, document.getElementById('app'));
