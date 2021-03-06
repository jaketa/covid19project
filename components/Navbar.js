const Navbar = () => (
  <div>
    <div class="bg-black font-sans">
      <div class="container mx-auto px-4">
        <div class="flex items-center md:justify-between py-4">
          <div class="w-1/4 md:hidden">
            <svg
              class="fill-current text-white h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z" />
            </svg>
          </div>
          <div class="w-1/2 md:w-auto text-center text-white text-2xl font-medium">
           Social Distributing
          </div>
          <div class="w-1/4 md:w-auto md:flex text-right">
            <div class="hidden md:block md:flex md:items-center ml-2">
              <span class="text-white text-sm mr-1">Henry Helpme</span>
              <div class="mr-5">
                <svg
                  class="fill-current text-white h-4 w-4 block opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" />
                </svg>
              </div>
              <span class="text-white text-sm mr-1">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden bg-blue-dark md:block md:bg-white md:border-b font-sans">
      <div class="container mx-auto px-4">
        <div class="md:flex">
          <div class="flex -mb-px mr-8">
            <a
              href="#"
              class="no-underline text-black font-bold flex items-center py-4 border-b border-blue-dark"
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
