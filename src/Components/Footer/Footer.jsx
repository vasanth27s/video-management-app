import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className='footer-container'>
           
          
            <ul className='footer-list'>
                <li><h2>SOCIALS</h2></li>
                <li>
                    <a href="https://www.linkedin.com/in/salapakshi-vasanth-kumar-2363b5246/" rel="noreferrer">
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vasanth27s" rel="noreferrer" >
                        <p>Github</p>
                    </a>
                </li>
                <li>
                    <a href="https://x.com/Vasanth39786970" rel="noreferrer">
                        <p>x</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/vasanth_kumar.27?igsh=MXB0aTdwYzZheGk1dg==" rel="noreferrer">
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export { Footer } 