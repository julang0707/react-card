import React from 'react/addons';
import ReactForms from 'react-forms';
import $ from 'jquery';

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

    $("input").each(function() {
      var $this = $(this);
      $(this).data("maxlength", $this.prop("maxlength"));
      $(this).removeAttr("maxlength");
    }).bind("input", function() {
      var $this = $(this);
      setTimeout(function() { spill($this, $this.val()); },0);
    });

    function spill($this, val) {
      var maxlength = $this.data("maxlength");
      if ( val.length >= maxlength ) {
        $this.val(val.substring(0, maxlength));
        var next = $this.next("input").focus();
        spill(next, val.substring(maxlength));
      } else
        $this.val(val);
      }
    };

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
        <input id="cc1" defaultValue={this.props.value} size="4" maxLength="4"/>
        <input id="cc2" size="4" maxLength="4"/>
        <input id="cc3" size="4" maxLength="4"/>
        <input id="cc4" size="4" maxLength="4"/>
        <input id="month" size="2" maxLength="2"/>
        <input id="year" size="2" maxLength="2"/>
        <input id="visa-name"/>
        <img src="img/visa.png"/>
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
        <img src="img/mastercard.png"/>
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
        <img src="img/amex.png"/>
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
        <img src="img/maestro.png"/>
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
        <img src="img/jcb.png"/>
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
        <img src="img/discover.png"/>
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
        <img src="img/unionpay.jpeg"/>
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
        <img src="img/diners.png"/>
      </div>

    )
  };
};

React.render(<App/>, document.getElementById('app'));
