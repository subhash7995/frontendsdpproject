import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config';
import HelpSection from '../components/HelpSection';

export default function BookService() 
{
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const serviceId = queryParams.get('serviceid');

  const [customer, setCustomer] = useState(null);
  const [formData, setFormData] = useState({
    startdate: '',
    enddate: '',
    bookedcapacity: 1
  });

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem("customer");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    } else {
      alert("Customer not logged in!");
      navigate('/customerlogin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      service: { id: serviceId },
      customer: { id: customer.id },
      ...formData,
      status: 1
    };

    try {
      const response = await fetch(`${config.url}/customer/bookservice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        alert("Service booked successfully!");
        navigate('/bookedservices');
      } else {
        alert("Failed to book service.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center' }}>Book Service</h3>
      
      <HelpSection 
        title="Need booking assistance?" 
        description="Have questions about booking this service? Our chatbot can help you with scheduling, capacity, and more."
        buttonText="Help with booking"
        icon="📅"
      />
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
        <div>
          <label>Start Date: </label>
          <input type="date" name="startdate" value={formData.startdate} onChange={handleChange} required />
        </div>
        <div>
          <label>End Date: </label>
          <input type="date" name="enddate" value={formData.enddate} onChange={handleChange} required />
        </div>
        <div>
          <label>Capacity: </label>
          <input type="number" name="bookedcapacity" min="1" value={formData.bookedcapacity} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}
