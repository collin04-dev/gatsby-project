import React from "react"
import { Link } from "@reach/router"
import "./layout.scss";
import { StaticQuery } from "gatsby";

export default function Layout({children}) {
    return (
        <div class="container">
        <div style={{ maxWdith: '800px', margin: '0 auto'}}>

            {/*<h1>My First React Site</h1>*/}

            <StaticQuery
            query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
            `}
            render={data => (
            <header>
                <h1>{data.site.siteMetadata.title}</h1>
            </header>
            )}
        />

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>
            <hr/>
            
            {children}
            </div>
        </div>
    )
}