import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button , Card } from 'react-bootstrap';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.location}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    {/* <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |
       <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td> */}
    <td>
      <Button variant="success"><Link to={"/edit/" + props.exercise._id} style={{ textDecoration: 'none' , color: 'white'}}
      >edit</Link></Button>
    </td>
    
      <Button variant="danger">
        <a  onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </Button>
    
  </tr>
)

export default class ExercisesList extends Component {
    state = {exercises: []};

  componentDidMount = () => {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise= (id) => {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList = () => {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise}
        key={currentexercise._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3> All Posts</h3>
        <Card style={{ width: '50rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Username : </Card.Title>
            <Card.Text>
<thead className="thead-light">
           
          </thead>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>location</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
                {this.exerciseList()}
          </tbody>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>location</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table> */}
      </div>
    )
  }
}