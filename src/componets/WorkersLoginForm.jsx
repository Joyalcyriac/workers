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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', inputs.name);
      formData.append('contact', inputs.contact);
      formData.append('experience', inputs.experience);
      formData.append('education', inputs.education);
      formData.append('professionalRole', inputs.professionalRole);
      formData.append('skill', inputs.skill);
      formData.append('overview', inputs.overview);
      formData.append('resume', inputs.resume);

      const response = await fetch('http://localhost:3001/submit-worker-form', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, reset form fields after successful submission
        setInputs({
          name: '',
          contact: '',
          experience: '',
          education: '',
          professionalRole: '',
          skill: '',
          overview: '',
          resume: null,
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


    return (
      <div class="background">
    <form onSubmit={handleSubmit} className="form-container">
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
