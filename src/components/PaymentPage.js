import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Register extends Component {
  render() {
    return (
      <div className="boxed">
      <form>
      <h1 style={{color: "orange"}}>$$$ Check Out $$$</h1>
      <p style={{color: "black"}}>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
      <section>
        <h2 style={{color: "orange"}}>Contact information</h2>
        <fieldset>
          <legend style={{color: "black"}}>Title</legend>
          <ul class="radio-button">
            <label style={{color: "black"}} for="title_1">
              <input type="radio" id="title_1" name="title" value="M." />
              Mister &ensp;
            </label>

            <label style={{color: "black"}} for="title_2">
              <input type="radio" id="title_2" name="title" value="Ms." />
              Miss
            </label>
          </ul>
        </fieldset>
        <p style={{color: "black"}}>
          <label for="name">
            <span>Name: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="name" name="username" size="40" required />
        </p>
        <p style={{color: "black"}}>
          <label for="mail">
            <span>E-mail: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="email" id="mail" name="usermail" size="39" required />
        </p>
        <p style={{color: "black"}}>
          <label for="pwd">
            <span>Password: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="password" id="pwd" name="password" size="37" required />
        </p>
        <p style={{color: "black"}}>
          <label for="pwd">
            <span>Address: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="pwd" name="address" size="38" required />
        </p>
        <p style={{color: "black"}}>
          <label for="pwd">
            <span>City: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="pwd" name="city" size="41" required />
        </p>
        <p style={{color: "black"}}>
          <label for="pwd">
            <span>Zip Code: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="number" id="pwd" name="zipcode" size="500" required />
        </p>
        <p style={{color: "black"}}>
          <label for="pwd">
            <span>Phome Number #: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="text" id="pwd" name="phone" size="33" required />
        </p>
      </section>
      <section>
        <h2 style={{color: "orange"}}>Payment information</h2>
        <p style={{color: "black"}}>
          <label for="quantity">
            <span>Quantity: </span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="number" id="amount" name="quantity" size="40" required />
        </p>
        <p style={{color: "black"}}>
          <label for="card">
            <span>Card type:</span>
          </label>
          <select id="card" name="usercard">
            <option value="visa">Visa</option>
            <option value="mc">Mastercard</option>
            <option value="amex">American Express</option>
          </select>
        </p>
        <p style={{color: "black"}}>
          <label for="number">
            <span>Card number:</span>
            <strong><abbr title="required">*</abbr></strong>
          </label>
          <input type="number" id="number" name="cardnumber" size="35" required />
        </p>
        <p style={{color: "black"}}>
          <label for="date">
            <span>Expiration date:</span>
            <strong><abbr title="required">*</abbr></strong>
            <em>formatted as mm/yy</em>
          </label>
          <input type="date" id="date" name="expiration" size="35" required />
        </p>
      </section>
      <Link to="/shopping"> <Button onClick={e => window.confirm("Are you sure to buy this item?") && alert("Thank you for shopping with us. Have a good day!!!")} > Buy Now  </Button> </Link>
      <br />
    </form>
    <br />
    </div>
    );
  }
}
