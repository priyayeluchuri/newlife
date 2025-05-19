export default function EventCard({ title, date, location }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-4">
      <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{title}</h3>
      <p className="text-text-primary opacity-70 text-sm sm:text-base">{date} | {location}</p>
      <a href="#" className="text-warm-coral hover:underline text-sm sm:text-base">Learn More</a>
    </div>
  );
}
