import React from "react";

class Field extends React.Component {
  render() {
    return (
      <div className="form-group">
        {this.props.elementName === "input" ? (
          <input
            className="form-control"
            type={this.props.type}
            placeholder={this.props.placeholder}
            required="required"
            data-validation-required-message="Please enter your name."
            value={this.props.value}
            onChange={this.props.onChange}
            name={this.props.name}
            onBlur={this.props.onBlur}
          />
        ) : (
          <textarea
            className="form-control"
            placeholder={this.props.placeholder}
            required="required"
            data-validation-required-message="Please enter a message."
            value={this.props.value}
            name={this.props.name}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        )}
        <p class="help-block text-danger">
          {this.props.touched && this.props.error && (
            <span>{this.props.error}</span>
          )}
        </p>
      </div>
    );
  }
}

export default Field;
