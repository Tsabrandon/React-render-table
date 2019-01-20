import React, { Component } from 'react'


class Counter extends Component {
    state = {  
        movies: [
            {id: 1, title: 'Thor', Genre : 'CGI', rate: 5 },
            {id: 2, title: 'Hulk', Genre : 'CGI', rate: 3 },
            {id: 3, title: 'Ragnarok', Genre : 'CGI', rate: 4.5 },
            {id: 4, title: 'Avengers', Genre : 'CGI', rate: 4 },
            {id: 5, title: 'Captain America', Genre : 'CGI', rate: 4.2 },
            {id: 6, title: 'Iron Man', Genre : 'CGI', rate: 4.3 },
            {id: 7, title: 'Aquaman', Genre : 'CGI', rate: 3 },
            {id: 8, title: 'Marvel', Genre : 'CGI', rate: 3.5 },
            {id: 9, title: 'Superman', Genre : 'CGI', rate: 1.5 }
        ]
    }
    constructor(){
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }


handleDelete (movie){
    let movies = this.state.movies.filter(m => m.id !== movie.id)
    this.setState({movies})
}


    render() {
         if (this.state.movies === 0) 
        return <p> create one</p>
        return(
            <div>  
                <p> Showing the {this.state.movies.length} movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                    <tbody> 
                        {this.state.movies.map(movie => (<tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.rate}</td>
                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(movie)}> Delete</button></td>

                        </tr>))}


                    </tbody>

            </table>

            </div>
        );
    }

}
 
export default Counter;

