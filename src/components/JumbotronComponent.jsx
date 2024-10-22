import React from 'react'
import { Button, Container } from 'reactstrap'

export default function JumbotronComponent(props) {
    const { title } = props
    return (
        <>
            <Container>
                <h1 className="display-3">{title}</h1>
                <p className="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque exercitationem harum nesciunt odio error quaerat porro dolorum impedit quasi quam amet expedita aut facere totam eligendi, corrupti numquam accusamus labore, alias saepe officia accusantium? Velit repudiandae aut explicabo, ipsam possimus minima quasi. Praesentium, quod! Vero eaque doloribus architecto ullam sapiente.
                </p>
                <hr className="mt-2" />
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque asperiores alias tempore non dolore ipsam autem placeat rem dignissimos consequuntur.</p>
            </Container>
        </>
    )
}
