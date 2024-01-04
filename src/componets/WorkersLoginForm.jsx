import React, { useState } from 'react';
import './Workers.css'
const WorkerLoginForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    contact: '',
    experience: '',
    education: '',
    professionalRole: '',
    skill: '',
    overview: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted:', inputs);
  };

    return (
      <div class="background">
    <form onSubmit={handleSubmit} class='form-container'>
      <label>
        Name:
        <input type="text" name="name" value={inputs.name} onChange={handleChange} />
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={inputs.contact} onChange={handleChange} />
      </label>
      <label>
        Experience:
        <input type="text" name="experience" value={inputs.experience} onChange={handleChange} />
      </label>
      <label>
        Education:
        <input type="text" name="education" value={inputs.education} onChange={handleChange} />
      </label>
      <label>
        Professional Role:
        <input type="text" name="professionalRole" value={inputs.professionalRole} onChange={handleChange} />
      </label>
      <label>
        Skill:
        <input type="text" name="skill" value={inputs.skill} onChange={handleChange} />
      </label>
      <label>
        Overview:
        <textarea name="overview" value={inputs.overview} onChange={handleChange} />
      </label>
      <label>
        Attach Resume:
        <input type="file" name="resume" onChange={handleChange} />
      </label>
      <button type="submit" id='register' >Register</button>
            </form>
            </div>
  );
};

export default WorkerLoginForm;
