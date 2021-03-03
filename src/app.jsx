import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: '',
            text: '',
            date: ``,
            chirps: [],

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            chirps:
                [
                    ...this.state.chirps,
                    { id: uuidv4(), member: 'Spongebob', message: 'Never trust atoms; they make up everything.', date: `${new Date()}` },
                    { id: uuidv4(), member: 'Mr.Browney', message: 'Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.', date: `${new Date()}` },
                    { id: uuidv4(), member: 'Ms.PatPat', message: 'Atheism is a non-prophet organization.', date: `${new Date()}` }

                ]
        })

    }

    handleSubmit(e) {
        console.log(this.state.chirps.length)

        e.preventDefault()
        this.setState({
            chirps: [...this.state.chirps, { id: uuidv4(), member: this.state.users, message: this.state.text, date: `${new Date()}` }],
            users: '',
            text: ''

        })

    };
    
    render() {

        return (
            <React.Fragment>

                <div className="d-flex justify-content-center mt-5">

                <form className='position-relative'>
                    <div className='mb-3 text-center'>
                        <label htmlFor="user" className="form-label ml-3" >Enter UserName: </label>
                        <input
                            className="form-control"
                            type="text"
                            name='user'
                            value={this.state.users}
                            onChange={e => this.setState({ users: e.target.value })}
                        />
                    </div>

                    <div className='mb-5 text-center' >
                        <label htmlFor="message" className="form-label ml-5" >Enter Message: </label>
                        <textarea
                            style={{height:`15vh`,width:`50vw`}}
                            className="form-control"
                            type="text"
                            name='message'
                            id='message'
                            value={this.state.text}
                            onChange={e => this.setState({ text: e.target.value })}
                        />
                    </div>
                    <button className="btn bg-light mt-1 mb-5" style={{marginLeft:'20vw'}} onClick={this.handleSubmit}>Submit Chirp</button>
                </form>
                </div>
                <div className="row ml-5">
                 {this.state.chirps.map((val,index) =>
                        <div className="card m-2 " style={{ width: "18rem"}} key={uuidv4()}>
                             <span className=' d-flex justify-content-center mt-1'><h6>{`${index+1}`}</h6></span>

                            <div className="card-body d-flex flex-wrap" key={uuidv4()}>
                                <h5 className="card-title" key={uuidv4()}>{val.member}</h5>
                                <h6 className="card-subtitle mb-2 text-success" key={uuidv4()} style={{fontSize:'.5rem'}}>{val.date}</h6>
                                <p className="card-text" key={uuidv4()}>{val.message}</p>

                            </div>
                        </div>
                )}
                </div>
            </React.Fragment>
        )

    }
}

export default App;