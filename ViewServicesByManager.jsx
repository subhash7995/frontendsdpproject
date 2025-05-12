import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewServicesByManager() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [managerId, setManagerId] = useState(null);

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      const manager = JSON.parse(storedManager);
      setManagerId(manager.id);
      fetchServices(manager.id);
    }
  }, []);

  const fetchServices = async (managerId) => {
    try {
      const response = await axios.get(`${config.url}/manager/viewservicesbymanager/${managerId}`);
      setServices(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your services');
      setServices([]);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Services</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {services.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No services added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '90%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Cost</th>
              <th>Manager Name</th>
              <th>Manager Email</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.category}</td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.capacity}</td>
                <td>{service.cost}</td>
                <td>{service.manager?.name}</td>
                <td>{service.manager?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
