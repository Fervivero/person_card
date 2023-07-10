import { Component } from "react";

class Person extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props
    return (
      <div className="person">
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <hr></hr>
      </div>
    );
  }
}

export default Person;
