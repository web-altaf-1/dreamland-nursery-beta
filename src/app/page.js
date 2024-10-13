

export default function Home() {
  return (
    <div>
      <header class="hidden lg:block">
        <div class="flex justify-around  border-b text-sm py-2">
          <p>Call us: +88 01629189677</p>
          <p>Free Delivery Charge on all orders over ৳2000.00</p>
          <p>Visit Our Facebook Page</p>
        </div>
        {/* <div class="flex justify-around p-5">

          <div class="bg-gray-100 flex px-3 rounded w-1/3">
            <div class="flex items-center gap-3 " style="width: 100% !important;">
              <i class="fas fa-search"></i>
              <input class="bg-gray-100 w-full" type="text" placeholder="Search Products"/>
            </div>

          </div>
          <div class="flex">
            <div class="border-r px-5 pt-2 cursor-pointer">
              <svg style="width: 24px;display: flex;margin: auto; " xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
              My Account
            </div>
            <div class=" px-5 pt-2 cursor-pointer">
              <svg style="width: 24px;display: flex;margin: auto; " xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
              Customer Help
            </div>
          </div>
        </div> */}
        <div class="flex items-center justify-between py-3 px-5" style={{ backgroundColor: '#3d3d3d' }}>
          <div class="ms-5 logo ">
            <img class="header-logo w-16 rounded-full" src="/images/dreamland.webp" alt="" />
          </div>
          <div class="menu-primary-menu-container ">
            <ul class="menu flex text-white gap-5 p-3">
              <li id="nav-menu-item-7265" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="" class="cg-menu-link main-menu-link"><span>Home</span></a>
              </li>
              <li id="nav-menu-item-7266" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="" class="cg-menu-link main-menu-link"><span>About Us</span></a>
              </li>
              <li id="nav-menu-item-7267" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="" class="cg-menu-link main-menu-link"><span>Contact Us</span></a>
              </li>
              <li id="nav-menu-item-7268" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="" class="cg-menu-link main-menu-link"><span>Soil Food</span></a>
              </li>
              <li id="nav-menu-item-7269" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="" class="cg-menu-link main-menu-link"><span>Packages</span></a>
              </li>
              <li id="nav-menu-item-9810" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="" class="cg-menu-link main-menu-link"><span>Mali Service Center</span></a>
              </li>
              <li id="nav-menu-item-7271" class="menu-item menu-item-type-post_type menu-item-object-page"><a
                href="" class="cg-menu-link main-menu-link"><span>Shop (All Products)</span></a></li>
            </ul>
          </div>
        </div>
        <div class="bg-[#7b8f36] text-white font-semibold py-1">
          <p class="text-center">Flash sale unlocked ⚡10% off with Fruits Trees</p>
        </div>
      </header>
    </div>
  );
}
