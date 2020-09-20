import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import gatsbyVideo from "../media/gatsby.mp4"

export default function Home({data}) {
  return (
      <>

            <div class="center video-background">
              <video width="800" height="450" controls autoPlay muted>
                  <source src={gatsbyVideo} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>

    <Layout>

      <h3> A list of the Gatsby's we serve!</h3>
      <br/>

      <div class="row">
      {data.allContentfulRecipes.nodes.map((node, index) => (
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={ node.image.file.url } alt={ node.name } data-holder-rendered="true" />
                <div class="card-body btn-center">
                  <p class="card-text">{node.name}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href={node.name} class="btn btn-outline-light">Learn More!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>

    </Layout>

</>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulRecipes(filter: {node_locale: {eq: "en-US"}}) {
    nodes {
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
}

`