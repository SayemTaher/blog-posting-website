import React from 'react';
import "animate.css";
const BlogReview = () => {
    return (
      <div className="mt-10 mb-10 border-t-2 border-dashed border-blue-100 pt-5 ">
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-10 mx-auto">
            <div class="mt-6 md:flex md:items-center md:justify-between">
              <div>
                <h1 class="text-2xl font-semibold animate__animated animate__bounceInLeft --animate-delay: 0.5s; text-gray-800 capitalize lg:text-3xl dark:text-white">
                  What our <span className="text-blue-500">USERS</span> are
                  saying
                </h1>

                <div class="flex mx-auto mt-6">
                  <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                  <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
              </div>

              <div class="flex justify-between mt-8 md:mt-0">
                <button
                  title="left arrow"
                  class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section class="grid grid-cols-1 animate__animated --animate-delay: 0.5s; animate__fadeInRightBig gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
              <div class="p-8 border flex flex-col justify-between rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “As a student with a passion for learning and sharing ideas,
                  I've found my haven at PostHeat Blog Hub. This vibrant
                  platform not only allows me to explore a myriad of topics but
                  also encourages me to express my thoughts and insights through
                  engaging blog posts.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">
                      Jonathon William
                    </h1>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      Student
                    </span>
                  </div>
                </div>
              </div>

              <div class="p-8 bg-blue-500 border flex flex-col justify-between border-transparent rounded-lg dark:bg-blue-600">
                <p class="leading-loose text-white">
                  “As a dedicated blogger committed to sharing my unique voice
                  with the world, I've found a home at PostHeat Blogs. This
                  dynamic platform offers me the freedom to unleash my
                  creativity, explore diverse topics, and engage with a
                  receptive audience. ”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-white">Jeny Rood</h1>
                    <span class="text-sm text-blue-200">Blogger</span>
                  </div>
                </div>
              </div>

              <div class="p-8 border flex flex-col justify-between rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “As a marketing manager striving to maximize brand visibility
                  and engagement, I've discovered a powerful ally in the
                  PostHeat Blog Network. This dynamic platform offers
                  unparalleled opportunities for brands to connect with target
                  audiences, share compelling content, and drive meaningful
                  interactions.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">
                      Ema Stone{" "}
                    </h1>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      Marketing Manager
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
};

export default BlogReview;