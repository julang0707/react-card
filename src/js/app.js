import React from 'react/addons';
import $ from 'jquery';

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
      value: '',
      type: 'default'
    }
  }

  onChangeCC() {
    let type = null;
    let value = this.refs.card.getValue().cc;

    // check for MasterCard
    if (value.match(/^5[1-5]/)){
      type = 'mastercard';
    }

    // check for Visa
    if (value.match(/^4/)) {
      type = 'visa';
    }

    // check for AmEx
    if (value.match(/^3[47]/)) {
      type = 'amex';
    }

    // check for Discover
    if (value.match(/^60/)) {
      type = 'discover';
    }

    // check for Maestro
    if (value.match(/^5018/)) {
      type = 'maestro';
    }

    // check for JCB
    if (value.match(/^35/)) {
      type = 'jcb';
    }

    // check for Union Pay
    if (value.match(/^62/))
    {
      type = 'union';
    }

    // check for Diners Club
    if (value.match(/^38/))
    {
      type = 'diners';
    }

    if (type) {
      this.setState({
        type: type,
        ccValue: value
      });
    }
  }

  onChangeExp() {
    this.setState({
      expValue: this.refs.card.getValue.exp
    });
  }

  onChangeName() {
    this.setState({
      name: this.refs.card.getValue().name
    });
  }

  render() {
    let card;
    let props = {
      ref: 'card',
      onChangeCC: this.onChangeCC.bind(this),
      onChangeExp: this.onChangeExp.bind(this),
      onChangeName: this.onChangeName.bind(this),
      ccValue: this.state.ccValue,
      expValue: this.state.expValue,
      nameValue: this.state.nameValue,
    };

    if (this.state.type === 'default') {
      card = <DefaultCard {...props} />
    } else if (this.state.type === 'visa') {
      card = <Visa {...props} />
    } else if (this.state.type === 'mastercard') {
      card = <MasterCard {...props} />
    } else if (this.state.type === 'discover') {
      card = <Discover {...props} />
    } else if (this.state.type === 'amex') {
      card = <AmEx {...props} />
    } else if (this.state.type === 'maestro') {
      card = <Maestro {...props} />
    } else if (this.state.type === 'jcb') {
      card = <JCB {...props} />
    } else if (this.state.type === 'diners') {
      card = <DinersClub {...props} />
    } else if (this.state.type === 'union') {
      card = <UnionPay {...props} />
    }


    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        {card}
      </div>
    )
  }
}


class DefaultCard extends React.Component {
  componentDidMount() {
    let ccInput = React.findDOMNode(this.refs.cc);
    ccInput.focus();
  }

  getValue() {
    let ccInput = React.findDOMNode(this.refs.cc);
    let expInput = React.findDOMNode(this.refs.exp);
    let nameInput = React.findDOMNode(this.refs.name);
    let exp = 0;
    let name = '';
    if (expInput) {
      exp = expInput.value;
    }

    if (nameInput) {
      name = nameInput.value;
    }

    return {
      cc: ccInput.value,
      name: name,
      exp: exp
    };
  }

  render() {

    return (
      <input
        ref="cc"
        placeholder='XXXXXXXXXXXX'
        value={this.props.ccValue}
        onChange={this.props.onChangeCC}
        />
    )
  }
}

class Visa extends DefaultCard {
  render() {

    return (
      <div className="visa">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>

        <img src="img/visa.png"/>
      </div>
    )
  };
};

class MasterCard extends React.Component {
  render() {
    return (
      <div className="mastercard">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/mastercard.png"/>
      </div>

    )
  };
};

class AmEx extends React.Component {
  render() {
    return (
      <div className="amex">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/amex.png"/>
      </div>

    )
  };
};

class Maestro extends React.Component {
  render() {
    return (
      <div className="maestro">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/maestro.png"/>
      </div>

    )
  };
};

class JCB extends React.Component {
  render() {
    return (
      <div className="jcb">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/jcb.png"/>
      </div>

    )
  };
};

class Discover extends React.Component {
  render() {
    return (
      <div className="discover">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/discover.png"/>
      </div>

    )
  };
};

class UnionPay extends React.Component {
  render() {
    return (
      <div className="unionpay">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/unionpay.jpeg"/>
      </div>

    )
  };
};

class DinersClub extends React.Component {
  render() {
    return (
      <div className="diners">
        <input
          ref="cc"
          value={this.props.ccValue}
          placeholder="XXXXXXXXXXXX"
          onChange={this.props.onChangeCC}/>
        <input
          ref="exp"
          onChange={this.props.onChangeExp}
          value={this.props.expValue}/>

        <input
          ref="name"
          onChange={this.props.onChangeName}
          value={this.props.nameValue}/>
        <img src="img/diners.png"/>
      </div>

    )
  };
};

React.render(<App/>, document.getElementById('app'));
