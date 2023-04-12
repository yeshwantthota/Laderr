import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Innovation</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Your innovation title" />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Technology">Technology</option>
              <option value="sustainability">Sustainability</option>
              <option value="finance">Finance</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce your innovation"
              cols="0"
              rows="16"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            {/* <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" /> */}
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              placeholder="Short description of your innovation"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            {/* <label htmlFor="">Revision Number</label>
            <input type="number" /> */}
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. Affordable" />
            <input type="text" placeholder="e.g. Esay to use" />
            <input type="text" placeholder="e.g. solving problem" />
            {/* <input type="text" placeholder="e.g. hosting" /> */}
            <label htmlFor="">Minimum Investment Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
