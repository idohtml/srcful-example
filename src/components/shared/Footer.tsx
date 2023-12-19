import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { GiSundial } from "react-icons/gi";
import {
  FaStackOverflow,
  FaDiscord,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <GiSundial className="text-green-400 text-4xl" />
            <p>Srcful</p>
          </div>
          <p className="flex flex-col mt-2 mb-4">
            Sign-up to our newsletter today
          </p>
          <input
            className="p-2 rounded-l-md -mr-1"
            type="email"
            placeholder="Enter your email"
          />
          <Button className="bg-green-400 hover:bg-green-600">Sign Up</Button>
        </div>

        <div>
          <h2 className="mb-4 text-xl text-green-400">Development</h2>
          <ul>
            <li>
              <a className="hover:text-green-400" href="/">
                Documentation
              </a>
            </li>
            <li>
              <a className="hover:text-green-400" href="/">
                API Playground
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl text-green-400">Community</h2>
          <ul>
            <li className="flex gap-2 items-center">
              <FaStackOverflow className="text-xl" />
              <a
                className="hover:text-green-400"
                target="_blank"
                href="https://stackoverflow.com/"
              >
                Stack Overflow
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaDiscord className="text-xl" />
              <a
                className="hover:text-green-400"
                target="_blank"
                href="https://discord.com/"
              >
                Discord
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaTwitter className="text-xl" />
              <a
                className="hover:text-green-400"
                target="_blank"
                href="https://twitter.com/"
              >
                Twitter
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaGithub className="text-xl" />
              <a
                className="hover:text-green-400"
                target="_blank"
                href="https://github.com/"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl text-green-400">More</h2>
          <ul>
            <li>
              <a className="hover:text-green-400" href="#">
                Web
              </a>
            </li>
            <li>
              <a className="hover:text-green-400" href="#">
                Explorer
              </a>
            </li>
            <li>
              <a className="hover:text-green-400" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full mt-12 mb-8">
        <Separator className="mb-8" />
        <p>&copy; 2345 Srcful:showcase. All rights reserved.</p>
      </div>
    </footer>
  );
}
