import React, { useState } from "react";

const Details = ({ name, company, address, email, phone, username }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const { city, suite, street, zipcode } = address;

  return (
    <article className={`${openDetails ? "info-card show" : "info-card"}`}>
      <div className="small-info">
        <ul className="person-info">
          <li>
            <h4>Company name</h4>
            <p>{company.name}</p>
          </li>
          <li>
            <h4>Contact</h4>
            <p>{name}</p>
          </li>
          <li>
            <h4>City</h4>
            <p>{city}</p>
          </li>
        </ul>
        <div className="toggle-btn">
          <button
            className="toggle-btn"
            onClick={() => setOpenDetails(!openDetails)}
          >
            {`${openDetails ? "Hide Details" : "View Details"}`}
          </button>
        </div>
      </div>
      <div className="detailbox-info">
        <div className="description-info">
          <h4>Description</h4>
          <p>{company.catchPhrase}</p>
        </div>
        <div className="detail-info-list">
          <ul className="detail-info">
            <li>
              <h4>Contact person</h4>
              <p>{name}</p>
            </li>
            <li>
              <h4>Address</h4>
              <p>
                {suite},{street},{city},{zipcode}
              </p>
            </li>
            <li>
              <h4>Username</h4>
              <p>{username}</p>
            </li>
            <li>
              <h4>City</h4>
              <p>{city}</p>
            </li>
            <li>
              <h4>Email</h4>
              <p>{email}</p>
            </li>
            <li>
              <h4>Contact number</h4>
              <p>{phone}</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Details;
