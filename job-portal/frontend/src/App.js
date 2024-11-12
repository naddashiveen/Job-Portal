import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    location: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/jobs').then((res) => setJobs(res.data));
  }, []);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/jobs', jobData).then((res) => {
      setJobs([...jobs, res.data]);
      setJobData({ title: '', description: '', company: '', location: '' });
    });
  };

  return (
    <div>
      <h1>Job Portal</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={jobData.title} onChange={handleChange} placeholder="Job Title" required />
        <input type="text" name="description" value={jobData.description} onChange={handleChange} placeholder="Description" required />
        <input type="text" name="company" value={jobData.company} onChange={handleChange} placeholder="Company" required />
        <input type="text" name="location" value={jobData.location} onChange={handleChange} placeholder="Location" required />
        <button type="submit">Add Job</button>
      </form>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
