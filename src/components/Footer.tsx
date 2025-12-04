import { Facebook, Instagram, Twitter, Linkedin, PinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 gradient-text">Klaudey</div>
            <p className="text-sm text-muted-foreground mb-4">
              Experience the power of cloud services with Klaudey. Your journey
              to cloud excellence starts here.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded-md"
                data-testid="social-pinterest"
              >
                <PinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="footer-link-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="footer-link-services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="footer-link-about"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+971556848356"
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="footer-phone-us"
                >
                  +971 55 684 8356
                </a>
              </li>
              <li>
                <a
                  href="tel:+971556848356"
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="footer-phone-india"
                >
                  +971 55 684 8356
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@Klaudey.com"
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="footer-email"
                >
                  contact@Klaudey.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Global Headquarter</h3>
            <p className="text-sm text-muted-foreground mb-2">
              City Center
              <br />
              Abu Dhabi
            </p>
            <p className="text-sm text-muted-foreground">UAE</p>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            Copyright © OTS Solutions. 2024. All Rights Reserved. Klaudey ™ is A
            Registered Trademark Of OTS Solutions Inc.
          </p>
          <p className="mt-2">
            <a
              href="#"
              className="hover:text-foreground"
              data-testid="footer-privacy"
            >
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
