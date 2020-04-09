import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8 font-sans">
        <div class="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
          <div class="border-b px-6 bg-black">
            <div class="flex justify-between -mb-px">
              <div class="hidden lg:flex">
                <button
                  type="button"
                  class="appearance-none py-4 text-gray-100 border-b border-red mr-6"
                >
                  Open Requests
                </button>
                <button
                  type="button"
                  class="appearance-none py-4 text-gray-500 border-b border-transparent hover:border-grey-dark mr-6"
                >
                  Request History
                </button>
              </div>
            </div>
          </div>

          <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-grey inline-flex mr-3">
                    <svg
                      class="fill-current text-white h-8 w-8 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 38"
                    >
                      <g fill-rule="evenodd">
                        <path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path>
                      </g>
                    </svg>
                  </div>
                  <span class="font-bold">Requested Item 2</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-grey h-2 w-2 rounded-full mr-2"></div>
                  Claimed 03/26/2020
                </div>
                <div class="flex w-3/5 md:w/12 items-center">
                  <div class="w-1/2 px-4">
                    <div class="text-right">New</div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      <button class="bg-red-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Unclaim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-grey inline-flex mr-3">
                    <svg
                      class="fill-current text-white h-8 w-8 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 38"
                    >
                      <g fill-rule="evenodd">
                        <path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path>
                      </g>
                    </svg>
                  </div>
                  <span class="font-bold">Requested Item 2</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-grey h-2 w-2 rounded-full mr-2"></div>
                  Claimed 03/26/2020
                </div>
                <div class="flex w-3/5 md:w/12 items-center">
                  <div class="w-1/2 px-4">
                    <div class="text-right">In Process</div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      <button class="bg-red-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Unclaim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div
          class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <strong class="font-bold">Hey! </strong>
          <span class="block sm:inline">
            You can have only two open requests at any given time. To claim a
            new item, you must first release one item from your queue.
          </span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-blue-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full mb-6 lg:mb-0 px-4 flex flex-col">
            <div class="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div class="border-b">
                <div class="flex justify-between px-6 -mb-px bg-gray-300">
                  <h3 class="text-black py-4 font-normal text-lg">Unclaimed</h3>
                </div>
              </div>
              <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-grey inline-flex mr-3">
                    <svg
                      class="fill-current text-white h-8 w-8 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 38"
                    >
                      <g fill-rule="evenodd">
                        <path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path>
                      </g>
                    </svg>
                  </div>
                  <span class="font-bold">Available Item 1</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-grey h-2 w-2 rounded-full mr-2"></div>
                  Added 04/02/2020
                </div>
                <div class="flex w-3/5 md:w/12 items-center">
                  <div class="w-1/2 px-4">
                    <div class="text-right">by Provider A</div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      <button class="bg-green-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-grey inline-flex mr-3">
                    <svg
                      class="fill-current text-white h-8 w-8 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 38 38"
                    >
                      <g fill-rule="evenodd">
                        <path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path>
                      </g>
                    </svg>
                  </div>
                  <span class="font-bold">Available Item 2</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-grey h-2 w-2 rounded-full mr-2"></div>
                  Added 03/26/2020
                </div>
                <div class="flex w-3/5 md:w/12 items-center">
                  <div class="w-1/2 px-4">
                    <div class="text-right">by Provider B</div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      <button class="bg-green-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <div class="rounded-full bg-indigo inline-flex mr-3">
                    <svg
                      class="fill-current text-white h-8 w-8 block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <g fill-rule="evenodd">
                        <path d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z"></path>
                      </g>
                    </svg>
                  </div>
                  <span class="font-bold">Available Item 3</span>
                </div>
                <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                  <div class="bg-indigo h-2 w-2 rounded-full mr-2"></div>
                  Added 03/26/2020
                </div>
                <div class="flex w-3/5 md:w/12 items-center">
                  <div class="w-1/2 px-4">
                    <div class="text-right">by Provider C</div>
                  </div>
                  <div class="w-1/2 px-4">
                    <div class="text-right text-grey">
                      <button class="bg-green-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-6 py-4 bg-gray-100">
                <div class="text-center text-gray-500">Load More...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
