import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem'
import AddItem from './components/AddItem/AddItem'

class App extends React.Component {

      state = {
          items : [
              {id:1,name:'karim',age:19},
              {id:2,name:'mohamed',age:22},
              {id:3,name:'khalid',age:23}
          ]
      }

      DeleteItem = (id) => {

          // let items = this.state.items.filter(item => {
          //   return item.id !== id
          // })
          // this.setState({items})

          let items = this.state.items
          let i = items.findIndex(item => item.id === id)
          items.splice(i, 1)
          this.setState({items})
      }

      AddItem = (item) => {
        item.id = Math.random();
        let items = this.state.items;
        items.push(item);
        this.setState({items})
      }

    render () {
      return (

        <div className="container">

        <h1> To Do List </h1>
        <TodoItem items = {this.state.items} Delete = {this.DeleteItem}/>
        <AddItem AddItem = {this.AddItem}/>

        </div>
      );
    }
}

export default App;
