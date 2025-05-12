import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddServiceMember() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: '',
    job: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/manager/addservicemember`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: '',
          job: '',
        });
      }
    } catch (err) {
      setMessage('');
      if (err.response) {
        setError(err.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add Service Member</h3>

      {message ? (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
      ) : (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      )}

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div>
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div>
          <label>Mobile No</label>
          <input type="text" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>

        <div>
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>

        <div>
          <label>Job</label>
          <input type="text" id="job" value={formData.job} onChange={handleChange} required />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>Add</button>
      </form>
    </div>
  );
}
