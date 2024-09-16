import React from "react";

function NewCard({newItem}) {
    return (
        <div className="col-3">
            <div className="card bg-dark" style={{ width: '20rem'}}>
                {newItem.image ? <img src={newItem.image} className="card-img-top" alt="NewImage" /> : <img src="./news.png" className="card-img-top" alt="NewImage" />}
                
                <div className="card-body">
                    <h5 className="card-title text-light">{newItem.title}</h5>
                    <p className="card-text text-light">{newItem.category}</p>
                    <a href={newItem.url} className="btn btn-outline-primary text-light">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default NewCard;
