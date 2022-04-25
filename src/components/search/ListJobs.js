import React, { Component } from 'react'
import ListJob from './ListJob'
import './style/style.css'
class ListJobs extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            jobs: [],
            countries: ['Senegal', 'Ghana',
                'Canada', 'United States', 'France', 'England',
                'Russia', 'Congo', 'Saoudi Arabia', 'Guinee'],
            error: ''

        }
    }



    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users').then(res => {

            res.json().then(data => {

                this.setState(() => ({ jobs: data }))
                // console.log(data)

            })
        })
    }
    render() {

        // console.log(this.state.jobs)
        return (
            <div className='list-jobs'>

                {
                    this.state.jobs.map((job, i) => <ListJob key={job.id}
                        name={job.name} email={job.email} id={job.id} country={this.state.countries[i]} />)
                }
            </div>
        )
    }
}


export default ListJobs