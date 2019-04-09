import React, { Component } from "react";
import "./style.css";
import NavBar from "../NavBar";
import findUserEmail from "../../UtilityFunctions/findUserEmail"
import findUsernameCookie from "../../UtilityFunctions/findUsernameCookie"
import API from "../../UtilityFunctions/API"


class Home extends Component {

  state = {
    meal: "",
  };

  componentDidMount = () => {

    API.createAccount(findUsernameCookie(), findUserEmail())
      .then(res => console.log(res))
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.submitMeal({meal: this.state.meal}).then(res => {
      console.log(res.data)
      let nutArray = Object.values(res.data)
      console.log(nutArray)
      nutArray.forEach(element =>{
        API.addNutrients({nutrient: element,email : findUserEmail()});
      })
    
    })
    
  }

  render() {

    return (
      <div>
        <NavBar />
        <div className="what">
          What meals have you eaten today?
        </div>
        <form className="form">
          <input
            value={this.state.meal}
            name="meal"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Most Recent Meal"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <div className="container">
          <section className="col-md-12 content" id="home">
            <div className="col-lg-6 col-md-6 content-item tm-black-translucent-bg tm-logo-box">
              <h1 className="text-uppercase">Your Log</h1>
              <div className="div-table">
                <div className="div-table-row">
                  <div className="div-table-col">Foods Ate Today </div>
                </div>
                <div className="div-table-row">
                  <div className="div-table-col">Pizza Slice</div>
                </div>
                <div className="div-table-row">
                  <div className="div-table-col">Hamburger</div>
                </div>
                <div className="div-table-row">
                  <div className="div-table-col">Petri Dish</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 content-item content-item-1 background tm-white-translucent-bg">
              <h2 className="main-title text-center dark-blue-text">The best way to lose weight is to track what you eat!</h2>
              <p>Sed tempus, quam vitae lobortis vulputate, sapien nisi ultricies metus, in eleifend ipsum mauris eget magna. Nullam massa nisi, pellentesque eu pretium quis, pulvinar a nulla. Sed tempus finibus lacus, vestibulum condimentum nibh blandit vel.</p>
            </div>
          </section>
          <section className="col-md-12 content padding tm-equal-col-container" id="services">
            <div className="col-lg-6 col-md-6 col-sm-12 content-item tm-black-translucent-bg tm-services-section-padding">
              <button type="button" name="mealtime" className="btn btn-big pull-right tm-btn-primary">Log New Meal</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 tm-white-translucent-bg tm-services-section-padding tm-box-center">
            </div></section>
        </div>
        <div className="text-center footer">
          <div className="container">
            Copyright © <span className="tm-current-year">2019</span> Case Pollock
                    </div>
        </div>
      </div>
    );
  }
}


export default Home;