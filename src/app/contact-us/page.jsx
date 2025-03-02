"use client";
import Squares from "@/components/Squares/Squares";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./page.css";
import Map from "@/components/Map";
import Card from "./Card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    // initial animation
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // scroll triggered animation
    gsap.fromTo(el, {opacity: 1, y: 0}, {
      opacity: 0,
      duration: 1,
      scale: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "bottom 10%", 
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div>
      <div className="relative">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#000"
          hoverFillColor="#222"
        />
        <div className="relative w-full px-5 pb-2 pt-32 mb-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>

        <div
          className="flex flex-wrap gap-x-4 gap-y-0 h-max items-center justify-center py-6"
          ref={ref}
        >
          <Card
            name={"John Doe"}
            email={"NkV1o@example.com"}
            phone={"123-456-7890"}
            designation={"President"}
          />
          <Card
            name={"John Doe"}
            email={"NkV1o@example.com"}
            phone={"123-456-7890"}
            designation={"Vice President"}
          />
          <Card
            name={"John Doe"}
            email={"NkV1o@example.com"}
            phone={"123-456-7890"}
            designation={"Product Manager"}
          />
          <Card
            name={"John Doe"}
            email={"NkV1o@example.com"}
            phone={"123-456-7890"}
            designation={"Tech Lead"}
          />
        </div>
      </div>

      <div
        className="px-8 py-10 rounded-t-3xl"
        style={{
          backgroundImage: "linear-gradient(to bottom, #181818 0%, black 40%)",
        }}
      >
        <div className="w-full mb-10 flex gap-10 items-center justify-center">
          <Link
            href="https://www.google.com"
            className=" hover:scale-110 duration-200 transition-transform"
          >
            <FaFacebook className="text-3xl text-blue-600 pointer-events-none" />
          </Link>
          <Link
            href="https://www.google.com"
            className=" hover:scale-110 duration-200 transition-transform"
          >
            <FaLinkedin className="text-3xl text-blue-500 pointer-events-none" />
          </Link>
          <Link
            href="https://www.google.com"
            className=" hover:scale-110 duration-200 transition-transform"
          >
            <FaInstagram className="text-3xl text-red-600 pointer-events-none" />
          </Link>
        </div>

        <div className="">
          <h3 className="m-auto w-max">1234 Main Street</h3>
          <h3 className="m-auto w-max">Your City, Your State</h3>
        </div>

        <div className="my-map mt-6 max-w-[1000px] w-[90%] m-auto h-[300px] bg-gray-300 rounded-xl">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default page;
