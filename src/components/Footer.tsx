const Footer = () => {
  return (
    <div className="w-full sm:h-20  bg-main bottom-0 grid grid-cols-2 p-2 text-xs border-t-2 border-black">
      <div className="flex flex-col font-semibold">
        <p>RYAN KUSUMA WEB PORTFOLIO</p>
        <p className="font-light">Copyright 2024</p>
      </div>
      <div className="flex flex-col items-start sm:items-end">
        <h1>Hubungi saya</h1>
        <li className="ms-3">kusuma.nayr@gmail.com</li>
        <li className="ms-3">(+62) 895-3209-87471</li>
      </div>
    </div>
  );
};

export default Footer;
