import React from 'react';
import logo from './logo.svg';
import './App.css';

//function App(){
//  return(
//    <div className='App'>
//      <header className='App-header'>
//        <img src={logo} className='App-logo'/>
//        <p>Hello World</p>
//      </header>
//    </div>
//  );
//}

//export default App;

class App extends React.Component{

  constructor(probs){
    super(probs);
    this.state = {
      newItem : '',
      list : []
    }
  }

  addItem(todovalue){
    if (todovalue !== ''){
      const newItem = {
        id : Date.now(),
        value : todovalue,
        isDone : false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ''
      });
    }

  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !==id);
    this.setState({list:updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return (
      <div className='App'>
        <img src={logo} width='100' heigh='100' className='App-logo'/>
        <h1 className='App-title'>React ToDo App</h1>
        <div className='container'>
          <p className='App-additem'>Add Items...</p>  
          <input type='text' className='Input-text' placeholder='Add a Todo' required value={this.state.newItem} onChange={e => this.updateInput(e.target.value)}></input>
          <button className='add-btn' onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add</button>
          <div className='list'>
            <ul className='ul-style'>
              {this.state.list.map(item =>{
                return (
                  <li className='list-element' key={item.id}>
                    <input type='checkbox' name='isDone' checked={item.isDone} onChange={() => {}}/>
                    {item.value}
                    <button className='delete-btn' onClick={() => this.deleteItem(item.id)}>Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App