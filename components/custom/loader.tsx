"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { MoveRight, CircleXIcon } from "lucide-react";

const loadingStates = [
  {
    text: "Lorem ipsum dolor",
  },
  {
    text: "Consectetur adipiscing elit",
  },
  {
    text: "Vestibulum ante ipsum",
  },
  {
    text: "Cras eu eros nisi",
  },
  {
    text: "Sed tempor elit",
  },
  {
    text: "Morbi fringilla dolor",
  },
  {
    text: "Curabitur posuere nisl",
  },
  {
    text: "Suspendisse potenti nunc",
  },
];


export default function StepLoader() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="group flex cursor-pointer items-center text-primary"
      >
        <a href="#demo">
        Get a demo
            <MoveRight
              className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              strokeWidth={1}
            />
        </a>
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
        <CircleXIcon/>
        </button>
      )}
    </div>
  );
}
