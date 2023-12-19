import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

// import { FaRegHandScissors } from "react-icons/fa";
import { GiSundial } from "react-icons/gi";

// TODO: Make the speed of the navbar faster

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const Links = [
    { title: "home", href: "/" },
    { title: "docs", href: "/" },
    { title: "explorer", href: "/" },
    { title: "discord", href: "/" },
  ];

  return (
    <header className="flex items-center justify-between py-5">
      <a
        href="/"
        className="flex items-center gap-2 text-xl font-bold md:text-2xl"
      >
        <span>
          <GiSundial className="text-[#13E898] text-4xl" />
        </span>
        <span>Srcful</span>
      </a>
      <nav>
        <ul className="hidden md:flex items-center">
          <li className="flex items-center">
            {Links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-md flex p-4 capitalize hover:text-green-400"
              >
                {link.title}
              </a>
            ))}
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost">
            <motion.a
              initial="hide"
              animate={mobileNav ? "show" : "hide"}
              onClick={toggleMobileNav}
              className="relative z-50 flex flex-col space-y-1 md:hidden"
            >
              {mobileNav ? (
                <RxCross1 size={25} />
              ) : (
                <RxCross1
                  size={25}
                  className="rotate-180 transition-all duration-500"
                />
              )}
            </motion.a>
          </Button>
        </div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "100%",
                  },
                  show: {
                    x: "0%",
                    transition: {
                      bounce: 0.5,
                      when: "beforeChildren",
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 flex flex-col justify-center space-y-10 p-6 lg:hidden bg-white dark:bg-black z-10"
              >
                <ul className="list-none space-y-6">
                  <motion.li
                    variants={{
                      hide: {
                        x: "50%",
                        opacity: 0,
                      },
                      show: {
                        x: "0%",
                        opacity: 1,
                      },
                    }}
                  >
                    {Links.map((link, index) => (
                      <motion.a
                        variants={{
                          hide: {
                            x: "100%",
                            opacity: 0,
                          },
                          show: (index) => ({
                            x: "0%",
                            opacity: 1,
                            transition: {
                              delay: index * 0.5,
                              bounce: 0.5,
                              when: "beforeChildren",
                            },
                          }),
                        }}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        custom={index}
                        href={link.href}
                        key={index}
                        onClick={toggleMobileNav}
                        className="flex items-start text-4xl tracking-widest font-semibold capitalize"
                      >
                        {link.title}
                      </motion.a>
                    ))}
                  </motion.li>
                </ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
