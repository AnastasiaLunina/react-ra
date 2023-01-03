import React from 'react';
import Cards from './Cards';
import AddCard from './AddCard';

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {notes: []};
        this.url = 'http://localhost:7777';
        this.loadingNotes = this.loadingNotes.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.loadingNotes();
    }

    loadingNotes() {
        console.log('loaded')
        fetch(`${this.url}/notes`)
            .then(response => response.json())
            .then(data => this.setState({ notes: data }))
            .catch(err => console.log(err))
    }

    onAdd(text) {
        const data = { id: 0, content: text };
        console.log('added')
        fetch(`${this.url}/notes`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => this.loadingNotes())
            .catch(err => console.log(err))
    }

    onDelete(id) {
        console.log('deleted')
        fetch(`${this.url}/notes/${id}`, {
            method: 'DELETE',
        })
            .then(response => this.loadingNotes())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="title">
                    <h1>Notes</h1>   
                    <button className="loading-btn" 
                            type="button" 
                            onClick={this.loadingNotes}><span className="loading"></span>
                    </button>
                </div>
                <Cards notes={this.state.notes} onDelete={this.onDelete} />
                <AddCard onAdd={this.onAdd}/>    
            </>
        )
    }
}

export default Notes