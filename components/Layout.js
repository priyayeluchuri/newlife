import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-soft-white">
      <Nav />
      <main className="flex-grow">{children}</main>
      <footer className="bg-text-primary text-white p-4 text-center">
        <p className="text-sm sm:text-base">© 2025 New Life Church. All rights reserved.</p>
        <p className="text-sm sm:text-base">Contact: newlifekkd@gmail.com | (+91) 9963709963</p>
        <a
          href="https://paypal.me/newlifechurch" // Replace with your donation link
          className="text-warm-coral hover:underline text-sm sm:text-base"
        >
          Give to Support Our Mission
        </a>
      </footer>
    </div>
  );
}
