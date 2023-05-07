import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/DoctorList.css';
import { Avatar, Button } from "antd";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-3">
        <div className="card m-2" style={{ cursor: "pointer", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }} onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>
          <div className="card-header d-flex flex-column align-items-center">
            <Avatar src={doctor.avatar} className="mb-2" size={64} />
            <div className="text-center">
              <h4 className="mb-0 text-truncate">{doctor.firstName} {doctor.lastName}, M.D.</h4>
              <p className="mb-0 text-muted">{doctor.specialization}</p>
            </div>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <div>
                <p className="mb-1 text-muted"><b>Experience:</b> {doctor.experience}</p>
                <p className="mb-1 text-muted"><b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}</p>
                <p className="mb-3 text-muted"><b>Fees Per Consultation:</b> {doctor.feesPerCunsaltation}/-</p>
              </div>
              <div className="d-flex justify-content-start align-center">
                <Button type="primary">Book Appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default DoctorList;
