

import { useState } from "react";
import "./App.css";

function App() {
  const [biodata, setBiodata] = useState({
  fullName: "",
  dateOfBirth: "",
  education: "",
  occupation: "",
  fatherName: "",
  motherName: "",
  age: "",
  height: "",
  religion: "",
  location: "",
  gender: "",
  martialStatus: "",
  motherTongue: "",
  adress: "",
  photo: "",
  phone: "",
  email: "",
});
const [template, setTemplate] = useState("classic");
  const handleChange = (event) => {
    const { name, value } = event.target;

    setBiodata({
      ...biodata,
      [name]: value,
    });
  };
  const handlePhoto = (event) => {
  const file = event.target.files[0];

  if (file) {
    const photoURL = URL.createObjectURL(file);

    setBiodata({
      ...biodata,
      photo: photoURL,
    });
  }
};
const handleReset = () => {
  setBiodata({
    fullName: "",
    dateOfBirth: "",
    education: "",
    occupation: "",
    fatherName: "",
    motherName: "",
    age: "",
    height: "",
    religion: "",
    location: "",
    phone: "",
    email: "",
    photo: "",
  });
};
  return (
    <div className="app">
  <div className="page-title">
    <h1>Marriage Biodata Maker</h1>
    <p>Create your beautiful biodata</p>
  </div>

      <div className="form-section">
  <h2>Enter Your Details</h2>
        <label>Profile Photo</label>
<br />
<div className="template-selector">
  <label>Choose Template</label>
  <br />
  <select
    value={template}
    onChange={(event) => setTemplate(event.target.value)}
  >
    <option value="classic">Classic</option>
    <option value="modern">Modern</option>
    <option value="minimal">Minimal</option>
  </select>
</div>

<br />
<input
  type="file"
  accept="image/*"
  onChange={handlePhoto}
/>

<br /><br />
        <label>Full Name</label>
        <br />
        <input
          type="text"
          name="fullName"
          value={biodata.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <br /><br />

        <label>Date of Birth</label>
        <br />
        <input
          type="date"
          name="dateOfBirth"
          value={biodata.dateOfBirth}
          onChange={handleChange}
        />

        <br /><br />

        <label>Education</label>
        <br />
        <input
          type="text"
          name="education"
          value={biodata.education}
          onChange={handleChange}
          placeholder="Example: BCA"
        />

        <br /><br />

        <label>Occupation</label>
        <br />
        <input
          type="text"
          name="occupation"
          value={biodata.occupation}
          onChange={handleChange}
          placeholder="Enter occupation"
        />

        <br /><br />

        <label>Father's Name</label>
        <br />
        <input
          type="text"
          name="fatherName"
          value={biodata.fatherName}
          onChange={handleChange}
        />

        <br /><br />

        <label>Mother's Name</label>
        <br />
        
        <input
          type="text"
          name="motherName"
          value={biodata.motherName}
          onChange={handleChange}
        />

        <br /><br />
                <label>Age</label>
        <br />
        <input
          type="text"
          name="age"
          value={biodata.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <br /><br />

        <label>Height</label>
        <br />
        <input
          type="text"
          name="height"
          value={biodata.height}
          onChange={handleChange}
          placeholder="Example: 5'8&quot;"
        />

        <br /><br />

        <label>Religion</label>
        <br />
        <input
          type="text"
          name="religion"
          value={biodata.religion}
          onChange={handleChange}
          placeholder="Enter religion"
        />

        <br /><br />

        <label>Location</label>
        <br />
        <input
          type="text"
          name="location"
          value={biodata.location}
          onChange={handleChange}
          placeholder="Enter your location"
        />

<br /><br />
<label>Gender</label>
<br />
<select
  name="gender"
  value={biodata.gender}
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>

<br /><br />

<label>Marital Status</label>
<br />
<select
  name="maritalStatus"
  value={biodata.maritalStatus}
  onChange={handleChange}
>
  <option value="">Select Marital Status</option>
  <option value="Never Married">Never Married</option>
  <option value="Divorced">Divorced</option>
  <option value="Widowed">Widowed</option>
</select>

<br /><br />

<label>Mother Tongue</label>
<br />
<input
  type="text"
  name="motherTongue"
  value={biodata.motherTongue}
  onChange={handleChange}
  placeholder="Example: Kannada"
/>

<br /><br />

<label>Address</label>
<br />
<textarea
  name="address"
  value={biodata.address}
  onChange={handleChange}
  placeholder="Enter your address"
  rows="3"
/>

<br /><br />

<label>Phone Number</label>
<br />
<input
  type="tel"
  name="phone"
  value={biodata.phone}
  onChange={handleChange}
  placeholder="Enter phone number"
/>

<br /><br />

<label>Email</label>
<br />
<input
  type="email"
  name="email"
  value={biodata.email}
  onChange={handleChange}
  placeholder="Enter email address"
/>

<br /><br />
      </div>

      <hr />

<div className={`preview ${template}`}>
<div className="biodata-header">
  <h2>BIODATA</h2>
  <p>Marriage Profile</p>
</div>
        {biodata.photo && (
  <img
    src={biodata.photo}
    alt="Profile"
    style={{
      width: "150px",
      height: "180px",
      objectFit: "cover",
      display: "block",
      margin: "0 auto 20px",
    }}
  />
)}

<h1>{biodata.fullName || ""}</h1>

        <h3>Personal Details</h3>

        <p>
          <strong>Date of Birth:</strong>{" "}
          {biodata.dateOfBirth || "-"}
        </p>

        <p>
          <strong>Education:</strong>{" "}
          {biodata.education || "-"}
        </p>

        <p>
          <strong>Occupation:</strong>{" "}
          {biodata.occupation || "-"}
        </p>

        <h3>Family Details</h3>

        <p>
          <strong>Father:</strong>{" "}
          {biodata.fatherName || "-"}
        </p>

        <p>
          <strong>Mother:</strong>{" "}
          {biodata.motherName || "-"}
        </p>
        <p>
  <strong>Age:</strong>{" "}
  {biodata.age || "-"}
</p>

<p>
  <strong>Height:</strong>{" "}
  {biodata.height || "-"}
</p>

<p>
  <strong>Religion:</strong>{" "}
  {biodata.religion || "-"}
</p>

<p>
  <strong>Location:</strong>{" "}
  {biodata.location || "-"}
</p>
<p>
  <strong>Gender:</strong>{" "}
  {biodata.gender || "-"}
</p>

<p>
  <strong>Marital Status:</strong>{" "}
  {biodata.maritalStatus || "-"}
</p>

<p>
  <strong>Mother Tongue:</strong>{" "}
  {biodata.motherTongue || "-"}
</p>

<p>
  <strong>Address:</strong>{" "}
  {biodata.address || "-"}
</p>
<h3>Contact Details</h3>

<p>
  <strong>Phone:</strong>{" "}
  {biodata.phone || "-"}
</p>

<p>
  <strong>Email:</strong>{" "}
  {biodata.email || "-"}
</p>
      </div>
            <div className="print-button-container">
  <button onClick={() => window.print()}>
    🖨️ Print / Save as PDF
  </button>

  <button className="clear-button" onClick={handleReset}>
    🔄 Clear All
  </button>
</div>
    </div>
  );
}

export default App;