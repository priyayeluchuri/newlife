import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import SermonCard from '../components/SermonCard';
import EventCard from '../components/EventCard';
import PrayerForm from '../components/PrayerForm';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-text-primary">
          Recent Sunday Sermons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SermonCard
            date="May 18, 2025"
            videoUrl="https://www.youtube.com/embed/VIDEO_ID_1" // Replace with real YouTube embed URL
          />
          <SermonCard
            date="May 11, 2025"
            videoUrl="https://www.youtube.com/embed/VIDEO_ID_2" // Replace with real YouTube embed URL
          />
          <SermonCard
            date="May 4, 2025"
            videoUrl="https://www.youtube.com/embed/VIDEO_ID_3" // Replace with real YouTube embed URL
          />
        </div>
      </section>
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 bg-light-gray-green">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-text-primary">
          Join Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title="Friday Night Service"
            time="7:00 PM"
            location="New Life Church"
          />
          <EventCard
            title="Sunday Morning Service"
            time="10:00 AM"
            location="New Life Church"
          />
          <EventCard
            title="Sunday Free Lunch"
            time="12:00 PM"
            location="Church Hall"
          />
        </div>
      </section>
      <PrayerForm />
      <section className="container mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-text-primary">
          Give to Our Mission
        </h2>
        <p className="text-base sm:text-lg text-center mb-6 text-text-primary max-w-2xl mx-auto">
          Your generosity helps us spread kindness and love in our community.
        </p>
        <div className="text-center">
          <a
            href="https://paypal.me/newlifechurch" // Replace with your donation link
            className="bg-peaceful-blue text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#3A80D2] text-base sm:text-lg"
          >
            Give Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
