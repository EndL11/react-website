import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
    {name: 'Kay Garland', role: 'Lead Designer', image:'img/team/1.jpg'},
    {name: 'Larry Parker', role: 'Lead Marketer', image:'img/team/2.jpg'},
    {name: 'Diana Pertersen', role: 'Lead Developer', image:'img/team/3.jpg'}
]
export default class Team extends React.Component {
    render(){
        return(
            <section className="bg-light" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        {teamMembers.map((member, index) => {
            return <TeamMember {...member} key={index.toString()} />
        })}
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
        )
    }
}