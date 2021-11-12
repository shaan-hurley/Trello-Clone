import React from "react";
import "../styles/List.css";
import CardItem from "./CardItem";
import AddButton from "./AddButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@mui/material/Typography";
import { Droppable } from "react-beautiful-dnd";
import { deleteList } from "../actions";
import { connect } from "react-redux";

import Button from "@mui/material/Button";

class List extends React.Component {
  handleDelete = (e) => {
    console.log("checking delete list");
    const { dispatch } = this.props;
    console.log("checking props.listId", this.props.listId);
    dispatch(deleteList(this.props.listId));
    return;
  };

  render() {
    return (
      <Droppable droppableId={String(this.props.listId)}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='list-container'>
            <Typography className='list-title' variant='h5'>
              {this.props.title}
            </Typography>
            {this.props.cards.map((card, index) => (
              <CardItem
                key={card.id}
                text={card.text}
                id={card.id}
                index={index}
                listId={this.props.listId}
              />
            ))}
            {/* Delete list Button */}
            <div className='list-button-container'>
              <AddButton listId={this.props.listId} />
              <Button
                variant='text'
                color='error'
                onMouseDown={(e) => this.handleDelete(e)}>
                <Icon className='delete-list-button'>delete</Icon>
              </Button>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default connect()(List);
