import React from "react";

class CoursesPage extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       course: {
  //         title: "",
  //       },
  //     };

  //     this.handleChange = this.handleChange.bind(this); // this allows to not produce new function per each render (in case we do this in the component markup)
  //   }

  //Using class fields instead of ctor
  state = {
    course: {
      title: "",
    },
  };

  //   handleChange(event) {
  //     const course = { ...this.state.course, title: event.target.value };
  //     this.setState({ course });
  //   }

  // This is called a "class field".
  // We use arrow function instead as they inherit the binding context of their enclosing scope
  // so this = this class instance automatically
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
