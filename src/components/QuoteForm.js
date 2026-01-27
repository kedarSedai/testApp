import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import './QuoteForm.css';

const QuoteForm = () => {
  // Initialize EmailJS
  useEffect(() => {
    if (emailConfig.publicKey && emailConfig.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(emailConfig.publicKey);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    zipCode: '',
    currentPolicy: '',
    contactMethod: '',
    email: '',
    phone: '',
    insuranceTypes: {
      health: false,
      auto: false,
      homeowners: false,
    },
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name.startsWith('insurance-')) {
        const insuranceType = name.replace('insurance-', '');
        setFormData((prev) => ({
          ...prev,
          insuranceTypes: {
            ...prev.insuranceTypes,
            [insuranceType]: checked,
          },
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Zip Code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid zip code';
    }

    if (!formData.currentPolicy) {
      newErrors.currentPolicy = 'Please select an option';
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = 'Please select a contact method';
    }

    if (formData.contactMethod === 'email' && !formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.contactMethod === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (formData.phone && !/^[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    const hasInsuranceType = Object.values(formData.insuranceTypes).some(
      (value) => value === true
    );
    if (!hasInsuranceType) {
      newErrors.insuranceTypes = 'Please select at least one insurance type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const selectedInsuranceTypes = Object.entries(formData.insuranceTypes)
        .filter(([_, selected]) => selected)
        .map(([type, _]) => {
          const typeNames = {
            health: 'Health Insurance (Dental & Vision)',
            auto: 'Auto Insurance',
            homeowners: 'Homeowners Insurance',
          };
          return typeNames[type];
        })
        .join(', ');

      const templateParams = {
        to_email: 'yourinsurance313@gmail.com',
        from_name: formData.name,
        from_email: formData.email || 'Not provided',
        phone: formData.phone || 'Not provided',
        zip_code: formData.zipCode,
        current_policy: formData.currentPolicy === 'yes' ? 'Yes' : 'No',
        contact_method: formData.contactMethod === 'email' ? 'Email' : 'Phone',
        insurance_types: selectedInsuranceTypes || 'None selected',
        message: `New Quote Request from ${formData.name}\n\nContact Information:\n- Email: ${formData.email || 'Not provided'}\n- Phone: ${formData.phone || 'Not provided'}\n- Zip Code: ${formData.zipCode}\n\nCurrent Policy: ${formData.currentPolicy === 'yes' ? 'Yes' : 'No'}\nPreferred Contact: ${formData.contactMethod === 'email' ? 'Email' : 'Phone'}\n\nInsurance Types Requested:\n${selectedInsuranceTypes || 'None selected'}`,
      };

      console.log('Form submitted! Sending email...');
      console.log('Service ID:', emailConfig.serviceId);
      console.log('Template ID:', emailConfig.templateId);
      console.log('Public Key:', emailConfig.publicKey);
      console.log('Template Params:', templateParams);

      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log('Email sent successfully!');
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          zipCode: '',
          currentPolicy: '',
          contactMethod: '',
          email: '',
          phone: '',
          insuranceTypes: {
            health: false,
            auto: false,
            homeowners: false,
          },
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your request. Please try again or call us at (614) 414-2693');
    }
  };

  return (
    <section id="quote" className="quote-form-section">
      <div className="container">
        <div className="quote-form-header">
          <h2 className="section-title">Get Your Free Insurance Quote</h2>
          <p className="section-subtitle">
            Fill out the form below and one of our agents will be in touch
            shortly to review your options.
          </p>
        </div>

        {submitSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>
              Your quote request has been submitted successfully. One of our
              agents will contact you shortly.
            </p>
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            {/* Text Input Fields Section */}
            <div className="form-section">
              <h3 className="form-section-title">Contact Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Last"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode">
                    Zip Code <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="12345"
                    maxLength="10"
                    className={errors.zipCode ? 'error' : ''}
                  />
                  {errors.zipCode && (
                    <span className="error-message">{errors.zipCode}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(614) 414-2693"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Radio Button Options Section */}
            <div className="form-section">
              <h3 className="form-section-title">Preferences</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="currentPolicy" className="currentPolicy">
                    Do You Currently Have a Policy With Us?{' '}
                    <span className="required">*</span>
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="currentPolicy"
                        value="yes"
                        checked={formData.currentPolicy === 'yes'}
                        onChange={handleChange}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="currentPolicy"
                        value="no"
                        checked={formData.currentPolicy === 'no'}
                        onChange={handleChange}
                      />
                      <span>No</span>
                    </label>
                  </div>
                  {errors.currentPolicy && (
                    <span className="error-message">{errors.currentPolicy}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contactMethod" className="contactMethod">
                    Preferred Contact Method <span className="required">*</span>
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleChange}
                      />
                      <span>Email</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleChange}
                      />
                      <span>Phone</span>
                    </label>
                  </div>
                  {errors.contactMethod && (
                    <span className="error-message">{errors.contactMethod}</span>
                  )}
                </div>
              </div>
            </div>
            {/* Insurance Types Section */}
            <div className="form-section">
              <div className="form-group insurance-types">
                <label>
                  Type of Insurance <span className="required">*</span>
                </label>
                <p className="sub-label">
                  Tell us which type(s) of insurance you're looking for today.
                </p>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="insurance-health"
                      checked={formData.insuranceTypes.health}
                      onChange={handleChange}
                    />
                    <span className='label'>Health Insurance (Dental & Vision)</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="insurance-auto"
                      checked={formData.insuranceTypes.auto}
                      onChange={handleChange}
                    />
                    <span className='label'>Auto Insurance</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="insurance-homeowners"
                      checked={formData.insuranceTypes.homeowners}
                      onChange={handleChange}
                    />
                    <span className='label'>Homeowners Insurance</span>
                  </label>
                </div>
                {errors.insuranceTypes && (
                  <span className="error-message">{errors.insuranceTypes}</span>
                )}
              </div>
            </div>

            <div className="form-submit">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request a Quote'}
              </button>
              <p className="form-note">
                By submitting this form, you agree to be contacted by Your
                Insurance Services.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
