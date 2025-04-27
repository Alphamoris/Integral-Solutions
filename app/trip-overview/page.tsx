import React from "react";
import { ArrowRight, Clock, Users, Calendar, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

export default function TripOverview() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <div className="max-w-md mx-auto px-5 py-6">
        {/* Header with profile */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
            <p className="text-gray-400">Ready for the trip?</p>
          </div>
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
            C
          </div>
        </div>

        {/* Main trip card - MODIFIED: increased size and moved title to top */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-3">Your Upcoming Trip</h2>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
            <img
              src="/p1.png"
              alt="Tokyo Skyline"
              className="w-full h-100 object-cover"
            />
            <div className="absolute top-4 right-4 z-20">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>

            <div className="absolute top-4 left-4 z-20">
              <h3 className="text-4xl font-bold tracking-wide text-white mb-1">TOKYO</h3>
              <p className="text-gray-200 text-sm">27.01.2025 - 02.02.2025</p>
            </div>
            <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
              <div className="flex justify-between mt-2">
                <div className="flex items-center space-x-1">
                  <Clock className="w-6 h-6 p-1 text-green-200 bg-gray-500 rounded-full" />
                  <div className="space-y-0">
                    <p className="text-xs text-white">8 Days</p>
                    <p className="text-xs text-gray-400 ">Duration</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-6 h-6 p-1 text-green-200 bg-gray-500 rounded-full" />
                  <div className="space-y-0">
                    <p className="text-xs text-white">4 (2M,2F)</p>
                    <p className="text-xs text-gray-400 ">Group Size</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-6 h-6 text-green-200 bg-gray-500 rounded-full p-1" />
                  <div className="space-y-0">
                    <p className="text-xs text-white">14</p>
                    <p className="text-xs text-gray-400">Activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight details */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-medium"></h2>
            <Link href="/flights" className="text-xs text-blue-500 me-4">See all</Link>
          </div>
          <div className="relative bg-blue-600 rounded-2xl p-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/p2.png" alt="Flight pattern" className="object-cover w-full h-full " />
            </div>
            <div className="relative z-10">
              <p className="text-white text-xl font-bold">Flight Details</p>
              <p className="text-white text-md mb-2">26.01.2025, 10:50 am</p>
              <div className="flex items-center justify-between mt-14">
                <div className="text-white text-lg font-medium">DEL</div>
                <div className="flex-1 flex items-center justify-center px-4">
                  <div className="w-full h-[1px] bg-blue-400"></div>
                  <ArrowRight className="text-white mx-2" />
                </div>
                <div className="text-white text-lg font-medium">NRT</div>
              </div>
              <div className="flex justify-between">
                <div className="text-xs text-gray-200">Delhi, India</div>
                <div className="text-xs text-gray-200">Narita, Tokyo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-medium">Accomodation</h2>
            <Link href="/accommodations" className="text-xs text-blue-500">See all</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src="/a1.png"
                  alt="Shinagawa Prince Hotel"
                  className="h-24 w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-600 rounded px-1.5 py-0.5 flex items-center">
                  <Star className="w-3 h-3 fill-white text-white mr-1" />
                  <span className="text-xs text-white">5.0 Very Good</span>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium mb-1">Shinagawa Prince Hotel</h3>
                <p className="text-xs text-gray-400 mb-1">Check in: 26.01.2025, 11:15 pm</p>
                <p className="text-xs text-gray-400 mb-1">Check out: 28.01.2025, 11:15 am</p>
                <p className="text-xs mb-1">2 Nights</p>
                <div className="mt-1 px-1 py-0.5 bg-green-800/30 rounded w-fit">
                  <span className="text-[10px] text-green-400">Confirmed</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src="/a2.png"
                  alt="Mercure Tokyo Hotel"
                  className="h-24 w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-600 rounded px-1.5 py-0.5 flex items-center">
                  <Star className="w-3 h-3 fill-white text-white mr-1" />
                  <span className="text-xs text-white">4.1 Very Good</span>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium mb-1">Mercure Tokyo Hotel</h3>
                <p className="text-xs text-gray-400 mb-1">Check in: 28.01.2025, 6:00 pm</p>
                <p className="text-xs text-gray-400 mb-1">Check out: 30.01.2025, 11:15 am</p>
                <p className="text-xs mb-1">2 Nights</p>
                <div className="mt-1 px-1 py-0.5 bg-orange-800/30 rounded w-fit">
                  <span className="text-[10px] text-orange-400">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-medium">Activities</h2>
            <Link href="/activities" className="text-xs text-blue-500">See all</Link>
          </div>

          <div className="flex space-x-2 mb-3">
            <div className="bg-lime-300 text-black px-3 py-1 rounded-full text-sm font-medium">
              Day Plan
            </div>
            <div className="bg-zinc-800 text-white px-3 py-1 rounded-full text-sm font-medium">
              14 Activities
            </div>
          </div>

          {/* Calendar */}
          <div className="flex space-x-2 overflow-x-auto pb-2 mb-3">
            <div className="flex flex-col items-center bg-lime-300 rounded-lg p-1 min-w-14">
              <span className="text-[10px] text-black font-medium">JAN</span>
              <span className="text-xs text-black font-bold">27</span>
              <span className="text-[10px] text-black font-medium">MON</span>
            </div>

            {["TUE", "WED", "THU", "FRI", "SAT"].map((day, i) => (
              <div key={i} className="flex flex-col items-center bg-zinc-800 rounded-lg p-1 min-w-14">
                <span className="text-[10px] text-gray-400">JAN</span>
                <span className="text-xs text-white">{28 + i}</span>
                <span className="text-[10px] text-gray-400">{day}</span>
              </div>
            ))}

            <div className="flex flex-col items-center bg-zinc-800 rounded-lg p-1 min-w-14">
              <span className="text-[10px] text-gray-400">FEB</span>
              <span className="text-xs text-white">2</span>
              <span className="text-[10px] text-gray-400">SUN</span>
            </div>
          </div>

          <div className="py-2">
            <div className="text-sm mb-2">
              <span className="bg-lime-300 text-black px-2 py-0.5 rounded mr-2">Day 1</span>
              <span className="text-white">27.01.2025</span>
              <span className="text-lime-300 ml-2">3 Activities</span>
            </div>

            <div className="space-y-2">
              {/* Activity 1 */}
              <div className="bg-zinc-900 rounded-xl p-3">
                <div className="flex space-x-3">
                  <img
                    src="/p3.png"
                    alt="Senso-ji Temple"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Senso-ji Temple & Nakamise Shopping Street</h3>
                    <p className="text-white text-xs mt-1">Senso-ji</p>
                    <div className="mt-1">
                      <p className="text-xs text-gray-400">Timing: 8:15 am Morning</p>
                      <p className="text-xs text-gray-400">Duration: 3 hours</p>
                      <p className="text-xs text-gray-400">Pick up: From Hotel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity 2 */}
              <div className="bg-zinc-900 rounded-xl p-3">
                <div className="flex space-x-3">
                  <img
                    src="/p4.png"
                    alt="Tokyo Sky Tree"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Tokyo Sky Tree</h3>
                    <div className="mt-1">
                      <p className="text-xs text-gray-400">Timing: 1:00 pm Afternoon</p>
                      <p className="text-xs text-gray-400">Duration: 3 hours</p>
                      <p className="text-xs text-gray-400">Pick up: From Nakamise Street</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity 3 */}
              <div className="bg-zinc-900 rounded-xl p-3">
                <div className="flex space-x-3">
                  <img
                    src="/p5.png"
                    alt="Kimono Wearing"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Kimono Wearing</h3>
                    <div className="mt-1">
                      <p className="text-xs text-gray-400">Timing: Anytime before 8:00pm</p>
                      <p className="text-xs text-gray-400">Duration: 1-2 hours</p>
                      <p className="text-xs text-gray-400">Pick up: From Hotel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}