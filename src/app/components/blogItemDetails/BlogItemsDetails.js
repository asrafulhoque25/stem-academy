export default function BlogItemsDetails() {
  return (
      <div className="blogItemDetails">
          <div className="bg-[#F6F9FF] py-8">
              <div className="container">
                  <nav class="flex" aria-label="Breadcrumb">
                      <ol class="inline-flex items-center space-x-1 md:space-x-3">
                          <li class="inline-flex items-center">
                              <a href={"/"} class="inline-flex items-center text-lg font-semibold text-[#3BAFDD] hover:text-dark5 ">
                                  Home
                              </a>
                          </li>
                          <li>
                              <div class="flex items-center pl-2">
                                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M1.4248 14.6L6.85814 9.16669C7.49981 8.52502 7.49981 7.47503 6.85814 6.83336L1.4248 1.40002"
                                          stroke="#3BAFDD"
                                          stroke-width="1.5"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                      />
                                  </svg>

                                  <a href={"/about"} class="inline-flex ml-5 items-center text-lg font-semibold text-[#3BAFDD] hover:text-dark5">
                                      Blog
                                  </a>
                              </div>
                          </li>
                          <li>
                              <div class="flex items-center pl-2">
                                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M1.4248 14.6L6.85814 9.16669C7.49981 8.52502 7.49981 7.47503 6.85814 6.83336L1.4248 1.40002"
                                          stroke="#3BAFDD"
                                          stroke-width="1.5"
                                          stroke-miterlimit="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                      />
                                  </svg>

                                  <a href={"/destination"} class="ml-5 text-lg font-semibold text-dark2 hover:text-dark5">
                                      Blog Details
                                  </a>
                              </div>
                          </li>
                      </ol>
                  </nav>
              </div>
          </div>
          <div className="blogDetailWrap py-24">
            <div className="grid">
              <div className="blogDetailsLeft">

              </div>
            </div>
          </div>
      </div>
  );
}
