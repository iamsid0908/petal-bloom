import React from "react";
import "./Admin.css";
import { Button } from "primereact/button";

function Admin() {
  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admission-header">
          <h1 className="school-name">PETAL BLOOM ACADEMY</h1>
          <p className="school-address">An English medium school</p>
          <p className="school-address">
            Adarsh Nagar Barwadih, Latehar(Jharkhand) 822111
          </p>
          <p className="boder11"></p>
          <h1>ADMISSION FORM</h1>
          <div className="admission-details">
            <div className="admission-div1">
              <label>Admission No:-</label>
              <div className="admission-box">
                <input
                  placeholder="121"
                  type="text"
                  className="admission-input"
                />
              </div>
            </div>
            <div className="admission-div2">
              <label>Date Of Admission:-</label>
              <div className="admission-box1">
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className="student-personal-info">
          <p>STUDENT PERSONAL INFORMATION</p>
          <p>ADMITTED INTO CLASS</p>
          <div className="admission-box">
            <input type="text" />
          </div>
          <div className="pic">pic</div>

          <div className="student-name">
            <label className="student-label">Student's Name:-</label>
            <div className="admission-box student-box">
              <input
                type="text"
                placeholder="Mr Student"
                className="student-input"
              />
            </div>
          </div>
          <div className="student-name">
            <label className="student-label">Father's Name:-</label>
            <div className="admission-box student-box">
              <input
                type="text"
                placeholder="Mr Father"
                className="student-input"
              />
            </div>
          </div>
          <div className="student-name">
            <label className="student-label">Mother's Name:-</label>
            <div className="admission-box student-box">
              <input
                type="text"
                placeholder="Mrs Mother"
                className="student-input"
              />
            </div>
          </div>

          {/* date,gender */}
          <div className="student-birth">
            <div className="student-birth-con">
              <label className="student-label birth-label">
                Date of birth:-
              </label>
              <div className="admission-box  birth-input-box">
                <input type="date" className="student-input birth-input" />
              </div>
            </div>
            <div className="student-birth-con">
              <label className="student-label">Gender:-</label>
              <div className="admission-box student-box student-gender">
                <label>Male</label>
                <input type="radio" name="gender" className="student-input" />
                <label>Female</label>
                <input type="radio" name="gender" className="student-input" />
              </div>
            </div>
            <div className="student-birth-con">
              <label className="student-label birth-label ">
                Bloode type:-
              </label>
              <div className="admission-box birth-input-box">
                <input
                  type="text"
                  placeholder="Blood type"
                  className="student-input birth-input"
                />
              </div>
            </div>
          </div>
          {/*nationality  */}
          <div className="student-nationality">
            <div className="student-nationality-con">
              <label for="nation">Nationality:</label>
              <select name="nation" id="nation">
                <option value="indian">Indian</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="student-nationality-con">
              <label for="religion">Religion:</label>
              <select name="religion" id="religion">
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="sikh">Sikh</option>
                <option value="christian">Christian</option>
              </select>
            </div>
            <div className="student-nationality-con">
              <label for="category">Category:</label>
              <select name="category" id="category">
                <option value="gen">Gen</option>
                <option value="obc">Obc</option>
                <option value="ebc">Ebc</option>
                <option value="sc">Sc</option>
                <option value="st">St</option>
              </select>
            </div>
          </div>
          {/* address */}
          <div className="student-address">
            <div className="student-address-con">Address</div>
            <div className="student-address-con2">
              <div className="student-birth-con">
                <label className="student-label birth-label ">Village:</label>
                <div className="admission-box student-address-box">
                  <input
                    type="text"
                    placeholder="village"
                    className="student-input"
                  />
                </div>
              </div>
              <div className="student-birth-con">
                <label className="student-label birth-label ">Ps:</label>
                <div className="admission-box student-address-box">
                  <input
                    type="text"
                    placeholder="post-office"
                    className="student-input"
                  />
                </div>
              </div>
              <div className="student-birth-con">
                <label className="student-label birth-label ">State:</label>
                <div className="admission-box student-address-box">
                  <input
                    type="text"
                    placeholder="state"
                    className="student-input"
                  />
                </div>
              </div>
            </div>
            <div className="student-address-con2">
              <div className="student-birth-con">
                <label className="student-label birth-label ">
                  Post Office:
                </label>
                <div className="admission-box student-address-box">
                  <input
                    type="text"
                    placeholder="village"
                    className="student-input"
                  />
                </div>
              </div>
              <div className="student-birth-con">
                <label className="student-label birth-label ">District:</label>
                <div className="admission-box student-address-box">
                  <input
                    type="text"
                    placeholder="post-office"
                    className="student-input "
                  />
                </div>
              </div>
              <div className="student-birth-con">
                <label className="student-label birth-label">Pin Code:</label>
                <div className="admission-box student-address-box">
                  <input
                    type="text"
                    placeholder="state"
                    className="student-input"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* cn */}
          <div className="student-contact">
            <div className="student-name">
              <label className="student-label">Phone No:-</label>
              <div className="admission-box student-box">
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="student-input"
                />
              </div>
            </div>
            <div className="student-name">
              <label className="student-label">Aadhaar No:-</label>
              <div className="admission-box student-box">
                <input
                  type="number"
                  placeholder="Enter your aadhaar number"
                  className="student-input"
                />
              </div>
            </div>
          </div>
          {/* qualification */}
          <div className="student-qualification">
            <div className="stud-qual">Qualification:</div>
            <div className="student-name">
              <label className="student-label">Father:</label>
              <div className="admission-box student-box">
                <input
                  type="text"
                  placeholder="Enter your aadhaar number"
                  className="student-input"
                />
              </div>
            </div>
            <div className="student-name">
              <label className="student-label">Mother:</label>
              <div className="admission-box student-box">
                <input
                  type="text"
                  placeholder="Enter your aadhaar number"
                  className="student-input"
                />
              </div>
            </div>
          </div>
          {/* occupation */}
          <div className="student-qualification">
            <div className="stud-qual">Occupation:</div>
            <div className="student-name">
              <label className="student-label">Father:</label>
              <div className="admission-box student-box">
                <input type="text" className="student-input" />
              </div>
            </div>
            <div className="student-name">
              <label className="student-label">Mother:</label>
              <div className="admission-box student-box">
                <input type="text" className="student-input" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="student-name">
            <label className="student-label">Name of Local Guardian :</label>
            <div className="admission-box student-box">
              <input type="text" className="student-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
