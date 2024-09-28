import { Globe } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import weareon from "../public/images/trip-advisor/were-on.jpeg";
import qrcode from "../public/images/trip-advisor/qr-code.jpeg";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-warm-terracotta text-white py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="socials flex flex-col gap-2 ">
              <h3 className="text-xl text-white font-bold">
                Follow Us on Social Media
              </h3>
              <span className="flex gap-2 items-center">
                <FaInstagram />
                ghexplorexperts
              </span>
              <span className="flex gap-2 items-center">
                <FaFacebookF />
                ghexplorexperts
              </span>
              <span className="flex gap-2 items-center">
                <FaTwitter />
                ghexplorexperts
              </span>
              <span className="flex gap-2 items-center">
                <FaWhatsapp />
                +233 20 111 3004
              </span>
              <p className="leading-tight">
                Follow us for the latest updates, offers, and travel
                inspiration!
              </p>
            </div>
            <div className="qr flex h-full items-center justify-center">
              <div>
                <Image
                  src={weareon}
                  width={97}
                  height={140}
                  alt="trip-advisor"
                />
              </div>
              <div>
                <Image
                  src={qrcode}
                  width={140}
                  height={140}
                  alt="trip-advisor"
                />
              </div>
            </div>
            <div className="contact flex flex-col  gap-2 ">
              <h3 className="text-xl text-white font-bold">
                Contact Us for Bookings
              </h3>
              <span className="flex gap-2">
                <Phone />
                +233 20 111 3004
              </span>
              <span className="flex gap-2">
                <Mail />
                ghexplorexperts@gmail.com
              </span>
              <span className="flex gap-2">
                <Globe />
                ghexplorexperts.com
              </span>
            </div>
            <div className="btn absolute bottom-0 right-0">
              <Link href="#hero" passHref>
                <Button>
                  <ArrowUp />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t bg-warm-terracotta text-white">
        <div className="container mx-auto flex justify-between px-4 md:px-8 py-3">
          <p>&copy; {new Date().getFullYear()} Ghana Explore eXpert (GEX)</p>
          <p>Terms & Conditions Apply</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
