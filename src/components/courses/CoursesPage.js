import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

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
    // alert(this.state.course.title);
    this.props.dispatch(courseActions.createCourse(this.state.course)); //since we don't pass mapDispatchToProps to connect, dispatch is attached to props automatically
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

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired, // we specified that we are expecting this dispatch property to be attached
};

function mapStateToProps(state) {
  return {
    courses: state.courses, // we need to be here as specific as possible to bind only data that component needs
  };
}

export default connect(mapStateToProps)(CoursesPage);
