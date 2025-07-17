import { FaFacebook, FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-6">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} Dr. Zohaib Buzdar. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        <a
          href="https://www.facebook.com/share/16pd8TTWae/?mibextid=qi2Omg"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300 flex items-center gap-2"
        >
          <FaFacebook size={20} />
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/dr-zohaib-buzdar-2a5345259"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition duration-300 flex items-center gap-2"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://www.tiktok.com/@dr.zohaibbuzdaroffical"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-400 transition duration-300 flex items-center gap-2"
        >
          <FaTiktok size={20} />
          TikTok
        </a>
        <a
          href="https://www.instagram.com/dr._zohaib_buzdar"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-400 transition duration-300 flex items-center gap-2"
        >
          <FaInstagram size={20} />
          Instagram
        </a>
      </div>

      <p className="mt-4 text-sm md:text-base">
        Contact: 03188860057 / 03376132219
      </p>
    </footer>
  );
}
