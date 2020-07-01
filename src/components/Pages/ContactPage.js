import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

import Field from "../Field";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name *",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email *",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number *",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message *",
      },
    ],
  ],
};

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  name="sentMessage"
                  novalidate="novalidate"
                  onSubmit={this.props.handleSubmit}
                >
                  <div className="row">
                    {fields.sections.map((section, sectionIndex) => {
                      return (
                        <div class="col-md-6" key={sectionIndex.toString()}>
                          {section.map((field, i) => {
                            return (
                              <Field
                                {...field}
                                key={i}
                                value={this.props.values[field.name]}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}
                                touched={this.props.touched[field.name]}
                                error={this.props.errors[field.name]}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Your name must be longer than 3 symbols!")
      .required("We need your name."),
    email: Yup.string()
      .email("You need give us a valid email!")
      .required("We need your email."),
    phone: Yup.string()
      .min(10, "Your phone number mustn't be less than 10 digits!")
      .max(15, "Phone number is too long!")
      .required("We need your phone number."),
    message: Yup.string()
      .min(30, "Your message must be longer than 30 symbols!")
      .max(500, "Message must take less symbols than 500.")
      .required("Write a message for us."),
  }),
  handleSubmit: (values, { setSubmittins }) => {
    alert("You've submitted the form!");
  },
})(ContactPage);
