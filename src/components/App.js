import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import List from "./List";
import AddButton from "./AddButton";
import "../styles/App.css";

class App extends React.Component {
  onDragEnd = () => {
    //Logic goes here
  };
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App'>
          <div className='container'>
            {lists.map((list) => (
              <List
                key={list.id}
                title={list.title}
                cards={list.cards}
                listId={list.id}
              />
            ))}
            <AddButton lists />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.cardList,
  };
};

export default connect(mapStateToProps)(App);
