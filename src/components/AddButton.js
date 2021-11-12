import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import { Button, Card } from "@mui/material";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import "../styles/AddButton.css";

class AddButton extends Component {
  state = { formOpen: false, text: "" };

  //Checks to see if the form is open or not
  openForm = () => {
    this.setState({ formOpen: true });
  };
  closeForm = () => {
    this.setState({ formOpen: false });
  };
  //Updates the text state from the textarea
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    console.log("Checking to see if it gets add card logic", text);
    if (text) {
      dispatch(addList(text));
      this.setState({ text: "" });
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addCard(text, listId));
      this.setState({ text: "" });
    }
    return;
  };
  //Renders specific button based on props
  renderButton = () => {
    const { lists } = this.props;
    const buttonText = lists ? "Add another list" : "Add a card";
    const buttonTextOpacity = lists ? 1 : 0.5;
    const buttonTextColor = lists ? "white" : "inherit";
    const buttonTextBackground = lists ? "rgba(0, 0, 0, 0.15)" : "inherit";
    return (
      <div
        className='add-button'
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
        onClick={this.openForm}>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  //Renders the textarea form for adding a list or card
  renderForm = () => {
    const { lists } = this.props;
    const placeholder = lists ? "Enter list title..." : "Enter title for this card...";
    const buttonTitle = lists ? "Add List" : "Add Card";
    return (
      <div>
        <Card className='add-card-form'>
          <Textarea
            className='textarea'
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleChange}
            role='textbox'
          />
        </Card>
        <div className='add-submit-button'>
          <Button
            onMouseDown={lists ? this.handleAddList : this.handleAddCard }
            variant='contained'
            style={{ color: "white", backgroundColor: "#0079bf" }}>
            {buttonTitle}
          </Button>
          <Icon className='close-icon'>close</Icon>
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderButton();
  }
}

export default connect()(AddButton);
