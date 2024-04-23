import React from "react";
import EnquiryList from "../components/EnquiryList";
import useAuth from "../../hooks/useAuth";
import { config } from "../../../constant";
import { useFetchQuery } from "../../hooks/useFetchQuery";
const URL = config.url;

const Enquiry = () => {
  const { token } = useAuth();
  const url = `${URL}/api/getdata/getenquiries/?authTocken=${encodeURIComponent(
    token
  )}`;
  const [enquiries, loading, error] = useFetchQuery(url);
  function formatDate(date) {
    var newdate = new Date(date);
    var day = newdate.getDate();
    var month = newdate.getMonth() + 1;
    var year = newdate.getFullYear();
    var newdate = day + "-" + month + "-" + year;
    return newdate;
  }
  return (
    <div className="p-2 md:p-4">
      {loading ? (
        <p className="tetx-lg font-medium text-center">Loading...</p>
      ) : (
        <EnquiryList enquiries={enquiries} />
      )}
    </div>
  );
};

export default Enquiry;
