     import Link from 'next/link';

     export default function SermonCard({ title, date, speaker, videoUrl = "#" }) {
       return (
         <Link
           href={videoUrl}
           className="block bg-white shadow-lg rounded-lg p-6 mx-2 sm:mx-4 hover:shadow-xl transition-shadow"
         >
           <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">{title}</h3>
           <p className="text-text-primary opacity-70 text-sm sm:text-base mb-2">
             {date} | {speaker}
           </p>
           <span className="text-warm-coral hover:underline text-sm sm:text-base">Watch Now</span>
         </Link>
       );
     }
