import React from "react";
import Navbar from "../components/Navbar";

const statisticsData = [
  {
    year: "2023-24",
    asOf: "4th July 2024",
    stats: [
      { title: "Number of recruiters visited", value: "110*" },
      { title: "Total Placement offers", value: "408*" },
      { title: "Highest Salary", value: "14.5 LPA*" },
      { title: "Total placed", value: "393*" },
    ],
    note: "* still counting...2024.",
  },
  {
    year: "2022-23",
    stats: [
      { title: "Total companies visited", value: "96" },
      { title: "Total number of offers", value: "529" },
      { title: "Highest Salary", value: "29 LPA" },
      { title: "Total placed", value: "503" },
    ],
  },
  {
    year: "2021-22",
    stats: [
      { title: "Total companies visited", value: "114" },
      { title: "Total number of offers", value: "775" },
      { title: "Highest Salary", value: "29.25 LPA" },
      { title: "Total placed", value: "623" },
    ],
  },
  {
    year: "2020-21",
    stats: [
      { title: "Total companies visited", value: "94" },
      { title: "Total number of offers", value: "630" },
      { title: "Highest Salary", value: "22 LPA" },
      { title: "Total placed", value: "492" },
    ],
  },
  {
    year: "2019-20",
    stats: [
      { title: "Total companies visited", value: "95" },
      { title: "Total number of offers", value: "604" },
      { title: "Highest Salary", value: "14 LPA" },
      { title: "Total placed", value: "498" },
    ],
  },
  {
    year: "2018-19",
    stats: [
      { title: "Total companies visited", value: "79" },
      { title: "Total number of offers", value: "687" },
      { title: "Highest Salary", value: "15.9 LPA" },
      { title: "Total placed", value: "572" },
    ],
  },
  {
    year: "2017-18",
    stats: [
      { title: "Total companies visited", value: "52" },
      { title: "Total number of offers", value: "597" },
      { title: "Highest Salary", value: "16 LPA" },
      { title: "Total placed", value: "549" },
    ],
  },
  {
    year: "2016-17",
    stats: [
      { title: "Total companies visited", value: "51" },
      { title: "Total number of offers", value: "583" },
      { title: "Highest Salary", value: "16 LPA" },
      { title: "Total placed", value: "513" },
    ],
  },
];

const colors = [
  "bg-red-400 text-black",
  "bg-green-400 text-black",
  "bg-blue-400 text-black",
  "bg-yellow-400 text-black",
];

export default function PlacementStatistics() {
  return (
    <div className="bg-gray-100 py-8 overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      {statisticsData.map((data, index) => (
        <div key={index} className="mb-12 mt-5 px-4">
          <h2 className="text-center text-2xl font-bold mb-2 text-blue-800">
            {data.year} Statistics
          </h2>
          <hr className="border-t-1 border-gray-300 mb-4 mx-auto w-1/2" />

          {data.asOf && (
            <p className="text-center text-sm text-gray-500 mb-4">
              (As on {data.asOf})
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`${
                  colors[idx % 4]
                } shadow-lg p-6 flex flex-col justify-center items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)] h-40 rounded-lg`}
              >
                <h3 className="text-lg font-medium text-center">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          {data.note && (
            <p className="text-center text-red-600 text-sm mt-4">{data.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}