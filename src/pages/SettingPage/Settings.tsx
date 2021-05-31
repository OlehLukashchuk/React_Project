import React, { memo } from "react";

import "./Setting.scss";
import DatePicker from "./DatePicker/Date";

export const Settings = memo(() => {
  return (
    <div>
      <div className="settings_neck">
        <button className="settings_newBtn">New</button>
        <button className="settings_reports">Reports</button>
      </div>
      <main className="settings_container">
        <div className="settingsMain_leftContent">
          <h5>General information</h5>
          <form className="form1">
            <div className="form1_child firstName">
              <span>First Name</span>
              <input type="text" placeholder="Enter your first name"></input>
            </div>
            <div className="form1_child lastName">
              <span>Last Name</span>
              <input type="text" placeholder="Also your last name"></input>
            </div>
            <div className="form1_child birthday">
              <span>Birthday</span>
              <DatePicker />
            </div>
            <div className="form1_child gender">
              <span>Gender</span>
              <select>
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form1_child email">
              <span>Email</span>
              <input type="text" placeholder="name@company.com"></input>
            </div>
            <div className="form1_child phone">
              <span>Phone</span>
              <input type="text" placeholder="Write your phone number"></input>
            </div>
          </form>
          <h5>Address</h5>
          <form className="form2">
            <div className="form2_child">
              <span>Address</span>
              <input type="text" placeholder="Enter your home address"></input>
            </div>
            <div className="form2_child">
              <span>Number</span>
              <input type="text" placeholder="No."></input>
            </div>
            <div className="form2_child">
              <span>City</span>
              <input type="text" placeholder="City"></input>
            </div>
            <div className="form2_child">
              <span>Select State</span>
              <select>
                <option>State</option>
                <option value="Ukraine">Ukraine</option>
                <option value="US">US</option>
              </select>
            </div>
            <div className="form2_child">
              <span>ZIP</span>
              <input type="text" placeholder="ZIP"></input>
            </div>
          </form>
          <button className="saveBtn">Save All</button>
        </div>
        <div className="settingsMain_rightContent">
          <div className="rightContent_Profile">
            <div className="profile_backgroundPhoto"></div>
            <div className="profile_info">
              <div className="userName">Oleh Lukashchuk</div>
              <div className="userPosition">Junior Frontend Developer</div>
              <p>Lviv, Ukraine</p>
              <button className="btnConnect">Connect</button>
              <button className="btnSendMessage">Send Message</button>
            </div>
            <div className="profile_UserPhoto"></div>
          </div>
          <div className="rightContent_selectPhoto">
            <h5>Select profile photo</h5>
            <div className="rightContent_info">
              <div className="selectedPhoto"></div>
              <div className="photoFormat">
                <div>Choose Image</div>
                <div>JPG, GIF or PNG. Max size of 800K</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
});
