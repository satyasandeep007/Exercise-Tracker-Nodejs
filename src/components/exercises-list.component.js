import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateUser from './create-user.component';
import { Button , Card } from 'react-bootstrap';

const Exercise = props => (
  <tr>
    <tr><td>{props.exercise.username}</td></tr>
    <tr><td>{props.exercise.description}</td></tr>
    <tr><td>{props.exercise.location}</td></tr>
    <tr><td>{props.exercise.date.substring(0,10)}</td></tr>
    <tr>
      <td>
          <Button variant="success"><Link to={"/edit/" + props.exercise._id} style={{ textDecoration: 'none' , color: 'white' }}
        >edit</Link><br /></Button>
          <Button variant="danger">
            <a  onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
          </Button> 
      </td>     
    </tr>    
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
          <Card.Body>
            <Card.Title>Post </Card.Title>
            <Card.Text>
              <tbody>
                <tr>
                  <Card.Text><th>Username : </th></Card.Text> 
                  <Card.Text> <th>Description : </th></Card.Text>
                  <Card.Text><th>Location : </th></Card.Text>
                  <Card.Text> <th>Created At : </th></Card.Text>
                  <Card.Text>{this.exerciseList()}</Card.Text>                    
                </tr>
              </tbody>
              <Button variant="primary">
              <Link to={"/user/" + CreateUser} style={{ textDecoration: 'none', color: 'white' }}>
                Create User</Link>
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}