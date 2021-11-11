import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
    // this.props.dispatch(courseActions.createCourse(this.state.course)); // since we don't pass mapDispatchToProps to connect, dispatch is attached to props automatically

    this.props.actions.createCourse(this.state.course); // this is now passed to props via mapDispatchToProps func
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

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired, // we specified that we are expecting this dispatch property to be attached
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses, // we need to be here as specific as possible to bind only data that component needs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)), // manually
    actions: bindActionCreators(courseActions, dispatch), // bind all actions to props  automatically, this is better as we won't need to change it when adding new action
  };
}

// this also can be done as object, which looks simple but will need some maintenance when adding new actions
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
