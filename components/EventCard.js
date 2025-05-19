export default function EventCard({ title, time, location }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-primary text-sm sm:text-base">
        <strong>{time}</strong> | {location}
      </p>
    </div>
  );
}

