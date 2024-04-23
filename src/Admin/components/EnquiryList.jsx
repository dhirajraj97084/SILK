import React, { useState } from "react";
import ButtonModal from "./ButtonModal";

const EnquiryList = ({enquiries}) => {
  
    function formatDate(date) {
      var newdate = new Date(date);
      var day = newdate.getDate();
      var month = newdate.getMonth() + 1;
      var year = newdate.getFullYear()
      var newdate = day + "-" + month + "-" + year;
      return newdate
    } 
  return (
    <div>
      <p className="text-2xl font-semibold">Enquiries</p>
      <div className="p-4">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-0 sm:px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="hidden sm:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {enquiries.map((enquiry, index) => (
                  <tr key={`enquiries-${index}`}>
                    <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {enquiry.name}
                    </td>
                    <td className="px-0 sm:px-2 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {enquiry.email}
                    </td>
                    <td className="hidden sm:block px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {formatDate(enquiry.datetime)}
                    </td>
                    <td className="px-2 sm:px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <ButtonModal className="text-blue-500 hover:text-blue-700" data={enquiry} dataType="enquiry">
                        view
                      </ButtonModal>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EnquiryList;
