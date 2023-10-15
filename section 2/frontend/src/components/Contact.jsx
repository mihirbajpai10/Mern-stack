import React from 'react'

const Contact = () => {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <h1>Contact Information</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, aliquid
          culpa iusto in consequuntur quae, quod delectus commodi et quibusdam, odit
          voluptas repellendus a libero reprehenderit cum nobis placeat harum.{" "}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <i className="fa-solid fa-phone" />
          <p>
            <span>+91-9841545641</span>
            <br />
            <span>+91-9841545641</span>
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <i className="fa-solid fa-envelope" />
          <p>
            <span>mihir.bajpai10@gmail.com</span>
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <i className="fa-solid fa-location-dot" />
          <p>
            <span>Lucknow,India</span>
          </p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <div className="form-input">
              <label>Your Name</label>
              <input type="text" className="my-input" />
            </div>
            <div className="form-input">
              <label>Your Email</label>
              <input type="text" className="my-input" />
            </div>
          </div>
          <div className="form-input">
            <label>Your Subject</label>
            <input type="text" className="my-input" />
          </div>
          <div className="form-input">
            <label>Message</label>
            <input type="text" className="my-input" />
            <textarea rows={4} type="text" className="my-input" defaultValue={""} />
          </div>
          <button className="my-btn">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default Contact