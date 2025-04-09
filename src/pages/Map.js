import React, { useState } from 'react';

const Map = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: 'email', // Default contact method: email
  });

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission success
    setFormSuccess(true);
    setFormError(null);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: 'email',
      });
      setFormSuccess(false);
    }, 3000);
  };

  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/church-inside.jpg')",
        backgroundAttachment: 'fixed', // Ensures the background image stays fixed
      }}
    >
      {/* Black overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm z-0"></div>

      <div className="max-w-lg mx-auto p-6 bg-transparent border border-purple-200 rounded-lg shadow-lg text-center">
    <h2 className="text-2xl font-bold text-white relative mb-4">The Impact of Christ Worship Center International</h2>
    <p className="text-sm text-gray-50 mb-6">
        We are more than a church — we are a vibrant community rooted in love, 
        worship, and outreach. With hearts wide open and arms extended, we welcome all people 
        into a life-transforming encounter with Jesus Christ. Our vision is to see lives changed,
        hope restored, and communities renewed through the power of God's presence and the warmth
        of family.
    </p>
</div>

    </div>
  );
};

export default Map;