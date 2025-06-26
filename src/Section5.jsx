import React from "react";

const Section5 = () => {
  return (
    <div>
      <section class="bg-base-100 py-16 px-6 md:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 class="text-4xl font-bold text-green-600 mb-4">🌿 About Us</h2>
            <p class="text-base-content text-lg mb-6">
              We believe every home deserves a touch of green. Our mission is to
              make plant care easy, joyful, and accessible for everyone — from
              beginners to seasoned plant parents.
            </p>
            <ul class="space-y-2 text-base-content">
              <li>
                ✅ <span class="font-medium">Curated Plant Selection</span> –
                Handpicked healthy plants
              </li>
              <li>
                ✅ <span class="font-medium">Safe Delivery</span> – Securely
                packaged, fresh arrival
              </li>
              <li>
                ✅ <span class="font-medium">Smart Care Tracking</span> – Get
                watering & care reminders
              </li>
              <li>
                ✅ <span class="font-medium">Expert Guidance</span> – Tips and
                support from real plant lovers
              </li>
            </ul>
          </div>
          <div class="w-full">
            <img
              src="https://i.ibb.co/7dMhjgk8/image.png"
              alt="About Us Plant"
              class="rounded-2xl shadow-xl max-h-[400px] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
