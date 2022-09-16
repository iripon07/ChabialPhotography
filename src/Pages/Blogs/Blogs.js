import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="mx-10">
        <div
          tabindex="0"
          class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div class="collapse-content">
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>SL. No.</th>
                    <th>Authentication</th>
                    <th>Authorization</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <th>1</th>
                    <td className="p-5"><p>In the authentication process, the identity of users are checked for providing the access to the system.</p></td>
                    <td><p>While in authorization process, a the person’s or user’s authorities are checked for accessing the resources.</p></td>
                    <td>Blue</td>
                  </tr>

                  <tr class="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
