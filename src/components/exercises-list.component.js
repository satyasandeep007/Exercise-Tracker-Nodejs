import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateUser from './create-user.component';
import { Button , Card } from 'react-bootstrap';

const Exercise = props => (
        <Card style={{ width: '50rem' }}>
          <Card.Body>
            <Card.Title>Post  : {props.exercise._id}</Card.Title>
            <Card.Text>
              <tbody>
                <tr>
                  <td>
                  <Card.Text>Username : {props.exercise.username} </Card.Text> 
                  <Card.Text>Description : {props.exercise.description} </Card.Text>
                  <Card.Text>Location : {props.exercise.location} </Card.Text>
                  <Card.Text>Created At : {props.exercise.date.substring(0,10)}</Card.Text>
                  <Card.Text>
                    Actions : <Button variant="success"><Link to={"/edit/" + props.exercise._id} style={{ textDecoration: 'none' , color: 'white' }} >edit</Link><br /></Button><span>     </span>
                              <Button variant="danger" onClick= {() => { props.deleteExercise(props.exercise._id) }} > delete </Button>
                  </Card.Text>
              
                  </td>
                </tr>
              </tbody>
            </Card.Text>
          </Card.Body>
        </Card>
  
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

        {this.exerciseList()}
        <br />
        
                <Button variant="primary"> <Link to={"/user/" + CreateUser} style={{ textDecoration: 'none', color: 'white' }}>
            Create User</Link>
        </Button>
      </div>
    )
  }
}