import React from "react";
import './Organization.css'
import ActionBar from './ActionBar.js'
import CommentBoard from './CommentBoard.js'

class Organization extends React.Component {
    render(){
        return <div className="Orginization-container-wrapper"><div className="Organization-container">
            <div className="Organization-header">
                <h1 className="Organization-title">Methodist Church</h1>
            </div>
            
            <div className="Organization-desc">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel auctor ligula. Proin dictum pulvinar neque ultricies iaculis. Suspendisse accumsan, leo ac finibus interdum, neque ligula scelerisque augue, quis ornare ante lectus ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean convallis congue nisi eu vulputate. Vestibulum feugiat sollicitudin sapien, quis accumsan lacus fermentum non. Suspendisse potenti. Cras dignissim varius tortor, nec fringilla nisl vehicula et. Morbi sit amet erat in lectus elementum mollis in sit amet turpis. Sed quis turpis mi. Praesent euismod, urna nec vulputate volutpat, dolor magna consequat libero, quis rhoncus nibh lectus gravida massa. Etiam ac convallis neque, sed euismod magna. Nulla quis blandit lacus, sit amet euismod neque. Ut lacus tortor, placerat a bibendum at, ultricies ac massa. Etiam eget bibendum odio. Integer finibus, lorem sit amet laoreet tempor, erat risus sodales tortor, luctus rhoncus quam ipsum id velit.</p>

            </div>
            <div className="Organization-sidebar">
                <ActionBar/>
            </div>
            
            <div className="Organization-comment">
                <CommentBoard/>
            </div>
        </div></div>;
    }
}



export default Organization;
