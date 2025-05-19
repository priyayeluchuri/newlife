import { useState } from 'react';
import axios from 'axios';

export default function PrayerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    const formData = new FormData(e.target);
    try {
      await axios.post('/', formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission failed:', err);
      setError('Failed to submit prayer request. Please try again.');
    }
  };

  if (submitted) {
    return (
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-text-primary">
          Thank You for Your Prayer Request
        </h2>
        <p className="text-base sm:text-lg mb-6 text-text-primary max-w-2xl mx-auto">
          We have received your request and will keep you in our prayers.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-peaceful-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3A80D2] text-base sm:text-lg"
        >
          Submit Another Prayer
        </button>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-text-primary">
        Submit a Prayer Request
      </h2>
      {error && (
        <p className="text-red-500 text-center mb-4 text-sm sm:text-base">
          {error}
        </p>
      )}
      <form
        name="prayer-request"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input type="hidden" name="form-name" value="prayer-request" />
        <input type="text" name="bot-field" className="hidden" />
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base text-text-primary mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full p-2 border rounded text-sm sm:text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm sm:text-base text-text-primary mb-1">
            Prayer Request
          </label>
          <textarea
            name="reason"
            id="reason"
            placeholder="Your Prayer Request"
            className="w-full p-2 border rounded text-sm sm:text-base"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm sm:text-base text-text-primary mb-1">
            Contact (Optional)
          </label>
          <input
            type="email"
            name="contact"
            id="contact"
            placeholder="Email or Phone"
            className="w-full p-2 border rounded text-sm sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="bg-peaceful-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3A80D2] text-sm sm:text-base"
        >
          Submit Prayer
        </button>
      </form>
    </section>
  );
}
