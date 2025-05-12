import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './customer.css'; // Include the custom CSS

export default function ViewAllServices() {
  const [services, setServices] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    id: '',
    manager: '',
    company: '',
    category: '',
    title: '',
    description: '',
    capacity: '',
    cost: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      const response = await fetch(`${config.url}/customer/viewallservices`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleBookClick = (serviceId) => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }

    navigate(`/bookservice?serviceid=${serviceId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredServices = services.filter(service => {
    return (
      service.id.toString().includes(searchTerms.id) &&
      service.manager.name.toLowerCase().includes(searchTerms.manager.toLowerCase()) &&
      service.manager.company_name.toLowerCase().includes(searchTerms.company.toLowerCase()) &&
      service.category.toLowerCase().includes(searchTerms.category.toLowerCase()) &&
      service.title.toLowerCase().includes(searchTerms.title.toLowerCase()) &&
      service.description.toLowerCase().includes(searchTerms.description.toLowerCase()) &&
      service.capacity.toString().includes(searchTerms.capacity) &&
      service.cost.toString().includes(searchTerms.cost)
    );
  });

  return (
    <div className="event-container">
      <h3 className="event-heading">Available Services</h3>
      <table className="event-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Company Name</th>
            <th>Company Location</th>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
            <th>Capacity</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'id')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'manager')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'company')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'category')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'title')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'description')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'capacity')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'cost')} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.manager.company_name}</td>
                <td>{service.manager.company_location}</td>
                <td>{service.category}</td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.capacity}</td>
                <td>{service.cost}</td>
                <td>
                  <button className="book-button" onClick={() => handleBookClick(service.id)}>Book</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No matching services found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
