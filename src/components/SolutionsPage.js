import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolutionsPage = () => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await axios.get('/api/solutions');
        setSolutions(response.data);
      } catch (error) {
        console.error('Error fetching solutions:', error);
      }
    };

    fetchSolutions();
  }, []);

  return (
    <div>
      <h2>Solutions</h2>
      {solutions.map((solution, index) => (
        <div key={index} className="solution">
          <h3>{solution.category}</h3>
          <p>{solution.problem}</p>
          <p>{solution.solution}</p>
        </div>
      ))}
    </div>
  );
};

export default SolutionsPage;

