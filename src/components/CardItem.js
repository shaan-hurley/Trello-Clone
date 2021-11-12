import * as React from "react";
import Card from "@mui/material/Card";
import Icon from "@material-ui/core/Icon";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { deleteCard } from "../actions";
import "../styles/Cards.css";

class CardItem extends React.Component {
  handleDelete = (e) => {
    const { dispatch } = this.props;
    dispatch(deleteCard(this.props.listId, this.props.id));
  };
  render() {
    return (
      <Draggable draggableId={String(this.props.id)} index={this.props.index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Card className='card-container'>
              <CardContent className='card-content'>
                <Typography>{this.props.text}</Typography>
                <Button
                  variant='text'
                  color='error'
                  style={{ backgroundColor: 'transparent' }}
                  onMouseDown={(e) => this.handleDelete(e)}>
                  <Icon className='delete-button'>delete</Icon>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  }
}

export default connect()(CardItem);
