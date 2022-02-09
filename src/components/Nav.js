import {  Link } from 'react-router-dom'

const Nav = () => {
    return(
        <>
            <section className="nav">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Nav