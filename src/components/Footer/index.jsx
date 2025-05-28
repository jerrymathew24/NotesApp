const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Notes App. All rights reserved.
      </p>
      <p className="text-xs mt-1">
        Built with ❤️ using React and Tailwind CSS by Jerry Mathew.
      </p>
    </footer>
  );
};

export default Footer;
